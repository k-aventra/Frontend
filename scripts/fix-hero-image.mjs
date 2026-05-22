/**
 * Fix hero side image: remove flat pink matte + white fringe halos.
 * Preserves UI panels, blazer, and subject (edge-connected flood only).
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const inputPath = path.resolve(
  process.argv[2] ??
    'C:/Users/User/.cursor/projects/c-Users-User-Desktop-k-aventra-frontend/assets/c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_aaef1045f4c475919097e4f6a346ab70_images_image-e7ec146b-996c-44c5-b2ed-0f29aed0cff5.png',
)
const outputPath = path.resolve('public/hero-side-image.png')
const backupPath = path.resolve('public/hero-side-image.before-fix.png')

if (!fs.existsSync(inputPath)) {
  console.error('Input not found:', inputPath)
  process.exit(1)
}

if (!fs.existsSync(backupPath) && fs.existsSync(outputPath)) {
  fs.copyFileSync(outputPath, backupPath)
}

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const pixels = data
const total = width * height
const visited = new Uint8Array(total)
const remove = new Uint8Array(total)

function idx(x, y) {
  return (y * width + x) * channels
}

function rgba(x, y) {
  const i = idx(x, y)
  return [pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]]
}

function sampleBorderColor() {
  const samples = []
  const pad = 8
  for (let y = 0; y < pad; y++) {
    for (let x = 0; x < width; x += 4) {
      samples.push(rgba(x, y))
      samples.push(rgba(x, height - 1 - y))
    }
  }
  for (let x = 0; x < pad; x++) {
    for (let y = 0; y < height; y += 4) {
      samples.push(rgba(x, y))
      samples.push(rgba(width - 1 - x, y))
    }
  }
  const r = Math.round(samples.reduce((s, c) => s + c[0], 0) / samples.length)
  const g = Math.round(samples.reduce((s, c) => s + c[1], 0) / samples.length)
  const b = Math.round(samples.reduce((s, c) => s + c[2], 0) / samples.length)
  return [r, g, b]
}

const [br, bg, bb] = sampleBorderColor()
console.log('Border matte sample:', br, bg, bb)

function saturation(r, g, b) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  return max === 0 ? 0 : (max - min) / max
}

function isUiWhite(r, g, b) {
  // Neutral dashboard whites only — not blush matte (r > g > b)
  return (
    r > 220 &&
    g > 215 &&
    b > 218 &&
    Math.abs(r - g) < 7 &&
    Math.abs(g - b) < 7 &&
    Math.abs(r - b) < 9
  )
}

function isBackdropPixel(r, g, b, a) {
  if (a < 8) return true

  const dr = r - br
  const dg = g - bg
  const db = b - bb
  const dist = Math.sqrt(dr * dr + dg * dg + db * db)

  if (dist < 28) return true

  const lum = (r + g + b) / 3
  if (lum < 22) return true

  // Soft blush fills connected to outer matte
  if (lum > 210 && r >= g - 10 && g >= b - 22 && dist < 55) return true

  return false
}

function matteDistance(r, g, b) {
  const dr = r - br
  const dg = g - bg
  const db = b - bb
  return Math.sqrt(dr * dr + dg * dg + db * db)
}

function isFringePixel(r, g, b, a) {
  if (a < 8) return false
  const lum = (r + g + b) / 3
  const sat = saturation(r, g, b)
  const dist = matteDistance(r, g, b)

  // Blush export halo (same family as border matte)
  if (dist < 42 && lum > 215) return true

  // Near-neutral white halos
  if (
    lum > 238 &&
    sat < 0.06 &&
    r > 234 &&
    g > 230 &&
    b > 234 &&
    Math.abs(r - g) < 6 &&
    Math.abs(g - b) < 6
  ) {
    return true
  }

  return false
}

const queue = new Int32Array(total)
let head = 0
let tail = 0

function push(x, y) {
  const p = y * width + x
  if (visited[p]) return
  const [r, g, b, a] = rgba(x, y)
  if (!isBackdropPixel(r, g, b, a)) return
  if (isUiWhite(r, g, b)) return
  visited[p] = 1
  remove[p] = 1
  queue[tail++] = p
}

for (let x = 0; x < width; x++) {
  push(x, 0)
  push(x, height - 1)
}
for (let y = 0; y < height; y++) {
  push(0, y)
  push(width - 1, y)
}

while (head < tail) {
  const p = queue[head++]
  const x = p % width
  const y = (p - x) / width
  if (x > 0) push(x - 1, y)
  if (x < width - 1) push(x + 1, y)
  if (y > 0) push(x, y - 1)
  if (y < height - 1) push(x, y + 1)
}

let removedBackdrop = 0
for (let p = 0; p < total; p++) {
  if (remove[p]) {
    const i = p * channels
    pixels[i + 3] = 0
    removedBackdrop++
  }
}

console.log(
  `Backdrop removed: ${removedBackdrop} (${((removedBackdrop / total) * 100).toFixed(1)}%)`,
)

function alphaAt(x, y) {
  return pixels[idx(x, y) + 3]
}

let fringeRemoved = 0
for (let pass = 0; pass < 6; pass++) {
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = idx(x, y)
      const a = pixels[i + 3]
      if (a < 8) continue
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      if (!isFringePixel(r, g, b, a)) continue

      let transparentNeighbors = 0
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue
          if (alphaAt(x + dx, y + dy) < 8) transparentNeighbors++
        }
      }
      if (transparentNeighbors < 2) continue

      pixels[i + 3] = 0
      fringeRemoved++
    }
  }
}

console.log(`Fringe pixels removed: ${fringeRemoved}`)

// Peel additional blush/white halo rings
for (let pass = 0; pass < 12; pass++) {
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = idx(x, y)
      if (pixels[i + 3] < 8) continue
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      if (isUiWhite(r, g, b)) continue

      const lum = (r + g + b) / 3
      const dist = matteDistance(r, g, b)
      const nearTransparent =
        alphaAt(x - 1, y) < 8 ||
        alphaAt(x + 1, y) < 8 ||
        alphaAt(x, y - 1) < 8 ||
        alphaAt(x, y + 1) < 8

      if (!nearTransparent) continue
      if (dist < 55 && lum > 200) {
        pixels[i + 3] = 0
        fringeRemoved++
      }
    }
  }
}

// Remove tiny near-white speckles (compression artifacts in hair/UI gaps)
const speckle = new Uint8Array(total)
for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const p = y * width + x
    const i = p * channels
    if (pixels[i + 3] < 8) continue
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    if (isUiWhite(r, g, b)) continue
    const lum = (r + g + b) / 3
    if (lum < 245) continue
    speckle[p] = 1
  }
}

const q2 = new Int32Array(total)
let h2 = 0
let t2 = 0
for (let p = 0; p < total; p++) {
  if (!speckle[p]) continue
  const x = p % width
  const y = (p - x) / width
  if (x === 0 || y === 0 || x === width - 1 || y === height - 1) {
    q2[t2++] = p
    continue
  }
  if (!speckle[p - 1] || !speckle[p + 1] || !speckle[p - width] || !speckle[p + width]) {
    q2[t2++] = p
  }
}

const speckleRemove = new Uint8Array(total)
while (h2 < t2) {
  const p = q2[h2++]
  if (speckleRemove[p]) continue
  speckleRemove[p] = 1
  const x = p % width
  const y = (p - x) / width
  const neighbors = [p - 1, p + 1, p - width, p + width]
  for (const n of neighbors) {
    if (n < 0 || n >= total || !speckle[n] || speckleRemove[n]) continue
    q2[t2++] = n
  }
}

let speckleCount = 0
const MAX_SPECKLE = 120
for (let p = 0; p < total; p++) {
  if (!speckle[p] || speckleRemove[p]) continue
  const stack = [p]
  const component = []
  const seen = new Set()
  while (stack.length) {
    const cur = stack.pop()
    if (seen.has(cur)) continue
    seen.add(cur)
    component.push(cur)
    const x = cur % width
    const y = (cur - x) / width
    for (const n of [cur - 1, cur + 1, cur - width, cur + width]) {
      if (n < 0 || n >= total || !speckle[n] || speckleRemove[n] || seen.has(n)) continue
      stack.push(n)
    }
  }
  if (component.length > 0 && component.length <= MAX_SPECKLE) {
    for (const cur of component) {
      pixels[cur * channels + 3] = 0
      speckleCount++
    }
  }
}

console.log(`Extra halo + speckle removed: ${speckleCount}`)

// Soften alpha on 1px boundary
for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const i = idx(x, y)
    if (pixels[i + 3] < 8) continue
    let nearTransparent = 0
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue
        if (alphaAt(x + dx, y + dy) < 8) nearTransparent++
      }
    }
    if (nearTransparent >= 2) {
      pixels[i + 3] = Math.min(pixels[i + 3], 245)
    }
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath + '.tmp')

fs.renameSync(outputPath + '.tmp', outputPath)
console.log('Written:', outputPath, `${width}x${height}`)

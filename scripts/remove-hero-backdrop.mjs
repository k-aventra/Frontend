/**
 * Removes pink/black matte; preserves neutral-white UI panels.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const inputPath = path.resolve('public/hero-side-image.png')
const outputPath = inputPath

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const pixels = data
const total = width * height

function idx(x, y) {
  return (y * width + x) * channels
}

function isNeutralWhite(r, g, b) {
  return (
    r > 242 &&
    g > 242 &&
    b > 242 &&
    Math.abs(r - g) < 10 &&
    Math.abs(g - b) < 10 &&
    Math.abs(r - b) < 10
  )
}

function isMattePixel(r, g, b, a) {
  if (a < 10) return true
  if (isNeutralWhite(r, g, b)) return false

  const lum = (r + g + b) / 3
  if (lum < 25) return true

  // Pink / blush matte (including soft blob)
  if (lum > 200 && r >= g - 12 && g >= b - 18) return true

  return false
}

let removedCount = 0

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = idx(x, y)
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]

    if (!isMattePixel(r, g, b, pixels[i + 3])) continue

    pixels[i + 3] = 0
    removedCount++
  }
}

console.log(
  `Removed ${removedCount} / ${total} (${((removedCount / total) * 100).toFixed(1)}%)`,
)

await sharp(pixels, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(outputPath + '.tmp')

fs.renameSync(outputPath + '.tmp', outputPath)

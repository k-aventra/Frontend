/**
 * Rasterize hero artwork at display-native sizes so production never upscales a 398px asset.
 * 1x = 580px wide (matches .hero-side-image max-width in App.css)
 * 2x = 1160px wide (Retina / high-DPI)
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.resolve('public')
const displayWidth = 580
const displayHeight = Math.round((702 / 398) * displayWidth)
const assetsDir =
  'C:/Users/User/.cursor/projects/c-Users-User-Desktop-k-aventra-frontend/assets'

const svgPath = path.join(publicDir, 'Hero_side image.svg')
const pngOptions = {
  compressionLevel: 2,
  adaptiveFiltering: true,
  effort: 10,
}

function findAsset() {
  if (!fs.existsSync(assetsDir)) return null
  const files = fs.readdirSync(assetsDir)
  const match =
    files.find((f) => f.includes('Hero_side_image-b4449c8d')) ??
    files.find((f) => f.includes('Hero_side_image-e47ad1c3')) ??
    files.find((f) => f.includes('Hero_side_image'))
  return match ? path.join(assetsDir, match) : null
}

const assetPng = findAsset()
const inputPath = fs.existsSync(svgPath) ? svgPath : assetPng ?? path.join(publicDir, 'hero-side-image.png')

if (!inputPath || !fs.existsSync(inputPath)) {
  console.error('No hero source found (SVG or asset PNG).')
  process.exit(1)
}

console.log('Source:', inputPath)

const isSvg = inputPath.toLowerCase().endsWith('.svg')
const base = sharp(inputPath, isSvg ? { density: 300 } : undefined).ensureAlpha()

await base
  .clone()
  .resize(displayWidth, displayHeight, {
    fit: 'fill',
    kernel: sharp.kernel.lanczos3,
  })
  .png(pngOptions)
  .toFile(path.join(publicDir, 'hero-side-image.png'))

await base
  .clone()
  .resize(displayWidth * 2, displayHeight * 2, {
    fit: 'fill',
    kernel: sharp.kernel.lanczos3,
  })
  .png(pngOptions)
  .toFile(path.join(publicDir, 'hero-side-image@2x.png'))

const meta = await sharp(path.join(publicDir, 'hero-side-image.png')).metadata()
const meta2 = await sharp(path.join(publicDir, 'hero-side-image@2x.png')).metadata()
console.log('hero-side-image.png', `${meta.width}x${meta.height}`)
console.log('hero-side-image@2x.png', `${meta2.width}x${meta2.height}`)

import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const icons = [
  'use-case-finance-teams.png',
  'use-case-revenue-growth.png',
  'use-case-operations.png',
  'use-case-executive-leadership.png',
]

for (const name of icons) {
  const filePath = path.resolve('public', name)
  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  let cleared = 0

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const lum = (r + g + b) / 3
    if (lum < 32) {
      data[i + 3] = 0
      cleared++
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(filePath + '.tmp')

  fs.renameSync(filePath + '.tmp', filePath)
  console.log(name, `cleared ${cleared} px`)
}

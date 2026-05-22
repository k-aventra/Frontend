import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const assetsDir =
  'C:/Users/User/.cursor/projects/c-Users-User-Desktop-k-aventra-frontend/assets'
const publicDir = path.resolve('public')

const mappings = [
  {
    pattern: 'Enterprise_Data_Analytics',
    out: 'core-feature-enterprise-data-analytics.png',
  },
  {
    pattern: 'AI_Decision_Recommendations',
    out: 'core-feature-ai-decision-recommendations.png',
  },
  {
    pattern: 'Predictive_Intelligence',
    out: 'core-feature-predictive-intelligence.png',
  },
  {
    pattern: 'KPI___Performance_Monitoring',
    out: 'core-feature-kpi-monitoring.png',
  },
  {
    pattern: 'Executive_Decision_Dashboard',
    out: 'core-feature-executive-dashboard.png',
  },
]

const files = fs.readdirSync(assetsDir)

for (const { pattern, out } of mappings) {
  const srcName = files.find((f) => f.includes(pattern))
  if (!srcName) {
    console.error('Missing asset for', pattern)
    process.exit(1)
  }

  const srcPath = path.join(assetsDir, srcName)
  const outPath = path.join(publicDir, out)

  const { data, info } = await sharp(srcPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  let cleared = 0

  for (let i = 0; i < data.length; i += channels) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3
    if (lum < 32) {
      data[i + 3] = 0
      cleared++
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(outPath)

  console.log(out, `${width}x${height}`, `cleared ${cleared}px`)
}

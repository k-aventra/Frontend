import fs from 'node:fs'
import path from 'node:path'
import { removeBackground } from '@imgly/background-removal-node'
const inputPath = path.resolve(
  process.argv[2] ??
    'C:/Users/User/.cursor/projects/c-Users-User-Desktop-k-aventra-frontend/assets/c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_aaef1045f4c475919097e4f6a346ab70_images_image-e7ec146b-996c-44c5-b2ed-0f29aed0cff5.png',
)
const outputPath = path.resolve('public/hero-side-image.png')

const input = fs.readFileSync(inputPath)
console.log('Removing background with imgly…')

const blob = await removeBackground(
  new Blob([input], { type: 'image/png' }),
  {
  model: 'medium',
    output: { format: 'image/png', quality: 1 },
  },
)

const buf = Buffer.from(await blob.arrayBuffer())
fs.writeFileSync(outputPath, buf)
console.log('Written:', outputPath, buf.length, 'bytes')

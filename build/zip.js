const fs = require('fs')
const { resolve } = require('path')
const pkg = require('../package.json')

const browser = process.argv[2]

const entryDir = resolve(__dirname, `../dist/${browser}`)
const outputDir = resolve(
  __dirname,
  `../[${browser}] yt-caption-checker-${pkg.version}.zip`,
)
const hasDir = fs.existsSync(entryDir)

if (hasDir) {
  console.log(`zip: "${entryDir}"`)
  try {
    const output = fs.createWriteStream(outputDir)
    const archive = require('archiver')('zip', {
      zlib: { level: 9 },
    })

    archive.on('error', console.error)

    output.on('close', () => {
      console.log(`output: "${outputDir}"`)
      console.log(archive.pointer() + ' total bytes')
    })

    archive.pipe(output)
    archive.directory(entryDir, false)
    archive.finalize()
  } catch (err) {
    console.error(err)
  }
}

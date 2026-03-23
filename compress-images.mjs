import sharp from 'sharp'
import { readdir, stat, readFile, writeFile } from 'fs/promises'
import { join, extname } from 'path'

const ASSETS_DIR = './src/assets'
const MAX_WIDTH = 1920
const QUALITY = 75

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath))
    } else if (['.webp', '.jpg', '.jpeg', '.png'].includes(extname(entry.name).toLowerCase())) {
      const info = await stat(fullPath)
      if (info.size > 200 * 1024) {
        files.push({ path: fullPath, size: info.size })
      }
    }
  }
  return files
}

async function compressImage(filePath, originalSize) {
  try {
    // Read entire file into buffer first to avoid file lock issues
    const inputBuffer = await readFile(filePath)
    
    const metadata = await sharp(inputBuffer).metadata()
    
    let pipeline = sharp(inputBuffer)
    
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true })
    }
    
    const ext = extname(filePath).toLowerCase()
    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: QUALITY, effort: 6 })
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true })
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 })
    }
    
    const outputBuffer = await pipeline.toBuffer()
    
    if (outputBuffer.length < originalSize) {
      await writeFile(filePath, outputBuffer)
      const savedMB = ((originalSize - outputBuffer.length) / (1024 * 1024)).toFixed(2)
      const newSizeMB = (outputBuffer.length / (1024 * 1024)).toFixed(2)
      console.log(`✓ ${filePath} — ${(originalSize / (1024 * 1024)).toFixed(2)}MB → ${newSizeMB}MB (saved ${savedMB}MB)`)
    } else {
      console.log(`○ ${filePath} — already optimal`)
    }
  } catch (err) {
    console.error(`✗ ${filePath} — ${err.message}`)
  }
}

async function main() {
  console.log('Compressing images...\n')
  const files = await getFiles(ASSETS_DIR)
  console.log(`Found ${files.length} images > 200KB\n`)
  
  for (const file of files) {
    await compressImage(file.path, file.size)
  }
  
  console.log('\nDone!')
}

main()

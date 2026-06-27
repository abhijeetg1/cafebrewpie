import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import heicConvert from 'heic-convert';

const srcDir = 'c:/Users/tarag/Downloads/cafe';
const destDir = 'c:/Users/tarag/Downloads/cafe/app/public/assets';

async function convertImages() {
  const files = fs.readdirSync(srcDir);
  const envFiles = files.filter(f => f.toLowerCase().startsWith('env') && f.toLowerCase().endsWith('.heic'));

  console.log(`Found ${envFiles.length} HEIC files to convert.`);

  for (const file of envFiles) {
    const srcPath = path.join(srcDir, file);
    const destName = file.replace(/\.heic$/i, '.jpg');
    const destPath = path.join(destDir, destName);

    console.log(`Converting ${file} to ${destName}...`);
    try {
      const inputBuffer = fs.readFileSync(srcPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer, // the HEIC file buffer
        format: 'JPEG',      // output format
        quality: 0.8         // the jpeg compression quality, between 0 and 1
      });

      fs.writeFileSync(destPath, outputBuffer);
      console.log(`Successfully converted ${file}!`);
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }
  
  console.log('All conversions finished!');
}

convertImages();

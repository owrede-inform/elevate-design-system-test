#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const cacheDir = path.join(__dirname, '..', '.cache', 'caches', 'gatsby-plugin-sharp');
const publicStaticDir = path.join(__dirname, '..', 'public', 'static');

function checkCacheStatus() {
  console.log('🖼️  Gatsby Image Cache Status');
  console.log('================================');
  
  // Check sharp cache
  if (fs.existsSync(cacheDir)) {
    const files = fs.readdirSync(cacheDir);
    console.log(`✅ Sharp cache found: ${files.length} processed images`);
  } else {
    console.log('❌ No sharp cache found');
  }
  
  // Check public static files
  if (fs.existsSync(publicStaticDir)) {
    const files = getAllFiles(publicStaticDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    console.log(`✅ Static images found: ${imageFiles.length} files`);
  } else {
    console.log('❌ No static images found');
  }
  
  console.log('');
  console.log('Commands:');
  console.log('  yarn dev:preserve-cache  - Fast dev with existing cache');
  console.log('  yarn render-images       - Rebuild all images');
  console.log('  yarn clean:images        - Clear image cache only');
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

checkCacheStatus();
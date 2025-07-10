#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script processes images in the public/images directory:
 * - Compresses JPG/JPEG files
 * - Creates WebP versions
 * - Creates AVIF versions (higher quality but smaller file size)
 * - Generates responsive sizes for key images
 *
 * Usage:
 * 1. Install dependencies: npm install sharp glob
 * 2. Run: node scripts/optimize-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import sharp from 'sharp';

// Get the directory of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const OPTIMIZED_DIR = path.join(IMAGES_DIR, 'optimized');

// Ensure directories exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Quality settings
const QUALITY_SETTINGS = {
  jpg: 80,
  webp: 75,
  avif: 60,
};

// Sizes for responsive images
const SIZES = [640, 1080, 1920];

// Process each image
async function processImages() {
  try {
    // Get all JPG/JPEG files
    const imageFiles = await glob('**/*.{jpg,jpeg,png}', { cwd: IMAGES_DIR, absolute: true });

    console.log(`Found ${imageFiles.length} images to process`);

    for (const imagePath of imageFiles) {
      // Skip already optimized images
      if (imagePath.includes('/optimized/')) continue;

      const filename = path.basename(imagePath);
      const filenameWithoutExt = path.parse(filename).name;

      console.log(`Processing ${filename}...`);

      try {
        const imageBuffer = fs.readFileSync(imagePath);
        const metadata = await sharp(imageBuffer).metadata();

        // Base optimized image
        await sharp(imageBuffer)
          .resize(Math.min(metadata.width, 1920))
          .jpeg({ quality: QUALITY_SETTINGS.jpg, mozjpeg: true })
          .toFile(path.join(OPTIMIZED_DIR, filename));

        // WebP version
        await sharp(imageBuffer)
          .resize(Math.min(metadata.width, 1920))
          .webp({ quality: QUALITY_SETTINGS.webp })
          .toFile(path.join(OPTIMIZED_DIR, `${filenameWithoutExt}.webp`));

        // AVIF version
        await sharp(imageBuffer)
          .resize(Math.min(metadata.width, 1920))
          .avif({ quality: QUALITY_SETTINGS.avif })
          .toFile(path.join(OPTIMIZED_DIR, `${filenameWithoutExt}.avif`));

        // Create responsive sizes for larger images
        if (metadata.width > 1080) {
          for (const width of SIZES) {
            if (width < metadata.width) {
              await sharp(imageBuffer)
                .resize(width)
                .jpeg({ quality: QUALITY_SETTINGS.jpg, mozjpeg: true })
                .toFile(path.join(OPTIMIZED_DIR, `${filenameWithoutExt}-${width}.jpg`));

              await sharp(imageBuffer)
                .resize(width)
                .webp({ quality: QUALITY_SETTINGS.webp })
                .toFile(path.join(OPTIMIZED_DIR, `${filenameWithoutExt}-${width}.webp`));
            }
          }
        }
      } catch (err) {
        console.error(`Error processing ${filename}:`, err);
      }
    }

    console.log('Image optimization complete!');
    console.log('Optimized images are in the public/images/optimized directory.');
    console.log('You can now update your code to use these optimized images.');

    // Output total size difference
    const originalSize = getDirectorySize(IMAGES_DIR) - getDirectorySize(OPTIMIZED_DIR);
    const optimizedSize = getDirectorySize(OPTIMIZED_DIR);

    console.log(`\nOriginal images: ${formatBytes(originalSize)}`);
    console.log(`Optimized images: ${formatBytes(optimizedSize)}`);
    console.log(
      `Reduction: ${formatBytes(originalSize - optimizedSize)} (${Math.round((1 - optimizedSize / originalSize) * 100)}%)`,
    );
  } catch (err) {
    console.error('Error during image optimization:', err);
  }
}

// Calculate directory size recursively
function getDirectorySize(directoryPath) {
  let size = 0;
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      size += stats.size;
    } else if (stats.isDirectory() && file !== 'optimized') {
      size += getDirectorySize(filePath);
    }
  }

  return size;
}

// Format bytes to human-readable format
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Run the script
processImages();

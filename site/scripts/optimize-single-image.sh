#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo "Error: ImageMagick is not installed. Please install it first."
  echo "macOS: brew install imagemagick"
  echo "Ubuntu: sudo apt-get install imagemagick"
  exit 1
fi

# Usage info
if [ "$#" -lt 1 ] || [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
  echo "Usage: $0 <image_path> [width] [quality]"
  echo ""
  echo "Arguments:"
  echo "  image_path  Path to the image file to optimize"
  echo "  width       Target width in pixels (default: 1920)"
  echo "  quality     JPEG quality (0-100, default: 80)"
  echo ""
  echo "Examples:"
  echo "  $0 public/images/hero.jpg"
  echo "  $0 public/images/hero.jpg 1200 85"
  exit 0
fi

# Parameters
IMAGE_PATH="$1"
WIDTH="${2:-1920}"  # Default width: 1920px
QUALITY="${3:-80}"  # Default quality: 80%

# Check if image exists
if [ ! -f "$IMAGE_PATH" ]; then
  echo "Error: Image file not found: $IMAGE_PATH"
  exit 1
fi

# Get image info
FILENAME=$(basename -- "$IMAGE_PATH")
EXTENSION="${FILENAME##*.}"
FILENAME_NO_EXT="${FILENAME%.*}"
DIRNAME=$(dirname "$IMAGE_PATH")
OUTPUT_DIR="$DIRNAME/optimized"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Optimized image paths
OPTIMIZED_JPG="$OUTPUT_DIR/$FILENAME_NO_EXT.jpg"
OPTIMIZED_WEBP="$OUTPUT_DIR/$FILENAME_NO_EXT.webp"
OPTIMIZED_AVIF="$OUTPUT_DIR/$FILENAME_NO_EXT.avif"

# Function to format file size
format_size() {
  local size=$1
  if [ $size -lt 1024 ]; then
    echo "${size}B"
  elif [ $size -lt 1048576 ]; then
    echo "$(( size / 1024 ))KB"
  else
    echo "$(( size / 1048576 ))MB"
  fi
}

# Get original file size
ORIGINAL_SIZE=$(stat -f%z "$IMAGE_PATH")
FORMATTED_ORIGINAL_SIZE=$(format_size $ORIGINAL_SIZE)

echo "Optimizing: $IMAGE_PATH"
echo "Original size: $FORMATTED_ORIGINAL_SIZE"
echo "Target width: ${WIDTH}px"
echo "Quality: $QUALITY%"
echo ""

# Optimize as JPG
echo "Creating optimized JPG..."
convert "$IMAGE_PATH" -resize "${WIDTH}x" -quality $QUALITY -strip "$OPTIMIZED_JPG"

# Create WebP version
echo "Creating WebP version..."
convert "$IMAGE_PATH" -resize "${WIDTH}x" -quality $QUALITY -strip "$OPTIMIZED_WEBP"

# Create AVIF version if available
echo "Creating AVIF version..."
if command -v magick &> /dev/null; then
  magick "$IMAGE_PATH" -resize "${WIDTH}x" -quality $QUALITY -strip "$OPTIMIZED_AVIF"
elif command -v avifenc &> /dev/null; then
  # If avifenc is available (from libavif-bin)
  convert "$IMAGE_PATH" -resize "${WIDTH}x" png:- | avifenc - "$OPTIMIZED_AVIF" -s 0 -d 8
else
  echo "Warning: AVIF conversion not available. Install ImageMagick with AVIF support or libavif-bin."
fi

# Calculate size reduction
if [ -f "$OPTIMIZED_JPG" ]; then
  JPG_SIZE=$(stat -f%z "$OPTIMIZED_JPG")
  FORMATTED_JPG_SIZE=$(format_size $JPG_SIZE)
  JPG_REDUCTION=$((100 - (JPG_SIZE * 100 / ORIGINAL_SIZE)))
  echo "JPG size: $FORMATTED_JPG_SIZE (${JPG_REDUCTION}% reduction)"
fi

if [ -f "$OPTIMIZED_WEBP" ]; then
  WEBP_SIZE=$(stat -f%z "$OPTIMIZED_WEBP")
  FORMATTED_WEBP_SIZE=$(format_size $WEBP_SIZE)
  WEBP_REDUCTION=$((100 - (WEBP_SIZE * 100 / ORIGINAL_SIZE)))
  echo "WebP size: $FORMATTED_WEBP_SIZE (${WEBP_REDUCTION}% reduction)"
fi

if [ -f "$OPTIMIZED_AVIF" ]; then
  AVIF_SIZE=$(stat -f%z "$OPTIMIZED_AVIF")
  FORMATTED_AVIF_SIZE=$(format_size $AVIF_SIZE)
  AVIF_REDUCTION=$((100 - (AVIF_SIZE * 100 / ORIGINAL_SIZE)))
  echo "AVIF size: $FORMATTED_AVIF_SIZE (${AVIF_REDUCTION}% reduction)"
fi

echo ""
echo "Optimized images saved to $OUTPUT_DIR/" 
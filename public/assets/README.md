# Assets Folder

This folder contains the images and assets used in the VBB Store website.

## Required Images

Please add the following images to this folder:

1. **logo-CvmVJeuM.png** - Logo image used in the header navigation
   - Recommended size: 150x50px or similar aspect ratio
   - Format: PNG with transparent background

2. **hero-logo-2LYjEMI7.jpg** - Hero section logo/image
   - Recommended size: 320x320px (square)
   - Format: JPG or PNG
   - This is the main visual in the hero section

## Image Placeholders

Currently, the website uses these image paths:
- `/assets/logo-CvmVJeuM.png` - Header logo
- `/assets/hero-logo-2LYjEMI7.jpg` - Hero section image

## Product Images

Product images are currently loaded from Supabase storage URLs:
- `https://yxifzzvsoqzsdkeibvgg.supabase.co/storage/v1/object/public/products/...`

You can replace these with your own image URLs in the ProductsSection component located at:
`src/components/sections/ProductsSection.tsx`

## Note

Make sure to replace these placeholder image paths with your actual images for the website to display correctly.

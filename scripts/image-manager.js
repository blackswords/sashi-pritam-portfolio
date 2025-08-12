// Image Management Helper Script
// Run with: node scripts/image-manager.js

const fs = require("fs")
const path = require("path")

// Create necessary directories
const directories = ["public/images", "public/images/gallery", "public/images/blog", "public/images/projects"]

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log(`✅ Created directory: ${dir}`)
  } else {
    console.log(`📁 Directory already exists: ${dir}`)
  }
})

// List current images
function listImages() {
  console.log("\n📸 Current Images:")

  directories.slice(1).forEach((dir) => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))

      console.log(`\n${dir}:`)
      if (files.length === 0) {
        console.log("  (no images found)")
      } else {
        files.forEach((file) => console.log(`  - ${file}`))
      }
    }
  })
}

// Check for missing images referenced in components
function checkMissingImages() {
  console.log("\n🔍 Checking for missing images...")

  const requiredImages = [
    "public/profile-photo.jpg",
    "public/images/gallery/hackathon-victory.jpg",
    "public/images/gallery/tech-fest-planning.jpg",
    "public/images/gallery/ntt-data-internship.jpg",
    "public/images/gallery/acm-events.jpg",
    "public/images/gallery/research-presentation.jpg",
    "public/images/gallery/team-collaboration.jpg",
    "public/images/blog/rag-systems-cover.jpg",
    "public/images/blog/tech-journey-cover.jpg",
    "public/images/blog/hacknova-win-cover.jpg",
  ]

  const missing = requiredImages.filter((img) => !fs.existsSync(img))

  if (missing.length === 0) {
    console.log("✅ All required images are present!")
  } else {
    console.log("❌ Missing images:")
    missing.forEach((img) => console.log(`  - ${img}`))
    console.log("\n💡 Add these images to see them in your portfolio!")
  }
}

// Run the checks
listImages()
checkMissingImages()

console.log("\n📝 Image Guidelines:")
console.log("- Use .jpg, .png, or .webp formats")
console.log("- Gallery images: 1200x800px recommended")
console.log("- Blog covers: 600x400px recommended")
console.log("- Profile photo: 400x400px recommended")
console.log("- Use descriptive filenames with hyphens (no spaces)")

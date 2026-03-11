const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");

// Clean dist folder
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Create dist folder
fs.mkdirSync(distDir);

// Files to copy
const filesToCopy = ["index.js", "package.json"];

filesToCopy.forEach(file => {
  fs.copyFileSync(
    path.join(__dirname, file),
    path.join(distDir, file)
  );
});

console.log("Build completed. Files copied to dist/");
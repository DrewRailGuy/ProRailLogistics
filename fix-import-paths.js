const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'app');

// Recursively get all .tsx files in the app/ directory
function getAllTsxFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (entry.isFile() && fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Replace relative imports with @ alias
function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  const updated = content
    .replace(/(['"`])\.\.\/\.\.\/\.\.\/components\/ui\/(.*?)\1/g, "'@/components/ui/$2'")
    .replace(/(['"`])\.\.\/\.\.\/components\/ui\/(.*?)\1/g, "'@/components/ui/$2'")
    .replace(/(['"`])\.\.\/components\/ui\/(.*?)\1/g, "'@/components/ui/$2'");

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

const files = getAllTsxFiles(targetDir);
files.forEach(fixImportsInFile);

console.log(`\n✅ Finished updating import paths in ${files.length} files.`);

import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFiles() {
  walkDir(SRC_DIR, (filePath) => {
    if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      const original = content;

      // Complex replacements
      content = content.replace(/from-soft-pink via-soft-yellow to-soft-blue/g, 'from-theme-pink to-theme-orange');
      content = content.replace(/bg-gradient-to-r from-soft-blue\/20 to-soft-pink\/20/g, 'bg-gradient-to-r from-theme-orange/20 to-theme-pink/20');

      // Colors
      content = content.replace(/bg-dark\b/g, 'bg-theme-bg');
      content = content.replace(/card-dark\b/g, 'card-bg');
      
      // Text & Borders Opacity
      content = content.replace(/text-white\/(\d+)/g, 'text-theme-text/$1');
      content = content.replace(/border-white\/(\d+)/g, 'border-theme-text/$1');
      content = content.replace(/bg-white\/(\d+)/g, 'bg-theme-text/$1');
      content = content.replace(/hover:bg-white\/(\d+)/g, 'hover:bg-theme-text/$1');

      // Base classes
      content = content.replace(/text-white\b/g, 'text-theme-text');
      content = content.replace(/border-white\b/g, 'border-theme-text');
      
      // bg-white text-dark buttons: we want bg-theme-text text-theme-bg
      content = content.replace(/bg-white\s+text-dark\b/g, 'bg-theme-text text-theme-bg');
      content = content.replace(/bg-white/g, 'bg-theme-text'); // any remaining bg-white should be dark bg
      
      // text-dark mapping
      content = content.replace(/text-dark\b/g, 'text-theme-bg');
      
      // Simple color strings
      content = content.replace(/soft-pink/g, 'theme-pink');
      content = content.replace(/soft-blue/g, 'theme-orange');
      content = content.replace(/soft-yellow/g, 'theme-orange');

      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

processFiles();

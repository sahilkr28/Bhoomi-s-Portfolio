import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

function processFiles() {
  function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
      let fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) walkDir(fp);
      else if (fp.endsWith('.jsx')) {
        let content = fs.readFileSync(fp, 'utf8');
        let orig = content;

        content = content.replace(/from-dark\b/g, 'from-theme-bg');
        content = content.replace(/via-dark\b/g, 'via-theme-bg');
        content = content.replace(/to-dark\b/g, 'to-theme-bg');
        
        // Old shadow hexes:
        // rgba(248,200,220, x) -> soft-pink
        // rgba(201,228,246, x) -> soft-blue
        content = content.replace(/rgba\(201,228,246/g, 'rgba(255,214,165'); // replace blue with orange
        // soft pink is kept as theme-pink so no need to replace it.

        if (content !== orig) {
          fs.writeFileSync(fp, content, 'utf8');
          console.log('Fixed:', fp);
        }
      }
    });
  }
  walkDir(SRC_DIR);
}

processFiles();

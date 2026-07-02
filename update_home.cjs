const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const targetContent = `<footer className="p-8 text-center text-[12.5px] text-ink-soft border-t border-line" id="contact">
        <div>© 2026 Rural Utility Cost. Results are estimates.</div>
        <div className="mt-2 flex gap-4 justify-center flex-wrap">
          <a href="#" className="hover:text-barn transition-colors">Parent site</a>
          <a href="#" className="hover:text-barn transition-colors">Contact</a>
          <a href="#" className="hover:text-barn transition-colors">Terms of use</a>
          <a href="#" className="hover:text-barn transition-colors">Privacy policy</a>
          <a href="#" className="hover:text-barn transition-colors">Disclaimer</a>
        </div>
      </footer>`;

if (content.includes(targetContent)) {
  const updatedContent = content.replace(targetContent, '');
  fs.writeFileSync('src/pages/Home.tsx', updatedContent);
  console.log('Replaced successfully');
} else {
  console.log('Target content not found exactly. Attempting regex or split.');
  const index = content.indexOf('<footer className="p-8 text-center');
  if (index !== -1) {
    const end = content.lastIndexOf('</div>\n  );\n}');
    if (end !== -1) {
       fs.writeFileSync('src/pages/Home.tsx', content.substring(0, index) + '    </div>\n  );\n}');
       console.log('Replaced using fallback.');
    }
  } else {
    console.log('Not found at all.');
  }
}

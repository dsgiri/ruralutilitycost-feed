const fs = require('fs');
const content = fs.readFileSync('src/components/Disclaimer.tsx', 'utf8');

const targetContent = `export function Disclaimer({ calculatorName, customText, className = "" }: DisclaimerProps) {
  return (
    <div className={\`bg-paper-2 border border-line rounded-lg p-4 mt-6 text-[12px] leading-relaxed text-ink-soft flex gap-3 items-start \${className}\`} role="note" aria-label="Calculator Disclaimer">
      <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <strong className="text-ink">Disclaimer{calculatorName ? \` for \${calculatorName}\` : ''}: </strong>
        {customText || DEFAULT_DISCLAIMER}
      </div>
    </div>
  );
}`;

const replacementContent = `export function Disclaimer({ calculatorName, customText, className = "" }: DisclaimerProps) {
  return (
    <details className={\`mt-4 group \${className}\`}>
      <summary className="list-none cursor-pointer flex items-center justify-center gap-1.5 text-[11px] text-ink-soft/70 hover:text-ink transition-colors select-none">
        <Info className="w-3.5 h-3.5" />
        <span className="underline decoration-ink-soft/30 underline-offset-2">Results are estimates. Read disclaimer</span>
      </summary>
      <div className="mt-3 bg-white/60 border border-line/40 rounded-lg p-3 text-[10.5px] leading-relaxed text-ink-soft text-left shadow-sm">
        <strong className="text-ink">Disclaimer{calculatorName ? \` for \${calculatorName}\` : ''}: </strong>
        {customText || DEFAULT_DISCLAIMER}
      </div>
    </details>
  );
}`;

if (content.includes(targetContent)) {
  fs.writeFileSync('src/components/Disclaimer.tsx', content.replace(targetContent, replacementContent));
  console.log('Successfully updated Disclaimer.tsx');
} else {
  console.log('Target content not found.');
}

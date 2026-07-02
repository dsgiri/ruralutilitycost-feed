import { Info } from 'lucide-react';

interface DisclaimerProps {
  calculatorName?: string;
  customText?: string;
  className?: string;
}

export const DEFAULT_DISCLAIMER = "These figures are estimates based on standard assumptions and user inputs. This tool is for informational purposes only and does not replace professional financial, legal, engineering, or agricultural advice. We disclaim all liability for decisions, costs, losses, or damages arising from reliance on these results. Please consult qualified local professionals or certified advisors for guidance specific to your situation.";

export function Disclaimer({ calculatorName, customText, className = "" }: DisclaimerProps) {
  return (
    <details className={`mt-4 group ${className}`}>
      <summary className="list-none cursor-pointer flex items-center justify-center gap-1.5 text-[11px] text-ink-soft/70 hover:text-ink transition-colors select-none">
        <Info className="w-3.5 h-3.5" />
        <span className="underline decoration-ink-soft/30 underline-offset-2">Results are estimates. Read disclaimer</span>
      </summary>
      <div className="mt-3 bg-white/60 border border-line/40 rounded-lg p-3 text-[10.5px] leading-relaxed text-ink-soft text-left shadow-sm">
        <strong className="text-ink">Disclaimer{calculatorName ? ` for ${calculatorName}` : ''}: </strong>
        {customText || DEFAULT_DISCLAIMER}
      </div>
    </details>
  );
}

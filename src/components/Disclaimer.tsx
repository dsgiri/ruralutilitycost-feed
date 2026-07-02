import { Info } from 'lucide-react';

interface DisclaimerProps {
  calculatorName?: string;
  customText?: string;
  className?: string;
}

export const DEFAULT_DISCLAIMER = "These figures are estimates based on standard assumptions and user inputs. This tool is for informational purposes only and does not replace professional financial, legal, engineering, or agricultural advice. We disclaim all liability for decisions, costs, losses, or damages arising from reliance on these results. Please consult qualified local professionals or certified advisors for guidance specific to your situation.";

export function Disclaimer({ calculatorName, customText, className = "" }: DisclaimerProps) {
  return (
    <div className={`bg-paper-2 border border-line rounded-lg p-4 mt-6 text-[12px] leading-relaxed text-ink-soft flex gap-3 items-start ${className}`} role="note" aria-label="Calculator Disclaimer">
      <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <strong className="text-ink">Disclaimer{calculatorName ? ` for ${calculatorName}` : ''}: </strong>
        {customText || DEFAULT_DISCLAIMER}
      </div>
    </div>
  );
}

const fs = require('fs');
const content = fs.readFileSync('src/components/ToolContent.tsx', 'utf8');

const newContent = `
  if (toolId === 'feed-waste') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter your monthly feed spend and an estimated waste percentage, and the tool calculates the dollar value you're losing each month and year. From there, it's much easier to justify the time or equipment investment needed to fix the underlying cause.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why waste percentage matters more than people assume</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Feed waste in livestock operations commonly runs anywhere from 5% (well-managed bunk feeding) to 25% or more (open ground feeding, poorly maintained equipment, or overfilled feeders). That range represents a massive swing in effective feed cost — two operations paying the identical price per ton can have wildly different real costs per pound of gain, purely based on how much of that feed actually reaches the animal.
        </p>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Because waste is a percentage of total spend, it also scales with your feed budget — meaning larger operations lose proportionally larger dollar amounts to the same waste percentage, which is exactly why even a small improvement is worth chasing.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say your operation spends $6,000/month on feed, and after observing your bunks for a week, you estimate 12% is lost to spillage and spoilage:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li>Monthly loss = $6,000 × 12% = <strong>$720/month</strong></li>
          <li>Annual loss = $720 × 12 = <strong>$8,640/year</strong></li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">Now suppose you invest in adjustable bunk feeders and tighten your feeding schedule, cutting waste to 6%:</p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>New monthly loss = $6,000 × 6% = $360/month</li>
          <li>Annual savings = ($720 - $360) × 12 = <strong>$4,320/year</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          That's real money recovered without buying a single extra bag of feed — just from reducing what never reaches the animal in the first place. It's often one of the highest-return, lowest-cost changes available to a feeding operation.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Not measuring waste at all.</strong> Most operations estimate waste, if they think about it, as a rough guess rather than an observed number. Spend a week watching bunks or feeders at feeding time and estimate more precisely — the real number is often higher than the gut-feel estimate.</li>
          <li><strong>Overfilling feeders.</strong> Filling bunks or troughs beyond what animals will clean up before the next feeding is one of the single biggest and easiest-to-fix sources of waste. Match fill volume to consumption rate, not container capacity.</li>
          <li><strong>Feeding on open ground.</strong> Ground feeding without a bunk or mat can lose 15-20%+ to trampling and contamination, especially in wet conditions. Even a simple feeding mat or portable bunk can meaningfully cut this.</li>
          <li><strong>Ignoring storage-stage losses.</strong> Waste isn't only at the feeder — spoilage from poor storage, pest access, or moisture intrusion in bins and bunkers counts too, and often goes unnoticed until a load is visibly spoiled.</li>
          <li><strong>Treating waste reduction as a one-time fix.</strong> Feeder wear, weather changes, and herd behavior shift over time. Re-check your waste estimate periodically, especially after equipment changes or seasonal transitions.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you know your dollar cost of waste, useful next steps include:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Feed Cost Calculator</strong> — see how your effective cost per ton changes once waste is factored in, versus the quoted price.</li>
          <li><strong>Feed Budget Planner</strong> — build waste-adjusted numbers into your annual forecast so your budget reflects real consumption, not just purchased volume.</li>
          <li><strong>Cost per Head / per Day Calculator</strong> — recalculate your true daily cost per head after waste, which is often meaningfully higher than the "on paper" number.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">What's a realistic waste percentage to target?</h3>
            <p className="leading-relaxed">Well-managed bunk feeding operations commonly achieve 5-8% waste. Anything consistently above 15% usually points to a specific fixable cause — overfilling, poor feeder design, or ground feeding — rather than an unavoidable baseline.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How do I estimate my waste percentage without special equipment?</h3>
            <p className="leading-relaxed">Weigh what goes into the feeder and, before the next feeding, weigh or visually estimate what's left uneaten or on the ground versus consumed. A rough week-long observation is usually enough to get a workable estimate.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does waste reduction equipment pay for itself?</h3>
            <p className="leading-relaxed">Often, yes, and usually faster than expected — the worked example above shows over $4,000/year recovered from a modest waste reduction on a mid-sized feed budget, which frequently exceeds the cost of feeder upgrades within the first year or two.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Is spoilage the same thing as feeding waste for this calculator?</h3>
            <p className="leading-relaxed">This tool treats them as one combined loss percentage for simplicity, but they have different causes and different fixes — spoilage points back to storage practices, while feeding waste points to feeder design and feeding schedule. Track them separately if you want to target the fix precisely.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on the waste percentage you enter. Actual waste varies by feed type, equipment, weather, and management practices. Observed, measured waste percentages will always be more accurate than estimated ones.
        </div>
      </article>
    );
  }
`;

const updatedContent = content.replace('  return null;\n}', newContent + '  return null;\n}');
fs.writeFileSync('src/components/ToolContent.tsx', updatedContent);
console.log('Appended feed-waste tool content.');

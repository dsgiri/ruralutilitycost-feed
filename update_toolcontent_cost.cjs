const fs = require('fs');
const content = fs.readFileSync('src/components/ToolContent.tsx', 'utf8');

const newContent = `
  if (toolId === 'cost-per-head') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter your total daily (or monthly) feed cost and your head count, and the tool breaks that down into a clean cost-per-head-per-day figure. That number is what you'll use to track spend against budget, compare across time periods, and catch drift before it becomes a real problem.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why the aggregate number hides problems</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          A monthly feed bill going from $11,800 to $12,600 doesn't tell you much on its own — did herd size change? Did price per ton go up? Did waste increase? Breaking that same number down to cost per head per day makes the cause much easier to spot, because you can compare it directly against your historical baseline and rule causes in or out.
        </p>
        <p className="text-ink-soft mb-6 leading-relaxed">
          If cost per head per day rises while your herd size and feed price are both flat, something else changed — likely intake, waste, or a ration adjustment — and you can go investigate that specific thing instead of staring at a bigger invoice with no idea why.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say your operation is running a total daily feed cost of $420 across 130 head:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li>Cost per head per day = $420 ÷ 130 = <strong>$3.23/head/day</strong></li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">Now suppose next month your total daily cost rises to $460, but your head count also grew to 142 (a few additions to the herd):</p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>Cost per head per day = $460 ÷ 142 = <strong>$3.24/head/day</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          Almost identical — the aggregate number looks alarming (+$40/day) but the per-head number shows the increase is almost entirely explained by herd growth, not a cost problem. That's the value of tracking the per-head figure: it separates "we're feeding more animals" from "something got more expensive," which are very different problems requiring very different responses.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Tracking only the aggregate invoice total.</strong> Total spend conflates herd size changes, price changes, and waste changes into one number. Per-head tracking isolates the actual driver.</li>
          <li><strong>Using an outdated head count.</strong> If your headcount changes frequently (calving, sales, purchases), recalculate using your current count, not the number from when you last ran the math.</li>
          <li><strong>Mixing feed types into one blended number without noting it.</strong> If different groups (calves, finishing cattle, cows) are on different rations at different costs, a single blended per-head number can mask which group's cost is actually shifting. Break out by group where possible.</li>
          <li><strong>Not comparing against a consistent baseline.</strong> Cost per head per day naturally shifts with season, feed type, and animal class. Compare current numbers against the same period last year or the same production stage, not an arbitrary earlier month.</li>
          <li><strong>Forgetting to include waste and delivery costs.</strong> If your "total daily cost" input only reflects the raw feed invoice, your per-head number understates your real cost. Include delivery fees and a waste adjustment for a more accurate figure.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you have a reliable cost-per-head-per-day figure, useful next steps include:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Feed Budget Planner</strong> — multiply this daily figure out to a full annual forecast for cash flow planning.</li>
          <li><strong>Feed Waste Reduction Planner</strong> — check whether waste is inflating your per-head number beyond what the ration itself costs.</li>
          <li><strong>Feed Conversion Estimator</strong> — pair cost per head with FCR to see whether a higher per-head cost is actually buying more efficient gain, which can still be the better economic choice.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">What's a typical cost per head per day for cattle?</h3>
            <p className="leading-relaxed">It varies enormously by animal class, region, and current commodity pricing — a cow-calf pair on pasture costs very differently from a finishing steer on a high-concentrate ration. Your own historical trend is a more useful benchmark than an industry-wide average.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Should I calculate this per animal or as a herd average?</h3>
            <p className="leading-relaxed">A herd average is useful for overall budgeting, but if you're managing distinct groups (different ages, rations, or production stages), calculating separately for each group will surface problems that a single blended average would hide.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How often should I check this number?</h3>
            <p className="leading-relaxed">Weekly or monthly is typical for most operations — frequent enough to catch drift early, infrequent enough to avoid chasing normal day-to-day noise in the numbers.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does this account for non-feed costs like labor or veterinary care?</h3>
            <p className="leading-relaxed">No — this is a feed-cost-only figure. It's meant to isolate feed spend specifically so you can manage that line item, not as a full per-head cost of production number.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on the numbers you enter. Actual per-head costs vary with ration composition, animal class, and regional pricing. This is not a substitute for a full cost-of-production analysis from an agricultural accountant or extension economist.
        </div>
      </article>
    );
  }
`;

const updatedContent = content.replace('  return null;\n}', newContent + '  return null;\n}');
fs.writeFileSync('src/components/ToolContent.tsx', updatedContent);
console.log('Appended cost-per-head tool content.');

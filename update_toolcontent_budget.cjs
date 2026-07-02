const fs = require('fs');
const content = fs.readFileSync('src/components/ToolContent.tsx', 'utf8');

const newContent = `
  if (toolId === 'feed-budget') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter your current daily cost per head and your head count, and the tool projects that forward across a full year (or custom feeding period), giving you a total annual feed budget figure you can plan around, adjust, and track actuals against.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why annual forecasting matters even when prices change constantly</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          No forecast survives contact with a full year of commodity pricing unchanged — that's not the point. The value of an annual feed budget isn't perfect prediction, it's having a baseline number to measure against. Without a forecast, a 15% cost increase mid-year just feels like bad luck. With a forecast, you can see exactly how much of that increase is above plan, and decide whether to adjust ration, source a different supplier, or absorb it, based on real numbers instead of a gut reaction.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say you're running 120 head at a current daily cost of $3.20 per head:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li>Annual budget = $3.20 × 120 × 365 = <strong>$140,160/year</strong></li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">Now suppose you're planning for a herd expansion to 150 head partway through the year, and negotiating a supplier contract that should bring daily cost per head down to $2.95 through volume pricing:</p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>Adjusted annual budget = $2.95 × 150 × 365 = <strong>$161,512/year</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          Even with lower per-head pricing, the larger herd size pushes total spend up — which is exactly the kind of number you want to see months before it happens, not as a surprise on next January's invoice. This is also the point where it's worth checking whether your storage capacity and delivery schedule can actually support a 150-head feeding rate before committing to the expansion.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Using a single flat daily cost for the whole year.</strong> Feed cost per head typically varies by season — winter feeding, pasture availability, and animal class changes all shift the number. A single flat rate across 365 days is a starting estimate, not a precise forecast; break the year into seasons where you can for better accuracy.</li>
          <li><strong>Forecasting off current headcount without planning for changes.</strong> If you're planning to expand, cull, or seasonally adjust herd size, build that into the forecast rather than assuming a static number all year.</li>
          <li><strong>Ignoring commodity price trend and volatility.</strong> If corn or soybean meal prices are trending upward, a forecast built purely on current pricing will likely undershoot. Build in a buffer, especially for feed types tied closely to volatile commodity markets.</li>
          <li><strong>Not revisiting the forecast during the year.</strong> A budget set in January and never checked again isn't managing cost, it's just guessing once. Revisit quarterly at minimum against actual spend.</li>
          <li><strong>Forecasting feed cost in isolation from storage and delivery logistics.</strong> A bigger annual budget number is only useful if your storage capacity and delivery schedule can actually support the volume it implies — check your storage capacity against your forecasted annual tonnage.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you have an annual forecast, useful next steps include:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Feed Storage Capacity Calculator</strong> — confirm your storage can support the delivery frequency your forecasted volume requires.</li>
          <li><strong>Cost per Head / per Day Calculator</strong> — track actual daily spend against your forecast monthly to catch drift early.</li>
          <li><strong>Feed Waste Reduction Planner</strong> — factor a waste adjustment into your forecast, since unmanaged waste inflates your real annual number beyond the raw calculation.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">How far in advance should I build this forecast?</h3>
            <p className="leading-relaxed">Most producers plan on an annual cycle, but if you're negotiating supplier contracts, a rolling 12-18 month view gives you more room to lock in favorable pricing before it's needed.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Should I forecast using today's feed price or an estimated future price?</h3>
            <p className="leading-relaxed">Both are useful for different purposes — today's price gives you a conservative baseline, while a trend-adjusted estimate (if you're tracking commodity futures or supplier guidance) gives you a more realistic picture if prices are moving in a clear direction.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How do I account for seasonal feeding differences in one annual number?</h3>
            <p className="leading-relaxed">Break your year into seasonal segments (e.g., winter feeding vs. pasture season) with different daily cost estimates for each, then sum the segments rather than using one flat daily rate across all 365 days.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">What if my actual spend consistently comes in above the forecast?</h3>
            <p className="leading-relaxed">That's a signal worth investigating rather than just adjusting the forecast upward each time — check whether it's a price trend, a waste problem, an intake miscalculation, or a herd size change, using the other tools in this hub to isolate the cause.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on the numbers you enter and do not account for market volatility, seasonal variation, or unplanned herd changes. Use this as a planning baseline, not a guaranteed figure, and revisit it regularly against actual spend.
        </div>
      </article>
    );
  }
`;

const updatedContent = content.replace('  return null;\n}', newContent + '  return null;\n}');
fs.writeFileSync('src/components/ToolContent.tsx', updatedContent);
console.log('Appended feed-budget tool content.');

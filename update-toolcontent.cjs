const fs = require('fs');
const content = fs.readFileSync('src/components/ToolContent.tsx', 'utf8');

const newContent = `
  if (toolId === 'feed-conversion') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter daily feed intake and daily weight gain (either for an individual animal or averaged across a group), and the tool returns your feed conversion ratio — pounds of feed consumed per pound of gain. Lower is better: a lower FCR means you're getting more gain out of every pound of feed you buy.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why FCR matters more than most producers think</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Two pens of cattle can be fed the exact same ration at the exact same cost per ton and still produce very different returns, because FCR — not just feed cost — determines how much of that feed actually turns into saleable weight.
        </p>
        <p className="text-ink-soft mb-6 leading-relaxed">
          An FCR of 6:1 means it takes 6 lb of feed to produce 1 lb of gain. An FCR of 7:1 on the same ration means you're spending roughly 17% more on feed for the same pound of gain. Across a 500-head lot, that difference is thousands of dollars per turn — without a single change in feed price.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say you're tracking a pen of growing cattle averaging:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li>Daily feed intake: 18 lb/head</li>
          <li>Daily weight gain: 2.4 lb/head</li>
          <li>FCR = 18 ÷ 2.4 = <strong>7.5:1</strong></li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">
          Now compare that to a second pen on an adjusted ration:
        </p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>Daily feed intake: 17.5 lb/head</li>
          <li>Daily weight gain: 2.8 lb/head</li>
          <li>FCR = 17.5 ÷ 2.8 = <strong>6.25:1</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          The second pen is converting noticeably more efficiently — meaning less feed cost per pound of finished weight, even though the difference in daily intake looks small on paper. Over a 120-day feeding period on 200 head, that efficiency gap can represent multiple tons of feed saved for the same total weight gain.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Measuring over too short a window.</strong> Daily weight fluctuates with gut fill, weather, and handling stress. Calculate FCR over a rolling 7-14 day average at minimum, not a single day's numbers.</li>
          <li><strong>Ignoring feed waste in the intake number.</strong> If 10% of what goes into the bunk ends up on the ground, your "feed offered" number overstates actual intake, which skews FCR in either direction depending on how you're measuring. Use feed consumed, not feed offered, wherever possible.</li>
          <li><strong>Comparing FCR across very different animal classes.</strong> A young, rapidly growing animal will naturally convert more efficiently than a near-finished one. Compare FCR within similar weight ranges and production stages, not across your whole operation as one number.</li>
          <li><strong>Not accounting for health and stress events.</strong> Sickness, weather stress, and handling events all temporarily depress gain without necessarily reducing intake, which spikes FCR. A bad FCR reading during a stress period doesn't necessarily reflect the ration.</li>
          <li><strong>Chasing FCR alone without watching cost.</strong> The most feed-efficient ration isn't automatically the most profitable one if it costs significantly more per ton. Pair FCR with your feed cost calculator results to see the full economic picture, not efficiency in isolation.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you have a reliable FCR reading, useful next steps include:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Ration Comparison Tool</strong> — test whether an adjusted ration improves FCR enough to justify a different price per ton.</li>
          <li><strong>Cost per Head / per Day Calculator</strong> — translate FCR-driven feed cost into a daily budget number you can track against actuals.</li>
          <li><strong>Feed Budget Planner</strong> — factor expected FCR into your seasonal or annual feed forecast, since efficiency shifts with season and animal class.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">What's considered a "good" FCR?</h3>
            <p className="leading-relaxed">It varies significantly by species, breed, and production stage — a good FCR for a broiler chicken looks completely different from a good FCR for a finishing steer. The most useful comparison is your own herd's FCR over time and against your own historical baseline, not a generic industry number.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Why is my FCR getting worse over the feeding period?</h3>
            <p className="leading-relaxed">FCR naturally rises as animals approach finished weight — mature animals convert feed to gain less efficiently than younger, rapidly growing ones. A rising FCR late in the feeding period is often expected, not necessarily a sign of a problem.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does water intake affect FCR?</h3>
            <p className="leading-relaxed">Not directly in the calculation, but inadequate water access can suppress feed intake and gain simultaneously, which can distort your readings. Make sure water access isn't a limiting factor before troubleshooting the ration itself.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Can I use this for species other than cattle?</h3>
            <p className="leading-relaxed">The FCR formula (feed intake ÷ weight gain) applies across species — hogs, poultry, and small ruminants included. Just make sure your intake and gain measurements are recorded over a consistent, comparable time window for whichever species you're tracking.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on the numbers you enter. Actual feed conversion is affected by genetics, health, environment, and ration quality beyond what this tool captures. This is not a substitute for guidance from a livestock nutritionist or veterinarian.
        </div>
      </article>
    );
  }
`;

const insertIndex = content.lastIndexOf('  return null;');
const updatedContent = content.slice(0, insertIndex) + newContent + '\n' + content.slice(insertIndex);
fs.writeFileSync('src/components/ToolContent.tsx', updatedContent);

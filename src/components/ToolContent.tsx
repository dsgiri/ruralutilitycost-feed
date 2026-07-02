import { ReactNode } from 'react';

interface ToolContentProps {
  toolId: string;
}

export function ToolContent({ toolId }: ToolContentProps) {
  if (toolId === 'feed-cost-calc') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter what you're actually paying — bag price, bag weight, or bulk price per ton — along with your herd size and daily intake, and the tool converts everything to a standard cost per ton and a daily cost per head. That gives you a number you can compare across suppliers, feed types, and time periods, no matter how the original quote was packaged.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why cost per ton is the number that matters</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Feed suppliers quote prices in whatever unit makes their product look most competitive: per bag, per bushel, per ton, sometimes per head per day already baked in with their own assumptions about intake. None of those numbers are wrong, but none of them are directly comparable to each other either.
        </p>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Converting everything to cost per ton strips out the packaging and lets you compare apples to apples. A $22 bag that weighs 50 lb costs $880/ton. A $19 bag that weighs 40 lb costs $950/ton — cheaper up front, more expensive per ton. That gap adds up fast once you're buying by the truckload.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say you're running 120 head and considering two feed options:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li><strong>Option A:</strong> $18.50 per 50 lb bag. Cost per ton = ($18.50 ÷ 50) × 2,000 = <strong>$740/ton</strong></li>
          <li><strong>Option B:</strong> Bulk delivery at $705/ton</li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">
          At first glance Option A looks cheaper because the per-bag price is a smaller number to look at. But once converted, Option B is actually $35/ton less — and if your herd is eating roughly 25 lb of this ration per head per day, that's:
        </p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>Daily herd intake: 120 head × 25 lb = 3,000 lb = 1.5 tons/day</li>
          <li>Daily savings with Option B: 1.5 tons × $35 = <strong>$52.50/day</strong></li>
          <li>Annual savings: $52.50 × 365 = <strong>$19,163/year</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          That's the kind of number that's easy to miss when you're just eyeballing bag prices at the counter, and exactly why converting to a standard unit before comparing matters.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Comparing bag price without weight.</strong> A "cheaper" bag that weighs less can cost more per ton. Always divide down to price per pound, then multiply back up to price per ton before comparing.</li>
          <li><strong>Ignoring delivery and handling fees.</strong> Bulk pricing often looks dramatically cheaper than bagged feed until you add delivery, bin rental, or minimum-order surcharges. Get the landed cost, not just the quoted price.</li>
          <li><strong>Using average intake instead of actual intake.</strong> Textbook intake rates (like 2% of body weight) are a starting point, not a fact about your herd. Weigh out what you're actually feeding for a few days and use that number — it's usually different from the estimate, sometimes significantly.</li>
          <li><strong>Forgetting waste.</strong> If your bunks or feeders are losing 10-15% to spillage or spoilage, your real cost per head is higher than the calculator shows until you also run the numbers through a feed waste calculator.</li>
          <li><strong>Not re-checking after a ration change.</strong> Cost per ton shifts every time you adjust the mix — more protein, less filler, different mineral pack. Recalculate whenever the recipe changes, not just when the price changes.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you have a reliable cost per ton, the next useful step is usually one of these:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Cost per head per day</strong> — helps you set a realistic budget line and spot problems early if actual spend drifts from plan.</li>
          <li><strong>Annual feed budget</strong> — multiply your daily cost by 365 (or your feeding season length) to forecast the year.</li>
          <li><strong>Ration comparison</strong> — run two or more rations through at the same intake rate to see which actually pencils out cheaper, not just which quote looked smaller.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">How often should I recalculate feed cost?</h3>
            <p className="leading-relaxed">Any time your supplier changes price, you switch rations, or your herd size changes meaningfully. Commodity-based feeds especially can move month to month, so a quarterly check-in at minimum is a good habit even if nothing else has changed.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Is bulk feed always cheaper than bagged?</h3>
            <p className="leading-relaxed">Usually, but not always. Bulk pricing benefits from lower packaging cost, but if you don't have storage for a full load, or if a bulk delivery minimum forces you to buy more than you'll use before it degrades, bagged can come out ahead. Compare landed cost per ton in both cases.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does this account for nutritional value, not just price?</h3>
            <p className="leading-relaxed">Not directly — this tool standardizes cost only. Two rations at the same price per ton can have very different protein or energy content, which changes what you're actually paying for a unit of nutrition. Pair this with a ration comparison tool if you're deciding between blends with different nutritional profiles.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">What intake rate should I use if I haven't measured it?</h3>
            <p className="leading-relaxed">A common starting estimate is 2-2.5% of body weight in dry matter per day for cattle, but this varies by class of animal, forage quality, and season. Treat it as a placeholder until you can weigh actual consumption.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on the numbers you enter. Actual costs will vary with market pricing, delivery terms, and herd-specific intake. This is not a substitute for a consultation with a livestock nutritionist for ration formulation.
        </div>
      </article>
    );
  }

  if (toolId === 'ration-compare') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter the price, protein content, and energy value for two (or more) ration options at the same intake rate, and the tool breaks down not just which is cheaper per ton, but which delivers more nutritional value per dollar spent. That's the number that should actually drive your purchasing decision.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why cost per ton isn't the whole story</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Imagine two rations:
        </p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li><strong>Ration A:</strong> $250/ton, 14% crude protein</li>
          <li><strong>Ration B:</strong> $280/ton, 18% crude protein</li>
        </ul>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Ration A looks cheaper by $30/ton. But if your herd needs 16% protein and Ration A falls short, you'll either need to supplement (adding cost you didn't budget for) or accept slower gains and lower feed efficiency. Ration B, despite the higher sticker price, may be the actual lower-cost option once you account for what it takes to hit the same performance target with Ration A.
        </p>
        <p className="text-ink-soft mb-6 leading-relaxed">
          This is the trap of comparing quotes side by side without normalizing for what's actually in the bag.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say you're deciding between two rations for a group of growing cattle, both fed at 20 lb/head/day:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li><strong>Ration A:</strong> $240/ton, 13% CP. Daily cost per head = (20 lb ÷ 2,000) × $240 = <strong>$2.40/head/day</strong></li>
          <li><strong>Ration B:</strong> $268/ton, 16% CP. Daily cost per head = (20 lb ÷ 2,000) × $268 = <strong>$2.68/head/day</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          Ration B costs 28 cents more per head per day — about $10.20/head over a 36-day period. But if that extra 3% protein closes a gap that was limiting gain on Ration A, the improved feed efficiency and faster time to weight can easily outweigh the extra cost. The only way to know is to run both scenarios and compare the full picture: cost, protein delivered, and expected performance — not just the invoice total.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Comparing rations at different intake rates.</strong> If one ration is fed at 18 lb/day and another at 22 lb/day, a straight price-per-ton comparison is misleading. Normalize both to daily cost per head before comparing.</li>
          <li><strong>Ignoring supplementation costs.</strong> A "cheap" base ration that requires added protein or mineral supplements to hit target nutrition isn't actually cheap — it's deferred cost. Include supplement pricing in the total comparison.</li>
          <li><strong>Chasing protein percentage alone.</strong> Crude protein is one input, not the whole nutritional picture. Energy density, fiber digestibility, and mineral balance all affect performance and should factor into a real comparison, ideally with input from a nutritionist for higher-stakes decisions.</li>
          <li><strong>Not accounting for palatability and intake.</strong> A ration that's nutritionally superior on paper doesn't help if animals eat less of it. Watch actual intake for the first week or two after a ration change, not just the formulation sheet.</li>
          <li><strong>Treating the comparison as one-and-done.</strong> Commodity prices shift. A ration that wins the comparison in March may not win in July. Re-run the comparison whenever pricing changes meaningfully.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you know which ration wins on cost-per-nutrition-delivered, the next useful steps are usually:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Feed Cost Calculator</strong> — convert your chosen ration's price into a clean cost-per-ton figure for supplier negotiations.</li>
          <li><strong>Dry Matter Intake Estimator</strong> — confirm the intake rate you're using in this comparison actually matches what your class of animal needs.</li>
          <li><strong>Feed Budget Planner</strong> — roll your chosen ration's daily cost forward into an annual number for planning purposes.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">Should I always pick the ration with more protein?</h3>
            <p className="leading-relaxed">Not automatically. More protein than your animals need is wasted cost, not wasted nutrition — it doesn't add extra value if the animal can't use it. Match the ration to your class of livestock's actual requirement, not the highest number available.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How do I compare rations with different ingredients, not just different protein levels?</h3>
            <p className="leading-relaxed">This tool handles a straightforward cost-and-protein comparison. For a full nutritional breakdown across energy, fiber, and minerals, a ration formulated by a livestock nutritionist using your specific forage test results will give a more complete picture.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">What if my two options have different feeding rates recommended by the supplier?</h3>
            <p className="leading-relaxed">Always normalize to the same daily intake before comparing cost. Comparing a ration fed at 15 lb/day against one price-per-ton alone will give you a misleading answer.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does a higher-cost ration always mean better performance?</h3>
            <p className="leading-relaxed">No. Price and quality are correlated but not identical — some premium-priced rations are priced for brand and marketing rather than nutritional superiority. Compare the actual nutrient panel, not just the price tag.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on the numbers you enter. Actual feed value depends on additional nutritional factors, animal class, and forage quality not captured here. This is not a substitute for ration formulation guidance from a qualified livestock nutritionist.
        </div>
      </article>
    );
  }


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

  return null;
}

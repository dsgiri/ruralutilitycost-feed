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


  if (toolId === 'feed-storage') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter your storage structure's dimensions — diameter and height for a cylindrical bin, or length, width, and depth for a bunker — and the tool estimates total capacity in tons, using standard bulk density assumptions for common feed types.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why bulk density is the number people forget</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Volume alone doesn't tell you capacity in tons, because different feeds pack at different densities. A bin that holds 40 tons of whole corn might hold significantly less of a bulkier pelleted ration, because the material simply weighs less per cubic foot. Skipping this step is the most common reason producers overestimate what a structure can actually hold.
        </p>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Typical bulk densities run roughly 45-48 lb/cubic ft for whole corn, 40-42 lb/cubic ft for pelleted feed, and can vary further with moisture content and particle size. Always check the density for your specific feed type rather than assuming one number applies across your whole operation.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say you're evaluating a cylindrical grain bin:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li>Diameter: 14 ft (radius = 7 ft)</li>
          <li>Height: 30 ft</li>
          <li>Volume = π × r² × height = 3.1416 × 7² × 30 = <strong>4,618 cubic ft</strong></li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">
          Using a bulk density estimate of roughly 45 lb/cubic ft for whole corn:
        </p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>Weight = 4,618 cubic ft × 45 lb = 207,810 lb = <strong>~104 tons</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          That's your working estimate — but real-world capacity typically runs 5-10% below theoretical volume once you account for the cone-shaped fill pattern at the top and unloading angle at the bottom, so a practical planning number would be closer to 93-99 tons.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Using volume as if it equals weight.</strong> Cubic feet and tons are different units connected by bulk density, which changes by feed type. Always convert through density rather than assuming a flat "tons per foot of height" number across different feeds.</li>
          <li><strong>Ignoring the cone at the top and bottom.</strong> A cylindrical bin doesn't fill or empty as a perfect cylinder — the fill cone at the top and the draw-down cone at the bottom both reduce usable capacity below the theoretical volume. Budget roughly 5-10% below the raw calculation for a realistic working number.</li>
          <li><strong>Forgetting moisture content shifts weight.</strong> Wetter feed weighs more per cubic foot but also stores less safely and for less time. Higher-moisture grain increases weight-based capacity numbers while increasing spoilage risk — don't treat it purely as a capacity win.</li>
          <li><strong>Not accounting for feed bridging or compaction.</strong> Fine or pelleted feeds can compact or bridge inside a bin, creating pockets that don't flow out evenly. This doesn't change your capacity number, but it does affect how reliably you can access the feed you've stored.</li>
          <li><strong>Sizing storage for average delivery instead of peak need.</strong> If your usage spikes seasonally (calving season, show season, winter feeding), size storage to your peak draw-down rate and delivery lead time, not your average.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you know your storage capacity in tons, the practical next steps are usually:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Feed Budget Planner</strong> — match your annual feed forecast against how many deliveries your storage capacity requires, to plan cash flow and delivery scheduling together.</li>
          <li><strong>Feed Cost Calculator</strong> — bulk deliveries that fill your full capacity often come with better per-ton pricing than partial loads; know your capacity before you negotiate.</li>
          <li><strong>Cost per Head / per Day Calculator</strong> — cross-check that your storage capacity comfortably covers your herd's consumption between realistic delivery windows.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">Does this work for silage bunkers and pits, not just bins?</h3>
            <p className="leading-relaxed">The same length × width × depth × density approach applies, though silage bulk density varies more with packing density and moisture than dry feed. Well-packed silage commonly runs 40-45 lb/cubic ft, but get a local extension estimate for your specific forage and packing method for a more precise number.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How much should I subtract for unusable space?</h3>
            <p className="leading-relaxed">A common rule of thumb is 5-10% below theoretical volume for cone effects in upright bins, but this varies by bin design, discharge type, and feed flow characteristics. If you have historical fill records, use those to calibrate rather than relying on a generic percentage.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">What bulk density should I use if I'm not sure what my feed weighs?</h3>
            <p className="leading-relaxed">Ask your supplier for the specific bulk density of the product you're buying — it's a standard spec they should have on hand. In the absence of that, whole corn (45-48 lb/cu ft) and pelleted rations (40-42 lb/cu ft) are reasonable starting estimates.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does temperature or humidity affect stored capacity over time?</h3>
            <p className="leading-relaxed">Not the physical capacity of the structure, but both affect feed quality and safe storage duration. High-moisture conditions increase spoilage and mold risk regardless of how much physical space remains.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on standard bulk density assumptions and the dimensions you enter. Actual capacity varies with feed type, moisture content, and storage structure design. Consult your storage equipment manufacturer's specifications for structural load limits.
        </div>
      </article>
    );
  }


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

  if (toolId === 'dry-matter-intake') {
    return (
      <article className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line prose prose-slate max-w-none">
        <h2 className="font-display text-2xl mb-4 text-ink">What this calculator does</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          You enter body weight and an intake percentage (or use a typical starting estimate), and the tool calculates expected daily dry matter intake in pounds. That figure feeds directly into your cost, budget, and storage calculations elsewhere on this site.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Why intake percentage isn't one-size-fits-all</h2>
        <p className="text-ink-soft mb-6 leading-relaxed">
          The common starting estimate — roughly 2-2.5% of body weight in dry matter per day for cattle — is a reasonable default, but it's a range for a reason. Actual intake shifts with:
        </p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li><strong>Animal class and production stage</strong> — lactating cows, growing calves, and mature dry cows all have meaningfully different intake needs relative to body weight.</li>
          <li><strong>Forage and ration quality</strong> — higher-digestibility feed is often consumed at a higher percentage of body weight than coarse, low-quality forage.</li>
          <li><strong>Environmental conditions</strong> — heat stress typically suppresses intake, while cold stress can increase it as animals eat more to maintain body temperature.</li>
          <li><strong>Water availability</strong> — restricted water access reduces dry matter intake even when feed is plentiful.</li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          Using a single flat percentage across your whole operation, regardless of these factors, is the most common reason DMI estimates and actual consumption drift apart over time.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Worked example</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Say you're estimating intake for a group of growing cattle averaging 1,200 lb body weight, using a standard 2.2% intake rate:</p>
        <ul className="list-disc pl-5 mb-4 text-ink-soft space-y-2">
          <li>DMI = 1,200 lb × 2.2% = <strong>26.4 lb/head/day</strong></li>
        </ul>
        <p className="text-ink-soft mb-4 leading-relaxed">Now compare that to a lactating cow at the same body weight, where intake needs typically run higher, closer to 2.8-3%:</p>
        <ul className="list-disc pl-5 mb-6 text-ink-soft space-y-2">
          <li>DMI = 1,200 lb × 2.8% = <strong>33.6 lb/head/day</strong></li>
        </ul>
        <p className="text-ink-soft mb-8 leading-relaxed">
          That's over 7 lb/head/day of difference — using the growing-cattle estimate for the lactating cow group would understate feed needs by roughly 27%, which compounds into a meaningful budgeting and storage error if it's applied across an entire group.
        </p>

        <h2 className="font-display text-2xl mb-4 text-ink">Common mistakes producers make</h2>
        <ul className="space-y-4 mb-8 text-ink-soft">
          <li><strong>Applying one intake percentage across all animal classes.</strong> As the worked example shows, this can create significant errors. Estimate DMI separately for each class or production stage in your operation.</li>
          <li><strong>Never validating the estimate against actual consumption.</strong> A DMI percentage is a starting point. Weighing actual feed offered and refused over several days gives you a real number specific to your herd, ration, and conditions — use that once you have it, instead of the generic estimate.</li>
          <li><strong>Ignoring seasonal intake shifts.</strong> Intake commonly drops during heat stress and can rise in cold weather as animals work to maintain body temperature. A DMI estimate that doesn't account for the season it's being applied to will drift from reality.</li>
          <li><strong>Confusing as-fed weight with dry matter weight.</strong> Feed with higher moisture content (like silage) weighs more as-fed than its dry matter content would suggest. Make sure you're comparing DMI estimates against dry matter weight of the ration, not the wet weight straight off the scale.</li>
          <li><strong>Treating DMI as fixed once calculated.</strong> Body weight changes as animals grow, which changes DMI even at a constant intake percentage. Recalculate periodically through a growing or feeding period rather than using one number throughout.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">How to use the numbers you get</h2>
        <p className="text-ink-soft mb-4 leading-relaxed">Once you have a reliable DMI estimate, it feeds directly into:</p>
        <ul className="list-disc pl-5 mb-8 text-ink-soft space-y-2">
          <li><strong>Feed Cost Calculator</strong> — DMI is the multiplier that turns cost per ton into cost per head per day.</li>
          <li><strong>Feed Storage Capacity Calculator</strong> — total herd DMI determines how quickly you'll draw down storage and how often you need deliveries.</li>
          <li><strong>Feed Budget Planner</strong> — an accurate DMI number is the foundation your entire annual forecast is built on.</li>
        </ul>

        <h2 className="font-display text-2xl mb-4 text-ink">Frequently asked questions</h2>
        
        <div className="space-y-6 mb-8 text-ink-soft">
          <div>
            <h3 className="font-bold text-ink mb-1">What intake percentage should I start with if I don't have a measured number?</h3>
            <p className="leading-relaxed">2-2.5% of body weight in dry matter per day is a commonly used starting estimate for cattle, though it varies by class and should be adjusted as you gather real consumption data specific to your herd.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How is dry matter intake different from as-fed intake?</h3>
            <p className="leading-relaxed">As-fed intake includes the moisture content of the feed; dry matter intake strips that out to measure the actual nutritional substance being consumed. A wet, high-moisture feed will have a much higher as-fed weight than dry matter weight — always confirm which measurement a supplier or reference is using.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">Does DMI change significantly as an animal grows?</h3>
            <p className="leading-relaxed">Yes — since DMI is calculated as a percentage of body weight, it increases as the animal gains weight, even at a constant percentage rate. Recalculating periodically through a growth period keeps your feed and cost estimates accurate.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-ink mb-1">How much does heat stress actually reduce intake?</h3>
            <p className="leading-relaxed">The magnitude varies by severity and duration of the heat event, breed, and management (shade, water access, ventilation), but meaningful intake suppression during sustained heat stress is well documented. If you're in a region with hot summers, plan for a seasonal intake dip rather than assuming a flat rate year-round.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line text-sm text-ink-soft italic leading-relaxed">
          Results from this calculator are estimates based on standard intake percentage ranges. Actual dry matter intake varies by breed, health, environment, and ration quality. Measured intake specific to your herd will always be more accurate than a formula-based estimate.
        </div>
      </article>
    );
  }
  return null;
}

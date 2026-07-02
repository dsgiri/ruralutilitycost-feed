const fs = require('fs');
const content = fs.readFileSync('src/components/ToolContent.tsx', 'utf8');

const newContent = `
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
`;

const insertIndex = content.lastIndexOf('  return null;');
const updatedContent = content.slice(0, insertIndex) + newContent + '\n' + content.slice(insertIndex);
fs.writeFileSync('src/components/ToolContent.tsx', updatedContent);

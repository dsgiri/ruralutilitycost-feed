const fs = require('fs');
const content = fs.readFileSync('src/components/ToolContent.tsx', 'utf8');

const newContent = `
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
`;

const updatedContent = content.replace('  return null;\n}', newContent + '  return null;\n}');
fs.writeFileSync('src/components/ToolContent.tsx', updatedContent);
console.log('Appended dry-matter-intake tool content.');

# Calculators Blueprint

This document defines the mathematical models, inputs, calculation steps, formulas, and expected results for all the calculators within the platform.

## 1. Feed Cost Calculator
**Description:** Calculate the total cost of feed batches and individual rations.

### Inputs
- **Ingredient Cost per Unit ($/lb or $/ton):** The price of each feed ingredient.
- **Quantity of Ingredient (lbs or tons):** Amount of each ingredient in the batch.
- **Batch Size (lbs or tons):** Total size of the feed batch being mixed.

### Calculation Steps
1. **Calculate Cost per Ingredient:** Multiply the cost per unit by the quantity of the ingredient.
2. **Calculate Total Batch Cost:** Sum the cost of all ingredients in the batch.
3. **Calculate Cost per Ton:** Divide the total batch cost by the batch size (in tons) or extrapolate.

### Formulas
- `Ingredient_Cost = Ingredient_Cost_per_Unit * Quantity`
- `Total_Batch_Cost = Sum(Ingredient_Cost_1 ... Ingredient_Cost_N)`
- `Cost_per_Ton = Total_Batch_Cost / (Batch_Size_in_lbs / 2000)`

### Results
- **Total Batch Cost ($):** Overall cost to mix the specific batch.
- **Cost per Ton ($/ton):** Standardized cost metric.

---

## 2. Ration Comparison Tool
**Description:** Compare nutritional value and cost across different ration blends.

### Inputs
- **Ration A & Ration B Total Cost ($/ton):** Cost per ton for each ration.
- **Protein Content (%):** Crude protein percentage for each ration.
- **Energy Content (TDN or Mcal/lb):** Total Digestible Nutrients or energy density.
- **Target Daily Feed Intake (lbs/head):** Expected daily intake for the animal.

### Calculation Steps
1. **Calculate Daily Cost per Ration:** Multiply the daily feed intake by the cost per lb of each ration.
2. **Calculate Cost per Unit of Protein:** Divide the cost per ton by the protein percentage (x 2000 lbs).
3. **Compare Differentials:** Subtract the metrics of Ration A from Ration B.

### Formulas
- `Cost_per_lb = Cost_per_ton / 2000`
- `Daily_Cost = Cost_per_lb * Target_Daily_Feed_Intake`
- `Cost_per_lb_of_Protein = Cost_per_lb / (Protein_Percentage / 100)`

### Results
- **Daily Feeding Cost Comparison ($):** Side-by-side cost per animal per day.
- **Value Metric ($/lb of Protein):** Cost efficiency of the ration's protein delivery.

---

## 3. Feed Conversion Estimator
**Description:** Estimate feed conversion ratios (FCR) for your livestock.

### Inputs
- **Total Feed Consumed (lbs or kg):** Total amount of feed provided over the period.
- **Initial Weight (lbs or kg):** Average starting weight of the animals.
- **Final Weight (lbs or kg):** Average ending weight of the animals.

### Calculation Steps
1. **Calculate Weight Gain:** Subtract initial weight from final weight.
2. **Calculate FCR:** Divide total feed consumed by the weight gain.

### Formulas
- `Weight_Gain = Final_Weight - Initial_Weight`
- `FCR = Total_Feed_Consumed / Weight_Gain`

### Results
- **Feed Conversion Ratio (FCR):** Amount of feed required to produce one unit of body weight gain.
- **Total Weight Gain:** Overall weight added.

---

## 4. Feed Storage Capacity Calculator
**Description:** Determine how much feed your bins, bunkers, or silos can hold.

### Inputs
- **Storage Dimensions:** Radius and height for silos/bins, or length, width, and height for bunkers (ft).
- **Feed Density (lbs/cubic ft):** Density of the feed material (e.g., corn vs. silage).

### Calculation Steps
1. **Calculate Volume (Silo/Bin):** Volume of a cylinder (π × r² × h).
2. **Calculate Volume (Bunker):** Volume of a rectangular prism (l × w × h).
3. **Calculate Capacity:** Multiply the volume by the feed density.
4. **Convert to Tons:** Divide the total pounds by 2000.

### Formulas
- `Volume_Cylinder (cu ft) = 3.14159 * (Radius^2) * Height`
- `Volume_Bunker (cu ft) = Length * Width * Height`
- `Capacity_lbs = Volume * Feed_Density`
- `Capacity_tons = Capacity_lbs / 2000`

### Results
- **Total Storage Volume (cubic ft):** Space available.
- **Total Feed Capacity (tons):** Maximum weight of feed that can be stored.

---

## 5. Feed Waste Reduction Planner
**Description:** Identify where feed waste occurs and calculate lost value.

### Inputs
- **Total Feed Purchased/Mixed (tons):** Total feed volume entering the system.
- **Estimated Waste Percentage (%):** Percentage lost to spoilage, wind, or feeding inefficiencies.
- **Cost of Feed ($/ton):** Value of the feed.

### Calculation Steps
1. **Calculate Tons Wasted:** Multiply total feed by the waste percentage.
2. **Calculate Financial Loss:** Multiply the tons wasted by the cost per ton.

### Formulas
- `Tons_Wasted = Total_Feed * (Estimated_Waste_Percentage / 100)`
- `Financial_Loss = Tons_Wasted * Cost_of_Feed`

### Results
- **Tons Wasted:** Total volume of feed lost.
- **Financial Loss ($):** Monetary value of the wasted feed.

---

## 6. Cost per Head / per Day Calculator
**Description:** Break down aggregate feed costs to a per-animal daily basis.

### Inputs
- **Total Feed Cost for the Period ($):** Overall expense for a specific timeframe.
- **Number of Head:** Total number of animals fed.
- **Number of Days:** Duration of the feeding period.

### Calculation Steps
1. **Calculate Total Animal Days:** Multiply number of head by number of days.
2. **Calculate Cost per Head per Day:** Divide total feed cost by total animal days.

### Formulas
- `Total_Animal_Days = Number_of_Head * Number_of_Days`
- `Cost_per_Head_per_Day = Total_Feed_Cost / Total_Animal_Days`

### Results
- **Cost per Head per Day ($/head/day):** Standardized daily feeding cost for one animal.

---

## 7. Feed Budget Planner
**Description:** Forecast long-term feed requirements and budget for the year.

### Inputs
- **Number of Head:** Animals to be fed.
- **Average Daily Intake (lbs/head/day):** Expected daily consumption.
- **Feeding Period (days):** Total days feed will be required (e.g., 365 for a year).
- **Projected Feed Cost ($/ton):** Expected average cost of feed over the period.

### Calculation Steps
1. **Calculate Total Feed Required (lbs):** Number of head × daily intake × feeding period.
2. **Convert to Tons:** Divide total feed in lbs by 2000.
3. **Calculate Total Budget:** Multiply total feed in tons by projected feed cost.

### Formulas
- `Total_Feed_lbs = Number_of_Head * Average_Daily_Intake * Feeding_Period`
- `Total_Feed_tons = Total_Feed_lbs / 2000`
- `Total_Budget = Total_Feed_tons * Projected_Feed_Cost`

### Results
- **Total Feed Required (tons):** Volume needed for the entire period.
- **Total Estimated Budget ($):** Financial projection for feed expenses.

---

## 8. Dry Matter Intake Estimator
**Description:** Estimate daily dry matter intake based on animal weight and type.

### Inputs
- **Animal Body Weight (lbs):** Current weight of the animal.
- **Intake as % of Body Weight (%):** Expected intake percentage (e.g., 2-3% for beef cattle).
- **Ration Dry Matter Percentage (%):** The DM% of the feed being offered (e.g., 85% for hay, 35% for silage).

### Calculation Steps
1. **Calculate Dry Matter Intake (DMI):** Multiply body weight by the intake percentage.
2. **Calculate As-Fed Intake:** Divide the DMI by the ration's dry matter percentage.

### Formulas
- `DMI_lbs = Animal_Body_Weight * (Intake_Percentage / 100)`
- `As_Fed_Intake_lbs = DMI_lbs / (Ration_Dry_Matter_Percentage / 100)`

### Results
- **Required Dry Matter Intake (lbs/day):** Nutritional intake required on a dry basis.
- **Required As-Fed Intake (lbs/day):** Actual physical weight of feed to be delivered per animal per day.
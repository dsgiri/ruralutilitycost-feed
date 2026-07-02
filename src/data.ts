import { Tool } from './types';

function fmtMoney(n: number){ return '$' + n.toLocaleString('en-US', {maximumFractionDigits:0}); }
function fmtMoney2(n: number){ return '$' + n.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}); }

export const TOOLS: Tool[] = [
  {
    id: 'feed-cost-calc',
    title: 'Feed Cost Calculator',
    description: 'Calculate the total cost of feed batches and individual rations.',
    category: 'Feed cost',
    primaryOutcome: 'Cost per batch & per ton',
    iconName: 'DollarSign',
    sliders:[
      {id:'bagPrice', label:'Bag price', min:5, max:40, val:18, step:1, fmt:v=>'$'+v},
      {id:'bagWeight', label:'Bag weight', min:40, max:100, val:50, step:5, fmt:v=>v+' lb'}
    ],
    calc:(v)=> fmtMoney(v.bagPrice/v.bagWeight*2000),
    outCap:'Cost per ton'
  },
  {
    id: 'ration-compare',
    title: 'Ration Comparison Tool',
    description: 'Compare nutritional value and cost across different ration blends.',
    category: 'Ration planning',
    primaryOutcome: 'Best value ration',
    iconName: 'Scale',
    sliders:[
      {id:'rationA', label:'Ration A', min:150, max:400, val:220, step:5, fmt:v=>'$'+v+'/ton'},
      {id:'rationB', label:'Ration B', min:150, max:400, val:270, step:5, fmt:v=>'$'+v+'/ton'}
    ],
    calc:(v)=> (v.rationA < v.rationB ? 'A saves ' : 'B saves ') + fmtMoney(Math.abs(v.rationA-v.rationB)),
    outCap:'Cheaper option, per ton'
  },
  {
    id: 'feed-conversion',
    title: 'Feed Conversion Estimator',
    description: 'Estimate feed conversion ratios (FCR) for your livestock.',
    category: 'Feed conversion',
    primaryOutcome: 'FCR & efficiency metrics',
    iconName: 'LineChart',
    sliders:[
      {id:'intake', label:'Feed intake', min:10, max:30, val:18, step:0.5, fmt:v=>v+' lb/day'},
      {id:'gain', label:'Weight gain', min:0.5, max:4, val:2.2, step:0.1, fmt:v=>v+' lb/day'}
    ],
    calc:(v)=> (v.intake/v.gain).toFixed(2),
    outCap:'Feed conversion ratio'
  },
  {
    id: 'feed-storage',
    title: 'Feed Storage Capacity Calculator',
    description: 'Determine how much feed your bins, bunkers, or silos can hold.',
    category: 'Feed storage',
    primaryOutcome: 'Tons of capacity',
    iconName: 'Database',
    sliders:[
      {id:'diam', label:'Bin diameter', min:8, max:30, val:14, step:1, fmt:v=>v+' ft'},
      {id:'height', label:'Bin height', min:10, max:60, val:30, step:1, fmt:v=>v+' ft'}
    ],
    calc:(v)=> (Math.PI * Math.pow(v.diam/2,2) * v.height * 0.024).toFixed(1) + ' tons',
    outCap:'Approx. storage capacity'
  },
  {
    id: 'feed-waste',
    title: 'Feed Waste Reduction Planner',
    description: 'Identify where feed waste occurs and calculate lost value.',
    category: 'Feed waste',
    primaryOutcome: 'Cost of waste & savings',
    iconName: 'Trash2',
    sliders:[
      {id:'spend', label:'Monthly spend', min:1000, max:20000, val:6000, step:500, fmt:v=>fmtMoney(v)},
      {id:'wastePct', label:'Est. waste', min:2, max:25, val:12, step:1, fmt:v=>v+'%'}
    ],
    calc:(v)=> fmtMoney(v.spend * v.wastePct/100),
    outCap:'Lost value per month'
  },
  {
    id: 'cost-per-head',
    title: 'Cost per Head / per Day',
    description: 'Break down aggregate feed costs to a per-animal daily basis.',
    category: 'Feed cost',
    primaryOutcome: 'Daily cost per animal',
    iconName: 'Users',
    sliders:[
      {id:'totalCost', label:'Total daily cost', min:50, max:2000, val:400, step:25, fmt:v=>fmtMoney(v)},
      {id:'headCount', label:'Head count', min:10, max:500, val:120, step:5, fmt:v=>v+' head'}
    ],
    calc:(v)=> fmtMoney2(v.totalCost/v.headCount),
    outCap:'Cost per head, per day'
  },
  {
    id: 'feed-budget',
    title: 'Feed Budget Planner',
    description: 'Forecast long-term feed requirements and budget for the year.',
    category: 'Feed cost',
    primaryOutcome: 'Annual feed budget',
    iconName: 'Calendar',
    sliders:[
      {id:'dailyPerHead', label:'Daily / head', min:1, max:8, val:3.2, step:0.1, fmt:v=>'$'+v.toFixed(2)},
      {id:'headCount2', label:'Head count', min:10, max:500, val:120, step:5, fmt:v=>v+' head'}
    ],
    calc:(v)=> fmtMoney(v.dailyPerHead * v.headCount2 * 365),
    outCap:'Projected annual budget'
  },
  {
    id: 'dry-matter-intake',
    title: 'Dry Matter Intake Estimator',
    description: 'Estimate daily dry matter intake based on animal weight and type.',
    category: 'Ration planning',
    primaryOutcome: 'Required intake in lbs/kg',
    iconName: 'Activity',
    sliders:[
      {id:'bodyWeight', label:'Body weight', min:400, max:1500, val:1200, step:25, fmt:v=>v+' lb'},
      {id:'intakePct', label:'Intake rate', min:1.5, max:3.5, val:2.2, step:0.1, fmt:v=>v+'%'}
    ],
    calc:(v)=> (v.bodyWeight * v.intakePct/100).toFixed(1) + ' lb',
    outCap:'Required daily DMI'
  }
];

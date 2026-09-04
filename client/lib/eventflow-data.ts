export const navItems = [
  { label: "Overview", to: "/" },
  { label: "Live Map", to: "/live-map" },
  { label: "Demand Forecast", to: "/demand-forecast" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "Transport", to: "/transport" },
  { label: "Venues", to: "/venues" },
  { label: "Recommendations", to: "/recommendations" },
  { label: "Alerts", to: "/alerts" },
  { label: "Attendee Planner", to: "/planner" },
];

export const activeEvent = {
  name: "Mumbai International Sports Festival 2026",
  dates: "Sep 4 – 12, 2026",
  location: "Mumbai, India",
};

export const kpis = [
  {
    key: "demand",
    label: "Visitor Demand",
    value: 184620,
    display: "184,620",
    sub: "Current expected visitors",
    trend: "+18.4% vs baseline",
    trendUp: true,
    color: "blue",
    spark: [40, 48, 44, 60, 58, 72, 80, 78, 92],
  },
  {
    key: "hotel",
    label: "Hotel Occupancy",
    value: 87,
    display: "87%",
    sub: "Destination-wide occupancy",
    trend: "3 zones approaching saturation",
    trendUp: null,
    color: "amber",
    spark: [60, 64, 68, 70, 74, 78, 82, 85, 87],
  },
  {
    key: "transport",
    label: "Transport Load",
    value: 74,
    display: "74%",
    sub: "Current network utilization",
    trend: "+11% in last hour",
    trendUp: true,
    color: "cyan",
    spark: [50, 52, 58, 55, 60, 65, 68, 70, 74],
  },
  {
    key: "venue",
    label: "Venue Occupancy",
    value: 68,
    display: "68%",
    sub: "Across monitored venues",
    trend: "Stable",
    trendUp: null,
    color: "purple",
    spark: [45, 50, 55, 58, 60, 62, 64, 66, 68],
  },
  {
    key: "alerts",
    label: "Critical Alerts",
    value: 7,
    display: "7",
    sub: "2 critical · 5 warnings",
    trend: "+2 in last 30 min",
    trendUp: false,
    color: "red",
    spark: [2, 3, 3, 4, 5, 5, 6, 6, 7],
  },
  {
    key: "mobility",
    label: "Mobility Risk",
    value: 50,
    display: "Medium",
    sub: "3 congestion hotspots predicted",
    trend: "Rising",
    trendUp: false,
    color: "amber",
    spark: [20, 25, 30, 35, 38, 42, 45, 48, 50],
  },
];

export const riskTimeline = [
  { time: "12 PM", level: 1, label: "" },
  { time: "2 PM", level: 1, label: "" },
  { time: "4 PM", level: 2, label: "Hotel saturation" },
  { time: "6 PM", level: 3, label: "Metro congestion" },
  { time: "8 PM", level: 4, label: "Venue peak" },
  { time: "10 PM", level: 3, label: "Departure surge" },
];

export const mapZones = [
  { id: "central", name: "Central Mumbai", x: 46, y: 40, pressure: 76, status: "orange" },
  { id: "bandra", name: "Bandra", x: 38, y: 52, pressure: 79, status: "orange" },
  { id: "andheri", name: "Andheri", x: 34, y: 40, pressure: 88, status: "red" },
  { id: "powai", name: "Powai", x: 52, y: 34, pressure: 42, status: "green" },
  { id: "navimumbai", name: "Navi Mumbai", x: 66, y: 46, pressure: 38, status: "green" },
  { id: "bkc", name: "BKC", x: 45, y: 55, pressure: 94, status: "red" },
  { id: "south", name: "South Mumbai", x: 40, y: 72, pressure: 82, status: "red" },
  { id: "exhibition", name: "Exhibition District", x: 58, y: 62, pressure: 65, status: "yellow" },
];

export const capacityHotspots = [
  { name: "BKC", pressure: 94, status: "Critical" },
  { name: "Andheri", pressure: 88, status: "Critical" },
  { name: "South Mumbai", pressure: 82, status: "Warning" },
  { name: "Bandra", pressure: 79, status: "Warning" },
];

export const transportNetworks = [
  { name: "Metro", capacity: 82, note: "+14% congestion", status: "amber" },
  { name: "Bus Network", capacity: 67, note: "Normal", status: "green" },
  { name: "Airport Transfers", capacity: 71, note: "Moderate delay", status: "amber" },
  { name: "Ride-Hailing", capacity: 89, note: "High demand", status: "red" },
  { name: "Shuttle Services", capacity: 54, note: "Available", status: "green" },
];

export const transportDemandHistory = [
  { time: "1h ago", metro: 58, bus: 42, ride: 60 },
  { time: "50m ago", metro: 62, bus: 45, ride: 65 },
  { time: "40m ago", metro: 68, bus: 50, ride: 70 },
  { time: "30m ago", metro: 72, bus: 55, ride: 78 },
  { time: "20m ago", metro: 76, bus: 60, ride: 84 },
  { time: "10m ago", metro: 80, bus: 64, ride: 87 },
  { time: "Now", metro: 82, bus: 67, ride: 89 },
];

export const hotelInventory = {
  total: 48920,
  available: 6340,
  occupied: 42580,
  reserved: 2100,
  blocked: 900,
  avgOccupancy: 87,
};

export const hotelZones = [
  { zone: "BKC", hotels: 42, available: 310, occupancy: 96, demand: "Very High", risk: "Critical" },
  { zone: "Bandra", hotels: 67, available: 820, occupancy: 91, demand: "High", risk: "Warning" },
  { zone: "Andheri", hotels: 84, available: 1420, occupancy: 86, demand: "High", risk: "Warning" },
  { zone: "Powai", hotels: 39, available: 1980, occupancy: 72, demand: "Medium", risk: "Healthy" },
  { zone: "Navi Mumbai", hotels: 52, available: 2840, occupancy: 64, demand: "Medium", risk: "Opportunity" },
];

export const aiRecommendations = [
  {
    priority: "High Priority",
    priorityColor: "red",
    title: "Redirect arrivals from BKC to Powai",
    detail: "BKC hotel capacity is expected to exceed 95% by 7:30 PM.",
    impactLabel: "Expected impact",
    impact: "−8% BKC demand",
    confidence: 94,
    action: "Apply Recommendation",
  },
  {
    priority: "Medium Priority",
    priorityColor: "amber",
    title: "Promote off-peak metro travel",
    detail: "Encourage visitors arriving between 6–8 PM to travel between 4–5 PM.",
    impactLabel: "Expected impact",
    impact: "−12% peak network load",
    confidence: 89,
    action: "Create Campaign",
  },
  {
    priority: "Opportunity",
    priorityColor: "green",
    title: "Promote Navi Mumbai accommodation",
    detail: "2,840 rooms remain available in the region.",
    impactLabel: "Potential redistributed visitors",
    impact: "+6,500",
    confidence: 81,
    action: "View Strategy",
  },
];

export const alerts = [
  {
    severity: "Critical",
    time: "8:42 PM",
    location: "BKC",
    issue: "Hotel inventory approaching saturation",
    impact: "Available inventory expected to fall below 5% within 90 minutes.",
  },
  {
    severity: "Critical",
    time: "8:21 PM",
    location: "Metro Line 1",
    issue: "Crowding expected within 30 minutes",
    impact: "Platform density projected to exceed safe threshold at Bandra station.",
  },
  {
    severity: "Warning",
    time: "8:05 PM",
    location: "Chhatrapati Shivaji Airport",
    issue: "Airport transfer demand spike",
    impact: "Taxi queue wait times rising toward 35+ minutes.",
  },
  {
    severity: "Warning",
    time: "7:58 PM",
    location: "Exhibition District, Gate 3",
    issue: "Venue Gate 3 approaching capacity",
    impact: "Entry queue growing faster than throughput can absorb.",
  },
  {
    severity: "Warning",
    time: "7:40 PM",
    location: "South Mumbai",
    issue: "Ride-hailing surge detected",
    impact: "Fares up 2.3x, pickup times extending across the zone.",
  },
  {
    severity: "Warning",
    time: "7:15 PM",
    location: "Destination-wide",
    issue: "Evening departure wave predicted",
    impact: "Outbound transport demand expected to spike 9–10 PM.",
  },
  {
    severity: "Warning",
    time: "6:58 PM",
    location: "Andheri",
    issue: "Hotel occupancy trending toward saturation",
    impact: "Occupancy expected to cross 90% before midnight.",
  },
];

export const forecastData = [
  { time: "12 AM", actual: 40000, forecast: 41000, low: 38000, high: 43500 },
  { time: "4 AM", actual: 28000, forecast: 27500, low: 25000, high: 30000 },
  { time: "8 AM", actual: 52000, forecast: 51000, low: 47000, high: 55000 },
  { time: "12 PM", actual: 98000, forecast: 96000, low: 90000, high: 103000 },
  { time: "4 PM", actual: 142000, forecast: 138000, low: 130000, high: 148000 },
  { time: "6 PM", actual: 168000, forecast: 165000, low: 155000, high: 176000 },
  { time: "8 PM", actual: 184620, forecast: 182000, low: 172000, high: 194000 },
  { time: "10 PM", actual: null, forecast: 171000, low: 158000, high: 186000 },
  { time: "12 AM+1", actual: null, forecast: 96000, low: 84000, high: 110000 },
];

export const predictedPeaks = [
  { when: "Friday 7:00 PM", visitors: "62K visitors" },
  { when: "Saturday 5:30 PM", visitors: "71K visitors" },
  { when: "Sunday 6:00 PM", visitors: "68K visitors" },
];

export const venues = [
  {
    name: "Jio World Convention Centre",
    occupancy: 12400,
    capacity: 15000,
    entryRate: 820,
    exitRate: 410,
    queue: 340,
    peak: "9:15 PM",
    risk: "Warning",
  },
  {
    name: "Wankhede Stadium",
    occupancy: 31200,
    capacity: 33000,
    entryRate: 1100,
    exitRate: 260,
    queue: 610,
    peak: "8:30 PM",
    risk: "Critical",
  },
  {
    name: "Exhibition Centre",
    occupancy: 9800,
    capacity: 18000,
    entryRate: 540,
    exitRate: 480,
    queue: 90,
    peak: "7:00 PM",
    risk: "Healthy",
  },
];

export const recommendationCategories = [
  "Accommodation",
  "Transportation",
  "Visitor Distribution",
  "Venue Management",
  "Pricing / Incentives",
  "Communication",
];

export const recommendationDetails = [
  {
    category: "Accommodation",
    problem: "BKC hotel inventory is approaching saturation.",
    insight: "6,500 visitors can be accommodated within 35 minutes of BKC.",
    action: "Promote Powai and Andheri accommodation.",
    impact: "Reduce BKC demand by 8–11%.",
  },
  {
    category: "Transportation",
    problem: "Metro Line 1 is projected to exceed 82% capacity by 8 PM.",
    insight: "22% of Line 1 riders are traveling to venues with off-peak entry windows.",
    action: "Promote off-peak travel between 4–5 PM with fare incentives.",
    impact: "Reduce peak network load by 12%.",
  },
  {
    category: "Visitor Distribution",
    problem: "Central Mumbai and Exhibition District are absorbing disproportionate demand.",
    insight: "Western and Northern zones have 40% more headroom across hotels and venues.",
    action: "Redirect ~8,000 visitors toward Western and Northern accommodation zones.",
    impact: "Balance zone-level pressure and cut wait times by ~15%.",
  },
  {
    category: "Venue Management",
    problem: "Gate 3 at the Exhibition District is trending toward capacity.",
    insight: "Gate 1 and Gate 2 are running at 54% and 61% throughput respectively.",
    action: "Rebalance entry queues by opening additional Gate 2 lanes.",
    impact: "Cut Gate 3 wait times by ~9 minutes.",
  },
  {
    category: "Pricing / Incentives",
    problem: "Ride-hailing demand is surging 89% above baseline in South Mumbai.",
    insight: "Historical data shows a 12% fare incentive shifts 18% of trips to shuttles.",
    action: "Introduce a temporary shuttle fare discount for South Mumbai routes.",
    impact: "Redistribute ~3,200 trips away from ride-hailing.",
  },
  {
    category: "Communication",
    problem: "Attendees are unaware of off-peak travel benefits.",
    insight: "Push notifications historically shift 24% of recipients to recommended windows.",
    action: "Send a targeted push notification recommending 3–5 PM departures.",
    impact: "Smooth the 6–8 PM arrival surge by an estimated 20%.",
  },
];

export const stayAreas = ["Powai", "Bandra", "Andheri", "BKC", "Navi Mumbai", "South Mumbai"];
export const plannerVenues = [
  "Wankhede Stadium",
  "Jio World Convention Centre",
  "Exhibition Centre",
];

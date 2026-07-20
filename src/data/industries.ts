export interface Industry {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  points: string[];
  recommended: string; // product slug
}

// Sectors from the CITA EV industries brief. Images use local project /
// installation photography; swap for sector-specific stock any time.
export const industries: Industry[] = [
  {
    slug: "homes-villas",
    title: "Homes & Villas",
    short: "Fast, safe and future-ready home EV charging.",
    image: "/images/project_condo.jpg",
    intro: "Charge your electric vehicle overnight at home with a compact, weatherproof CITA charger. Ideal for independent houses and villas, our residential units deliver reliable daily charging with smart app control and full safety protection.",
    points: ["Overnight home charging", "Smart app scheduling & monitoring", "IP65 & IK10 weatherproof build", "3-year warranty"],
    recommended: "smart-7",
  },
  {
    slug: "gated-communities",
    title: "Gated Communities",
    short: "Efficient, smart shared charging for residents.",
    image: "/images/ready_bg.jpg",
    intro: "Give every resident dependable access to EV charging across apartments and gated communities. Shared chargers with RFID access and load management keep energy use fair and under control.",
    points: ["Shared resident charging", "RFID user authentication", "Dynamic load balancing", "Central management via CPMS"],
    recommended: "smart-22",
  },
  {
    slug: "office-buildings",
    title: "Office Buildings",
    short: "Support employee mobility and future-proof your workplace.",
    image: "/images/project_corporate.jpg",
    intro: "Attract talent and support sustainability goals with workplace EV charging. CITA commercial chargers offer access control, energy monitoring and OCPP networking for effortless management.",
    points: ["Workplace charging for staff", "Access control & billing", "Energy monitoring", "Networked via OCPP"],
    recommended: "smart-22",
  },
  {
    slug: "parking-garages",
    title: "Parking Garages",
    short: "Convenient on-site charging for every visitor.",
    image: "/images/IMG_1600.JPG",
    intro: "Turn multi-level parking into a revenue-generating charging destination. Scalable AC and DC chargers fit any garage layout with smart payment and management built in.",
    points: ["Scalable multi-bay charging", "POS & app payments", "Compact wall or pedestal mount", "Remote monitoring"],
    recommended: "smart-44-gen-3",
  },
  {
    slug: "hotels-resorts",
    title: "Hotels & Resorts",
    short: "Improve guest experience with reliable EV charging.",
    image: "/images/why-choose-us.jpg",
    intro: "Offer guests premium destination charging while they stay. CITA chargers add value to your property and keep EV-driving customers coming back.",
    points: ["Destination charging for guests", "Premium branded experience", "Access control per guest", "Adds property value"],
    recommended: "smart-22",
  },
  {
    slug: "shopping-malls",
    title: "Shopping Malls",
    short: "Enhance the shopping experience with charging facilities.",
    image: "/images/10.jpeg",
    intro: "Keep shoppers on-site longer with fast, convenient charging. DC fast chargers top up vehicles while customers shop, dine and relax.",
    points: ["Fast top-up while shopping", "High-traffic DC charging", "Payment integration", "Brandable stations"],
    recommended: "smart-80-dc",
  },
  {
    slug: "airports",
    title: "Airports",
    short: "Convenient charging for travellers and airport fleets.",
    image: "/images/project_highway.jpg",
    intro: "Support travellers, taxis and ground fleets with dependable airport charging. Scalable AC and DC solutions handle high-demand, 24/7 operation.",
    points: ["Traveller & fleet charging", "24/7 high-demand operation", "AC & DC options", "Central fleet management"],
    recommended: "smart-80-dc",
  },
  {
    slug: "petrol-pumps",
    title: "Petrol Pumps",
    short: "Attract modern drivers by adding EV fast charging.",
    image: "/images/77.jpeg",
    intro: "Future-proof your fuel station with high-power DC fast charging. Serve more EVs, increase dwell time and open a new revenue stream.",
    points: ["High-power DC fast charging", "Charge up to 4 EVs at once", "Payment & billing ready", "New revenue stream"],
    recommended: "smart-80-dc",
  },
  {
    slug: "car-rentals",
    title: "Car Rentals",
    short: "Dependable charging for electric rental fleets.",
    image: "/images/car.jpg",
    intro: "Keep electric rental fleets ready to go with efficient depot charging. Manage every vehicle's charge from one dashboard.",
    points: ["Fleet-ready charging", "Central dashboard control", "Scheduled & optimised charging", "Scalable as fleet grows"],
    recommended: "smart-44-gen-3",
  },
  {
    slug: "schools-colleges",
    title: "Schools & Colleges",
    short: "Greener commuting across campuses.",
    image: "/images/IMG_1615.JPG",
    intro: "Enable cleaner commuting for staff, students and campus fleets. Reliable, safe charging supports your institution's sustainability goals.",
    points: ["Campus staff & fleet charging", "Safe, certified hardware", "Access control", "Energy reporting"],
    recommended: "smart-22",
  },
  {
    slug: "hospitals",
    title: "Hospitals",
    short: "Always-available charging for staff and visitors.",
    image: "/images/IMG_1616.JPG",
    intro: "Provide dependable, round-the-clock charging for medical staff, visitors and hospital fleets, with robust hardware built for constant use.",
    points: ["24/7 reliable charging", "Staff & visitor access", "Durable IP-rated build", "Remote support"],
    recommended: "smart-22",
  },
  {
    slug: "sports-stadiums",
    title: "Sports Stadiums",
    short: "High-capacity charging for large-scale venues.",
    image: "/images/IMG_1617.JPG",
    intro: "Handle surges of EVs on event days with high-capacity charging infrastructure. Scalable DC hubs keep queues short.",
    points: ["High-capacity event charging", "Scalable DC hubs", "Fast throughput", "Central management"],
    recommended: "smart-80-dc",
  },
  {
    slug: "government-buildings",
    title: "Government Buildings",
    short: "Cleaner commuting for public employees and visitors.",
    image: "/images/88.jpeg",
    intro: "Support public-sector electrification with certified, compliant charging for government offices and fleets, backed by local installation and support.",
    points: ["Public-sector charging", "Certified & compliant", "Fleet & visitor access", "Local installation & support"],
    recommended: "smart-44-gen-3",
  },
  {
    slug: "fleets-depots",
    title: "Fleets & Depots",
    short: "High-performance systems to accelerate fleet electrification.",
    image: "/images/IMG_1640.JPG",
    intro: "Electrify commercial fleets with high-performance depot charging. Dual AC and high-power DC chargers, managed centrally, keep vehicles moving.",
    points: ["Depot & fleet charging", "Dual AC & high-power DC", "Central fleet management", "Scheduled overnight charging"],
    recommended: "smart-44-gen-3",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

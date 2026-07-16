export interface ComparisonCol {
  name: string;
  protection: string;
  smartApp: boolean;
  mounting: string;
  rfid: boolean;
  touchScreen: boolean;
  compatibleAll: boolean;
  warranty: string;
  cable: string;
  datasheet: string;
  datasheetUrl?: string;
}

export interface SmartFeature {
  title: string;
  icon: string;
}

export interface ProductData {
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "DC Fast" | "Software";
  powerOutput: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  benefits: string[];
  targetApplications: string[];
  imageUrl: string;
  faqs: { q: string; a: string }[];
  datasheetUrl?: string;
  comparisonTable?: ComparisonCol[];
  smartFeatures?: SmartFeature[];
  heroImageUrl?: string;
}

export const productsData: ProductData[] = [
  {
    slug: "smart-7",
    name: "Smart 7",
    category: "Residential",
    powerOutput: "7kW",
    heroHeadline: "Reliable Everyday EV Charging",
    heroSubheadline: "Smart, efficient and secure home charging designed for daily electric vehicle use.",
    description: "The CITA Smart 7 has been developed to provide dependable home charging for EV owners who require a balance between performance, safety and intelligent functionality. Its compact design allows installation in garages, carports, residential parking spaces and apartment buildings while maintaining a modern appearance. With integrated smart charging technology, users can manage charging sessions, monitor energy usage and optimize charging schedules through connected software platforms.",
    benefits: [
      "Simple Daily Charging",
      "Reduced Charging Costs",
      "Smart Monitoring",
      "Remote Management",
      "Enhanced Safety",
      "Weather Resistant Construction",
      "Future Software Compatibility"
    ],
    targetApplications: [
      "BYD Atto 3", "BYD Dolphin", "BYD Seal", "MG ZS EV", "MG4", "Kia EV6", "Hyundai IONIQ 5", "BMW i4", "Mercedes EQ Series"
    ],
    imageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2024/08/Group-2119-1.png",
    faqs: [
      { q: "Which charger is best for a home?", a: "Smart 7, Smart 7 Eco and Smart 7 Pro are all designed for residential use." },
      { q: "Can chargers be installed outdoors?", a: "Yes, suitable models are designed for outdoor environments." },
      { q: "Can I monitor charging through my phone?", a: "Yes, supported models include smart monitoring features." }
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-7.pdf",
    smartFeatures: [
      { title: "Access with mobile app via WiFi /4G/ Ethernet", icon: "smartphone" },
      { title: "Up to 3 years warranty (extendable)", icon: "award" },
      { title: "RFID access for instant command", icon: "nfc" },
      { title: "Compatible with all type 2 charging cables", icon: "plug" },
      { title: "PME fault detection", icon: "alert-triangle" },
      { title: "MID-certified energy meter", icon: "zap" },
      { title: "Active & Dynamic Load Balancing", icon: "activity" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Modbus Integration to Solar PV & Smart System", icon: "sun" },
      { title: "IP65 and IK10 Rated EV Charger", icon: "shield" }
    ],
    comparisonTable: [
      { name: "CITA SMART PRO 7KW", protection: "IP65 & IK10", smartApp: true, mounting: "On a wall & on a pole", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years", cable: "Type 2 Charging Cable 5 Meters", datasheet: "Download", datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-7.pdf" },
      { name: "CITA SMART 7KW ULTRA", protection: "IP54 & IK10", smartApp: true, mounting: "On a wall & on a pole", rfid: true, touchScreen: true, compatibleAll: true, warranty: "3 Years", cable: "Tethered Type 2, 5 meters cable", datasheet: "Download" },
      { name: "CITA SMART 7KW ECO", protection: "IP65 & IK10", smartApp: true, mounting: "On a wall & on a pole", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years", cable: "Tethered Type 2, 5 meters cable", datasheet: "Download" }
    ]
  },
  {
    slug: "smart-22",
    name: "Smart 22",
    category: "Commercial",
    powerOutput: "22kW",
    heroHeadline: "Intelligent Commercial Charging",
    heroSubheadline: "22kW smart charging solution designed for modern commercial properties.",
    description: "The CITA Smart 22 is engineered for commercial environments requiring dependable charging performance and advanced energy management. Designed for workplaces, commercial developments, residential towers and hospitality venues, the Smart 22 combines powerful charging capability with intelligent connectivity. Its smart management features allow operators to control access, monitor usage and optimize charging performance through centralized software platforms. The Smart 22 provides an ideal balance between charging speed, operational efficiency and long-term scalability.",
    benefits: [
      "Professional Charging Experience",
      "Smart User Authentication",
      "Remote Management",
      "Energy Monitoring",
      "Future Expansion Ready",
      "Commercial Revenue Potential",
      "Enhanced Property Value"
    ],
    targetApplications: [
      "Corporate Offices", "Business Parks", "Hotels", "Hospitals", "Shopping Centers", "Universities", "Residential Towers", "Commercial Parking Facilities"
    ],
    imageUrl: "/products/Smart-22-Transparent.png",
    heroImageUrl: "/products/Smart-22-Hero.png",
    faqs: [
      { q: "Can charging sessions be monitored remotely?", a: "Yes." },
      { q: "Can multiple users access the charger?", a: "Yes through RFID authorization." },
      { q: "Is billing software supported?", a: "Yes through OCPP-compatible platforms." }
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-22.pdf",
    comparisonTable: [
      {
        name: "CITA SMART PRO 22KW",
        protection: "IP65 & IK10",
        smartApp: true,
        mounting: "On a wall & on a pole",
        rfid: true,
        touchScreen: false,
        compatibleAll: true,
        warranty: "3 Years",
        cable: "Type 2 Charging Cable 5 Meters",
        datasheet: "Download",
        datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-22.pdf"
      },
      {
        name: "CITA SMART 22KW ULTRA",
        protection: "IP54 & IK10",
        smartApp: true,
        mounting: "On a wall & on a pole",
        rfid: true,
        touchScreen: true,
        compatibleAll: true,
        warranty: "3 Years",
        cable: "Tethered Type 2, 5 meters cable",
        datasheet: "Download",
        datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Ultra-Smart-22-Datasheet.pdf"
      },
      {
        name: "CITA SMART 22KW ECO",
        protection: "IP65 & IK10",
        smartApp: true,
        mounting: "On a wall & on a pole",
        rfid: true,
        touchScreen: false,
        compatibleAll: true,
        warranty: "3 Years",
        cable: "Tethered Type 2, 5 meters cable",
        datasheet: "Download",
        datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-ECO-22.pdf"
      }
    ],
    smartFeatures: [
      { title: "Access with mobile app via WiFi /4G/ Ethernet", icon: "smartphone" },
      { title: "Up to 3 years warranty (extendable)", icon: "award" },
      { title: "RFID access for instant command", icon: "nfc" },
      { title: "Compatible with all type 2 charging cables", icon: "plug" },
      { title: "PME fault detection", icon: "alert-triangle" },
      { title: "MID-certified energy meter", icon: "zap" },
      { title: "Active & Dynamic Load Balancing", icon: "activity" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Built-in 4G router", icon: "wifi" },
      { title: "Modbus Integration to Solar PV & Smart System", icon: "sun" },
      { title: "IP65 and IK10 Rated EV Charger", icon: "shield" }
    ]
  },
  {
    slug: "smart-80-dc",
    name: "Smart 80 DC",
    category: "DC Fast",
    powerOutput: "80kW DC",
    heroHeadline: "Designed For High-Traffic Charging Locations",
    heroSubheadline: "Serve more vehicles with powerful 80kW DC charging technology.",
    description: "The Smart 80 DC is ideal for businesses expecting consistent charging demand. Its ability to support multiple outputs makes it suitable for busy locations where customer convenience and operational efficiency are priorities. The charger is equipped with modern payment systems, intelligent charging controls and advanced monitoring capabilities.",
    benefits: [
      "Higher Throughput",
      "More Charging Sessions",
      "Reduced Waiting Times",
      "Higher Revenue Potential",
      "Improved Customer Satisfaction",
      "Commercial Scalability"
    ],
    targetApplications: [
      "Motorway Service Areas", "Fuel Stations", "Fleet Depots", "Commercial Charging Hubs", "Shopping Malls", "Government Projects"
    ],
    imageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2024/11/Group-2426.png",
    faqs: [
      { q: "Can multiple vehicles charge simultaneously?", a: "Yes." },
      { q: "Is payment integration supported?", a: "Yes." },
      { q: "Does it support OCPP?", a: "Yes." }
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-80-DC.pdf",
    smartFeatures: [
      { title: "Simultaneous multi-vehicle charging", icon: "activity" },
      { title: "Integrated payment systems", icon: "nfc" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Built-in 4G / Ethernet connectivity", icon: "wifi" },
      { title: "MID-certified DC/AC energy meter", icon: "zap" },
      { title: "IP54 & IK10 rated construction", icon: "shield" },
      { title: "Large LCD touchscreen interface", icon: "smartphone" },
      { title: "RFID authentication", icon: "plug" }
    ]
  },
  {
    slug: "smart-11",
    name: "Smart 11",
    category: "Residential",
    powerOutput: "11kW",
    heroHeadline: "Elevate Your EV Charging Experience",
    heroSubheadline: "11kW Mode 3 AC charger with smart connectivity, ideal for home and workplace charging.",
    description: "Engineered for efficiency and convenience, the CITA Smart 11 delivers faster charging times and seamless integration with smart home systems. This wall-mount AC charger is ideal for both home and workplace use, charging nearly 60% faster than a 7kW charger while balancing charging speed and energy efficiency. Featuring ADQCC, SASO, UKCA and CE approvals, it combines fast charging, smart connectivity and a durable IP65-rated, weather-resistant design.",
    benefits: [
      "Fast Charging",
      "User-Friendly Interface",
      "Smart Connectivity",
      "Durable IP65 Design",
      "Energy Efficiency",
      "Remote Monitoring & Scheduling",
      "3-Year Extendable Warranty"
    ],
    targetApplications: [
      "Private Residences", "Apartments", "Offices", "Shopping Malls", "Public Parking Areas", "Workplaces"
    ],
    imageUrl: "/products/Smart.png",
    faqs: [
      { q: "What is the charging speed of the Smart 11kW charger?", a: "It charges nearly 60% faster than 7kW chargers, delivering approximately 38-40 miles of range per hour depending on the vehicle model and battery capacity." },
      { q: "Is it compatible with all electric vehicles?", a: "Yes, it works with most EVs using the standard Type 2 connector, including Tesla, Nissan, BMW, Audi, Mercedes, Hyundai and Kia." },
      { q: "Can it be installed indoors and outdoors?", a: "Yes. Its robust, weather-resistant IP65 casing makes it suitable for both indoor and outdoor installation." }
    ],
    smartFeatures: [
      { title: "Access with mobile app via WiFi /4G/ Ethernet", icon: "smartphone" },
      { title: "Up to 3 years warranty (extendable)", icon: "award" },
      { title: "RFID access for instant command", icon: "nfc" },
      { title: "Compatible with all type 2 charging cables", icon: "plug" },
      { title: "PME fault detection", icon: "alert-triangle" },
      { title: "MID-certified energy meter", icon: "zap" },
      { title: "Active & Dynamic Load Balancing", icon: "activity" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Built-in 4G router", icon: "wifi" },
      { title: "Modbus Integration to Solar PV & Smart System", icon: "sun" }
    ],
    comparisonTable: [
      { name: "CITA SMART PRO 11KW", protection: "IP65 & IK10", smartApp: true, mounting: "On a wall & on a pole", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years", cable: "Type 2 Charging Cable 5 Meters", datasheet: "Download" },
      { name: "CITA SMART 11KW ULTRA", protection: "IP54 & IK10", smartApp: true, mounting: "On a wall & on a pole", rfid: true, touchScreen: true, compatibleAll: true, warranty: "3 Years", cable: "Tethered Type 2, 5 meters cable", datasheet: "Download" },
      { name: "CITA SMART 11KW ECO", protection: "IP65 & IK10", smartApp: true, mounting: "On a wall & on a pole", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years", cable: "Tethered Type 2, 5 meters cable", datasheet: "Download" }
    ]
  },
  {
    slug: "smart-44-gen-3",
    name: "Smart 44 Gen 3",
    category: "Commercial",
    powerOutput: "44kW (2x22kW)",
    heroHeadline: "Charge Two EVs at Once",
    heroSubheadline: "2 x 22kW Mode 3 AC charger with 7-inch touchscreen and contactless payment, built for busy sites.",
    description: "The new and improved CITA Smart 44 Gen 3 is a pedestal-mount dual AC charger that charges two EVs simultaneously at up to 22kW each. With intelligent load management distributing power efficiently between both ports, a 7-inch LCD touchscreen, POS contactless payment and OCPP 1.6 integration, it is ideal for apartment complexes, workplaces and public charging stations. Its IP65 and IK10 rated design ensures reliable performance in demanding environments.",
    benefits: [
      "Charge 2 EVs Simultaneously",
      "Time Efficiency",
      "Intelligent Load Management",
      "7-inch LCD Touchscreen",
      "Contactless POS Payment",
      "Future-Proof for Larger Batteries",
      "3-Year Extendable Warranty"
    ],
    targetApplications: [
      "Apartment Complexes", "Workplaces", "Public Charging Stations", "Fleet Operations", "Retail & Malls", "Business Parks"
    ],
    imageUrl: "/products/New-44-Front.png",
    faqs: [
      { q: "How many EVs can it charge at once?", a: "Two - it charges two EVs simultaneously at up to 22kW per vehicle using intelligent load management." },
      { q: "Can it be used for both residential and commercial installations?", a: "Yes. It is primarily built for commercial sites but also suits homes needing multiple charging points." },
      { q: "Is it certified?", a: "Yes - UKCA, CE and ADQCC approved and OZEV grant approved, meeting strict safety and performance standards." }
    ],
    smartFeatures: [
      { title: "Access with mobile app via WiFi /4G/ Ethernet", icon: "smartphone" },
      { title: "Up to 3 years warranty (extendable)", icon: "award" },
      { title: "Charge 2 EVs at once with up to 22kW AC", icon: "activity" },
      { title: "7-inch LCD touch screen", icon: "smartphone" },
      { title: "POS terminal contactless payment", icon: "nfc" },
      { title: "MID-certified energy meter", icon: "zap" },
      { title: "MCCB & RCD Protection", icon: "shield" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Built-in 4G router", icon: "wifi" },
      { title: "Modbus Integration to Solar PV & Smart System", icon: "sun" }
    ]
  },
  {
    slug: "smart-dc-30",
    name: "Smart DC 30",
    category: "DC Fast",
    powerOutput: "30kW DC",
    heroHeadline: "Compact DC Fast Charging",
    heroSubheadline: "A compact 30kW DC charger built for highways, fleets, parking facilities and public hubs.",
    description: "The all-new CITA Smart DC 30 is a compact fast DC charger ideal for commercial and light public charging. Delivering up to 30kW, it can charge compatible CCS2 vehicles in under three hours. Built with IP55-rated protection, AC/DC residual current protection and a 10.4-inch LCD touchscreen, it supports OCPP 1.6 (upgradable to 2.0.1), 4G/Ethernet connectivity, RFID authentication, POS payment and QR-code access - reliable fast charging without complex infrastructure.",
    benefits: [
      "Compact Footprint",
      "Fast DC Charging",
      "MID DC/AC Meter",
      "IP55 Rated Protection",
      "10.4-inch LCD Touchscreen",
      "RFID, POS & QR Access",
      "OCPP 1.6 (Upgradable to 2.0.1)"
    ],
    targetApplications: [
      "Highways", "Fleet Depots", "Parking Facilities", "Public Charging Hubs", "Commercial Sites", "Retail Locations"
    ],
    imageUrl: "/products/DC-30.png",
    faqs: [
      { q: "How many EVs can the Smart DC 30 charge at once?", a: "One at a time via a single DC gun, charging compatible CCS2 vehicles in under three hours at up to 30kW." },
      { q: "What protection does it offer?", a: "IP55 protection against dust and water, IK10 impact resistance, and AC/DC residual current protection (RCD)." },
      { q: "What access and payment options are supported?", a: "RFID card authentication, POS payment terminal integration and QR-code access for a smooth user experience." }
    ],
    smartFeatures: [
      { title: "MID DC/AC energy meter", icon: "zap" },
      { title: "IP55 rated protection", icon: "shield" },
      { title: "OCPP 1.6 (upgradable to 2.0.1)", icon: "server" },
      { title: "4G / Ethernet connectivity", icon: "wifi" },
      { title: "AC/DC residual current protection (RCD)", icon: "alert-triangle" },
      { title: "RFID authentication", icon: "nfc" },
      { title: "POS payment terminal & QR access", icon: "plug" },
      { title: "10.4-inch LCD touchscreen", icon: "smartphone" }
    ]
  },
  {
    slug: "dual-ecopillar",
    name: "Dual EcoPillar",
    category: "Commercial",
    powerOutput: "2x22kW AC",
    heroHeadline: "Dual-Port Pedestal Charging",
    heroSubheadline: "Freestanding dual-socket AC pillar built for shared and public parking.",
    description: "The CITA Dual EcoPillar is a freestanding pedestal AC charger designed for shared parking, workplaces and public spaces. With two charging sockets it serves two EVs at once, combining intelligent load management, RFID access and OCPP connectivity in a durable, weatherproof pillar. It is ideal for car parks, residential communities and commercial forecourts across Pakistan.",
    benefits: [
      "Dual-Socket Charging",
      "Freestanding Pedestal Design",
      "Intelligent Load Management",
      "RFID User Access",
      "OCPP Connectivity",
      "Weatherproof IP-Rated Build",
      "3-Year Extendable Warranty"
    ],
    targetApplications: [
      "Car Parks", "Residential Communities", "Workplaces", "Commercial Forecourts", "Retail Sites", "Public Parking"
    ],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2026/03/Untitled-design-56.png",
    faqs: [
      { q: "How many EVs can the Dual EcoPillar charge?", a: "Two at once, via its dual charging sockets with intelligent load balancing." },
      { q: "Where is it best installed?", a: "Shared car parks, workplaces, residential communities and commercial forecourts." },
      { q: "Does it support access control?", a: "Yes, RFID user authentication and OCPP backend integration." }
    ],
    smartFeatures: [
      { title: "Dual-socket simultaneous charging", icon: "activity" },
      { title: "Access with mobile app via WiFi /4G", icon: "smartphone" },
      { title: "RFID user authentication", icon: "nfc" },
      { title: "Compatible with all type 2 cables", icon: "plug" },
      { title: "MID-certified energy meter", icon: "zap" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Intelligent load balancing", icon: "sun" },
      { title: "Weatherproof IP-rated pedestal", icon: "shield" }
    ]
  },
  {
    slug: "smart-dc-eco",
    name: "Smart DC ECO",
    category: "DC Fast",
    powerOutput: "80-160kW DC",
    heroHeadline: "Scalable DC Fast Charging",
    heroSubheadline: "80-160kW DC charging for commercial hubs, fleets and highways.",
    description: "The CITA Smart DC ECO delivers scalable rapid charging from 80kW up to 160kW, built for commercial charging hubs, fleet depots and highway locations. With dual CCS2 outputs, dynamic power sharing, a large touchscreen, RFID and POS payment and OCPP connectivity, it serves high-demand sites efficiently. It is IP54/IK10 rated for durability in Pakistan's climate and backed by a 2-year extendable warranty.",
    benefits: [
      "80-160kW Scalable Output",
      "Dual CCS2 Outputs",
      "Dynamic Power Sharing",
      "Touchscreen + RFID + POS",
      "OCPP Connectivity",
      "IP54 / IK10 Rated",
      "2-Year Extendable Warranty"
    ],
    targetApplications: [
      "Commercial Charging Hubs", "Fleet Depots", "Highways", "Fuel Stations", "Shopping Malls", "Government Projects"
    ],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2026/03/New-DC-2026-Design-2-1-e1772542176389.png",
    faqs: [
      { q: "What power range does the DC ECO cover?", a: "From 80kW up to 160kW, scalable to match site demand." },
      { q: "Can it charge two vehicles?", a: "Yes, with dual CCS2 outputs and dynamic power sharing between them." },
      { q: "What warranty is included?", a: "A 2-year extendable warranty, standard on CITA DC chargers." }
    ],
    smartFeatures: [
      { title: "Scalable 80-160kW output", icon: "activity" },
      { title: "Dual CCS2 outputs", icon: "plug" },
      { title: "Dynamic power sharing", icon: "zap" },
      { title: "Touchscreen interface", icon: "smartphone" },
      { title: "RFID & POS payment", icon: "nfc" },
      { title: "OCPP connectivity", icon: "server" },
      { title: "4G / Ethernet connectivity", icon: "wifi" },
      { title: "IP54 & IK10 rated", icon: "shield" }
    ]
  },
  {
    slug: "smart-dc-pro",
    name: "Smart DC PRO",
    category: "DC Fast",
    powerOutput: "200-480kW DC",
    heroHeadline: "Ultra-Rapid DC Charging",
    heroSubheadline: "200-480kW ultra-fast charging for highways, fleets and public charging hubs.",
    description: "The CITA Smart DC PRO is a high-power ultra-rapid charger delivering 200kW up to 480kW for the most demanding public and fleet applications. Engineered for motorway service areas, large fleet depots and flagship charging hubs, it supports multiple simultaneous outputs, dynamic load management, contactless payment and full OCPP connectivity. Its rugged IP54/IK10 construction ensures reliable performance under heavy use, with a 2-year extendable warranty.",
    benefits: [
      "200-480kW Ultra-Rapid",
      "Multiple Simultaneous Outputs",
      "Dynamic Load Management",
      "Contactless Payment",
      "OCPP Connectivity",
      "Rugged IP54 / IK10 Build",
      "2-Year Extendable Warranty"
    ],
    targetApplications: [
      "Motorway Service Areas", "Large Fleet Depots", "Flagship Charging Hubs", "Fuel Stations", "Logistics Centers", "Government Infrastructure"
    ],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2026/03/New-DC-Pro-e1772542547882.png",
    faqs: [
      { q: "How much power does the DC PRO deliver?", a: "From 200kW up to 480kW, for ultra-rapid high-demand charging." },
      { q: "What sites is it designed for?", a: "Motorway service areas, large fleet depots and flagship public charging hubs." },
      { q: "Does it support simultaneous charging?", a: "Yes, multiple outputs with dynamic load management." }
    ],
    smartFeatures: [
      { title: "Ultra-rapid 200-480kW output", icon: "activity" },
      { title: "Multiple simultaneous outputs", icon: "plug" },
      { title: "Dynamic load management", icon: "zap" },
      { title: "Contactless payment", icon: "nfc" },
      { title: "OCPP connectivity", icon: "server" },
      { title: "4G / Ethernet connectivity", icon: "wifi" },
      { title: "Large touchscreen interface", icon: "smartphone" },
      { title: "Rugged IP54 & IK10 build", icon: "shield" }
    ]
  },
  {
    slug: "cita-ev-app",
    name: "CITA EV App",
    category: "Software",
    powerOutput: "Mobile App",
    heroHeadline: "Your EV Charging Companion",
    heroSubheadline: "Locate stations, schedule sessions and monitor charging from your phone.",
    description: "Take control of your EV charging with the CITA EV App. Locate charging stations, start and schedule charging sessions, monitor real-time energy usage and optimise efficiency - all from your phone. Available for iOS and Android, the app connects seamlessly with CITA home EV chargers for a simple, smart and safe charging experience.",
    benefits: [
      "Locate Charging Stations",
      "Start & Schedule Sessions",
      "Real-Time Monitoring",
      "Energy Usage Analytics",
      "Remote Control",
      "iOS & Android",
      "Works with CITA Home Chargers"
    ],
    targetApplications: [
      "Home EV Owners", "Apartment Residents", "Workplace Users", "Fleet Drivers"
    ],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2025/12/smart-ev-app-solutions-for-all-chargers.png",
    faqs: [
      { q: "Which chargers work with the CITA EV App?", a: "The app works seamlessly with CITA home EV chargers for monitoring and control." },
      { q: "Is the app available on iOS and Android?", a: "Yes, it is available on both the App Store and Google Play." },
      { q: "What can I do with the app?", a: "Locate stations, start and schedule charging, monitor usage and optimise energy efficiency." }
    ],
    smartFeatures: [
      { title: "Locate charging stations", icon: "smartphone" },
      { title: "Start & schedule sessions", icon: "activity" },
      { title: "Real-time charging monitoring", icon: "zap" },
      { title: "Energy usage analytics", icon: "server" },
      { title: "Remote start/stop control", icon: "wifi" },
      { title: "Available on iOS & Android", icon: "plug" }
    ]
  },
  {
    slug: "cita-cpms",
    name: "CITA CPMS",
    category: "Software",
    powerOutput: "Web Platform",
    heroHeadline: "Charge Point Management System",
    heroSubheadline: "Monitor, control and scale every charger from one intelligent dashboard.",
    description: "CITA CPMS (Charge Point Management System) is a powerful platform for commercial, fleet and public charging operators. Manage multiple chargers across locations from one central dashboard - monitor sessions, energy data and charger status in real time, control user access and RFID cards, handle billing and optimise performance. Fully compatible with all CITA AC and DC chargers, CPMS scales EV charging operations effortlessly.",
    benefits: [
      "Central Multi-Charger Dashboard",
      "Real-Time Session Monitoring",
      "User & RFID Access Control",
      "Energy & Usage Analytics",
      "Billing & Revenue Management",
      "Manages Both AC & DC",
      "Scalable Across Locations"
    ],
    targetApplications: [
      "Offices", "Residential Communities", "Fleet Operators", "Public Charging Networks", "Retail & Hospitality", "Government Projects"
    ],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2026/01/CPMS@2x.png",
    faqs: [
      { q: "Does CPMS support multiple chargers at one location?", a: "Yes, it manages multiple chargers from one central dashboard, ideal for offices, communities, fleets and public sites." },
      { q: "Can I control user access?", a: "Yes, administrators can assign permissions, manage RFID cards and track charging sessions." },
      { q: "Does it manage both AC and DC chargers?", a: "Yes, CPMS manages both AC and DC chargers from a single system." }
    ],
    smartFeatures: [
      { title: "Central multi-charger dashboard", icon: "server" },
      { title: "Real-time session monitoring", icon: "activity" },
      { title: "User & RFID access control", icon: "nfc" },
      { title: "Energy & usage analytics", icon: "zap" },
      { title: "Billing & revenue management", icon: "award" },
      { title: "Manages both AC & DC chargers", icon: "plug" }
    ]
  }
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return productsData.find(p => p.slug === slug);
}

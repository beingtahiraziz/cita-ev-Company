export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ev-charger-for-your-electric-vehicle",
    title: "How to Choose the Right EV Charger for Your Electric Vehicle",
    excerpt:
      "From power ratings to smart features, here is how to pick an EV charger that matches your vehicle, your property and your daily routine in Pakistan.",
    image: "https://citaevcharger.com.pk/wp-content/uploads/2026/06/EV-Charger-for-Your-Electric-Vehicle-1-1024x576.png",
    date: "June 2026",
    readTime: "6 min read",
    category: "Buying Guide",
    sections: [
      {
        paragraphs: [
          "Choosing the right EV charger is one of the most important decisions an electric vehicle owner will make. The right charger keeps your car ready every morning, protects your battery and fits comfortably into your electrical setup. The wrong one leads to slow charging, higher costs and daily frustration.",
          "This guide walks through the key factors to weigh before you buy, so you can match a charger to your vehicle, your home or business, and how you actually drive.",
        ],
      },
      {
        heading: "1. Match the power rating to your needs",
        paragraphs: [
          "AC chargers in the CITA range span 7kW, 22kW and 44kW, while DC fast chargers start at 30kW and scale far higher. A 7kW home charger comfortably refills most EVs overnight, while a 22kW or 44kW unit suits workplaces and shared parking where vehicles turn over faster.",
          "For fuel stations, fleets and public hubs where drivers need a quick top-up, DC fast charging from 30kW upward is the right choice.",
        ],
      },
      {
        heading: "2. Check compatibility with your vehicle",
        paragraphs: [
          "Most modern EVs sold in Pakistan use the Type 2 connector for AC charging and CCS2 for DC fast charging. CITA chargers are designed to work with all major brands including BYD, MG, Kia, Hyundai, BMW and Tesla, so compatibility is rarely an issue &mdash; but it is always worth confirming your car's onboard charger limit.",
        ],
      },
      {
        heading: "3. Look for smart features",
        paragraphs: [
          "A smart charger does far more than deliver power. App control, scheduling, RFID access, energy monitoring and OCPP connectivity let you charge on cheaper tariffs, track usage and manage access &mdash; essential for both homes and businesses.",
        ],
      },
      {
        heading: "4. Prioritise safety and durability",
        paragraphs: [
          "Look for IP65 and IK10 ratings on AC units and robust IP54/IP55 protection on DC chargers, along with built-in fault detection and residual current protection. These ensure reliable performance outdoors in Pakistan's climate and protect both your vehicle and your electrical system.",
        ],
      },
    ],
  },
  {
    slug: "installing-an-ev-charger-at-home",
    title: "Benefits of Installing an EV Charger at Home in Pakistan",
    excerpt:
      "Home charging is the most convenient and cost-effective way to own an EV. Here is why a dedicated home charger beats relying on public stations.",
    image: "https://citaevcharger.com.pk/wp-content/uploads/2026/06/Installing-an-EV-Charger-at-Home-1-1024x576.png",
    date: "June 2026",
    readTime: "5 min read",
    category: "Home Charging",
    sections: [
      {
        paragraphs: [
          "Electric vehicle adoption is steadily growing across Pakistan, and with it the need for reliable home charging. Installing a dedicated EV charger at home is the single biggest upgrade to the ownership experience &mdash; turning charging into something that happens quietly overnight rather than a chore you plan your day around.",
        ],
      },
      {
        heading: "Wake up to a full battery every day",
        paragraphs: [
          "A home charger means you start each day with the range you need. Plug in when you park, and your car is ready by morning &mdash; no detours to public stations, no waiting in queues.",
        ],
      },
      {
        heading: "Lower charging costs",
        paragraphs: [
          "Charging at home is significantly cheaper than public fast charging, and smart scheduling lets you charge during off-peak hours to cut costs further. Over the life of the vehicle, the savings easily offset the cost of the charger.",
        ],
      },
      {
        heading: "Better for your battery",
        paragraphs: [
          "Home AC charging is gentler than repeated DC fast charging, which helps preserve long-term battery health. A 7kW or 11kW unit delivers a steady overnight charge that keeps thermal stress low.",
        ],
      },
      {
        heading: "Added property value and safety",
        paragraphs: [
          "A professionally installed, certified charger adds value to your property and is far safer than makeshift charging from a household socket. CITA home chargers are IP65 and IK10 rated, weather-resistant and installed by trained local partners.",
        ],
      },
    ],
  },
  {
    slug: "ev-chargers-complete-guide",
    title: "EV Chargers Explained: A Complete Guide for Electric Vehicle Owners",
    excerpt:
      "AC vs DC, charging levels, connectors and smart management &mdash; a plain-English guide to how EV charging actually works.",
    image: "https://citaevcharger.com.pk/wp-content/uploads/2026/06/EV-Chargers-1-1024x576.png",
    date: "June 2026",
    readTime: "7 min read",
    category: "EV Basics",
    sections: [
      {
        paragraphs: [
          "EV chargers are becoming an essential part of everyday life as more drivers switch to electric. But the terminology &mdash; AC, DC, Level 2, CCS2, OCPP &mdash; can be confusing. This guide breaks down how EV charging works so you can make confident decisions.",
        ],
      },
      {
        heading: "AC vs DC charging",
        paragraphs: [
          "AC (alternating current) chargers send power to your car's onboard charger, which converts it for the battery. They are affordable, widely available and ideal for homes and workplaces. DC (direct current) chargers convert power externally and feed the battery directly, delivering much faster charging for public and commercial use.",
        ],
      },
      {
        heading: "Charging levels and speeds",
        paragraphs: [
          "AC home units typically range from 7kW to 22kW, refilling a car over a few hours. Commercial AC units such as the 44kW dual charger serve two vehicles at once. DC fast chargers from 30kW up to 480kW can add substantial range in minutes, making them perfect for highways and fleets.",
        ],
      },
      {
        heading: "Connectors and standards",
        paragraphs: [
          "In Pakistan, Type 2 is the standard AC connector and CCS2 is used for DC fast charging. Most EVs on sale today support both, and CITA chargers are built to work across all major brands.",
        ],
      },
      {
        heading: "Smart charging and management",
        paragraphs: [
          "Modern chargers connect to apps and management platforms using OCPP. This enables scheduling, remote monitoring, access control, billing and load balancing &mdash; turning a simple charger into a fully managed asset for homes, businesses and public networks.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

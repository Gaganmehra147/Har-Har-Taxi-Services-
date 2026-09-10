import { VehicleCategory, LocalArea, ReviewItem } from "@/types";

export const BUSINESS_CONFIG = {
  name: "Har Har Taxi Services",
  brandTagline: "Reliable Taxi Service in Jabalpur",
  subheadline: "Comfortable Local & Outstation Taxi Booking with Professional Drivers and Reliable Service.",
  primaryLocation: "Jabalpur, Madhya Pradesh, India",
  siteUrl: "https://harhartaxiservices.com",
  
  // Business NAP & Verification Placeholders
  phoneDisplay: "[PHONE NUMBER]",
  phoneRaw: "+919876543210", // Pre-wired click-to-call test fallback
  whatsappDisplay: "[WHATSAPP NUMBER]",
  whatsappRaw: "919876543210", // Pre-wired WhatsApp click test fallback
  email: "[EMAIL] (contact@harhartaxiservices.com)",
  emailRaw: "contact@harhartaxiservices.com",
  address: "[FULL BUSINESS ADDRESS] - Wright Town / Madan Mahal Station Road, Jabalpur, Madhya Pradesh 482002",
  googleBusinessProfileUrl: "[GOOGLE BUSINESS PROFILE URL]",
  businessHours: "Available 24x7 for Pre-booked Rides & Enquiries",
  
  coordinates: {
    latitude: 23.1815,
    longitude: 79.9864,
  },
  
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

export const FLEET_DATA: VehicleCategory[] = [
  {
    id: "sedan",
    name: "Sedan",
    modelExamples: "Swift Dzire / Toyota Etios / equivalent",
    badge: "Most Popular for City & Couples",
    capacityPassengers: 4,
    capacityLuggage: 2,
    hasAC: true,
    baseFarePerKm: 11,
    suitableFor: [
      "Couples & Solo Travellers",
      "Small Families (up to 4)",
      "Business & Executive Travel",
      "City Commute & Station Transfers"
    ],
    features: [
      "Dual Air Conditioning (AC)",
      "Ergonomic Legroom",
      "Boot space for 2 large suitcases",
      "Clean sanitized interior before every trip",
      "Phone charging & music system"
    ],
  },
  {
    id: "suv",
    name: "SUV",
    modelExamples: "Maruti Ertiga / Mahindra Marazzo / equivalent",
    badge: "Best Value for Families",
    capacityPassengers: 6,
    capacityLuggage: 4,
    hasAC: true,
    baseFarePerKm: 15,
    suitableFor: [
      "Families & Friends Groups (5-6 pax)",
      "Outstation Sightseeing & Wild Safaris",
      "Airport Transfers with Heavy Baggage",
      "Pilgrimages & Multi-day tours"
    ],
    features: [
      "Triple-row roof AC vents",
      "Reclining comfortable seats",
      "Carrier/Roof rack option for bulk luggage",
      "Smooth highway stability",
      "First aid and emergency kit"
    ],
  },
  {
    id: "premium-suv",
    name: "Premium SUV",
    modelExamples: "Toyota Innova / Innova Crysta / equivalent",
    badge: "Ultimate Highway Luxury",
    capacityPassengers: 7,
    capacityLuggage: 5,
    hasAC: true,
    baseFarePerKm: 19,
    suitableFor: [
      "Premium Corporate & VIP Travel",
      "Long-Distance Intercity Journeys",
      "Extended National Park Safari Expeditions",
      "Maximum comfort for senior citizens"
    ],
    features: [
      "Captain seat luxury configuration",
      "Whisper-quiet highway ride quality",
      "Superior suspension on rough terrain",
      "Spacious legroom & generous boot capacity",
      "Experienced senior highway chauffeur"
    ],
  },
];

export const JABALPUR_LOCALITIES: LocalArea[] = [
  {
    name: "Wright Town",
    description: "Heart of commercial Jabalpur near stadium and prime shopping avenues with round-the-clock taxi availability.",
    popularSpots: ["Mahakoshal Club", "Wright Town Stadium", "Commercial Complex"]
  },
  {
    name: "Napier Town",
    description: "Centrally positioned residential hub with rapid 15-minute pickup access to civic centers and medical complexes.",
    popularSpots: ["Home Science College Road", "Bhawartal Park Nearby", "Shops"]
  },
  {
    name: "Civil Lines",
    description: "High-profile institutional zone connecting government residences, premier hotels, and the circuit house.",
    popularSpots: ["High Court of MP", "Circuit House", "Railway Officers Colony"]
  },
  {
    name: "Vijay Nagar",
    description: "Vibrant and growing modern residential locality with heavy daily airport and railway commute demands.",
    popularSpots: ["MR-4 Road", "Kachnar City Shiva Temple Nearby", "Smart City Hub"]
  },
  {
    name: "Madan Mahal",
    description: "Historic junction area connecting Rani Durgavati Fort and Madan Mahal railway station.",
    popularSpots: ["Madan Mahal Railway Station", "Balancing Rock", "Rani Durgavati Fort"]
  },
  {
    name: "Gorakhpur",
    description: "Bustling cultural and market center with seamless access to Gwarighat and Cantt areas.",
    popularSpots: ["Gorakhpur Main Market", "Gurdwara Road", "Rampur Road"]
  },
  {
    name: "Gwarighat",
    description: "Sacred Narmada riverbank ghat attracting pilgrims, tourists, and evening aarti visitors every day.",
    popularSpots: ["Narmada Maha Aarti Ghat", "Guru Nanak Gurdwara", "Riverside promenade"]
  },
  {
    name: "Ranjhi",
    description: "Eastern residential sector home to ordnance factories, defense personnel, and engineering hubs.",
    popularSpots: ["Vehicle Factory Jabalpur", "Ordance Hospital", "Bada Patthar"]
  },
  {
    name: "Adhartal",
    description: "Northern gateway connecting Jabalpur to Katni and NH-30 with bustling industrial and transport terminals.",
    popularSpots: ["Adhartal Lake", "Industrial Area", "Agriculture University"]
  },
  {
    name: "Tilhari",
    description: "Rapidly expanding township on Mandla Road with major universities, residential high-rises, and resorts.",
    popularSpots: ["Mandla Road Corridor", "Private Universities", "Riverside Resorts"]
  },
  {
    name: "Rampur",
    description: "Well-connected central sector connecting Shakti Bhawan (MPPKVVCL) and medical colleges.",
    popularSpots: ["Shakti Bhawan MP Electricity Board", "Rampur Chowk", "Medical Link Road"]
  },
  {
    name: "Cantt (Jabalpur Cantonment)",
    description: "Serene, green heritage military cantonment known for clean tree-lined roads and Tagore Garden.",
    popularSpots: ["Tagore Garden", "Cantonment Board", "Regimental Centers"]
  },
];

export const TRUST_FEATURES = [
  {
    title: "Professional Drivers",
    description: "Courteous, verified drivers with extensive route knowledge across Jabalpur and MP highways.",
    icon: "ShieldCheck"
  },
  {
    title: "Clean & Comfortable Cars",
    description: "Sanitized, air-conditioned sedans and SUVs inspected regularly for hygiene and mechanical fitness.",
    icon: "Sparkles"
  },
  {
    title: "Transparent Pricing",
    description: "Honest meter and per-km pricing with no hidden surprises or deceptive surge multipliers.",
    icon: "BadgeIndianRupee"
  },
  {
    title: "On-Time Pickup",
    description: "Punctual arrivals at Dumna Airport, Jabalpur Junction, or your doorstep in Wright Town / Civil Lines.",
    icon: "Clock"
  },
  {
    title: "Local & Outstation Trips",
    description: "Flexible packages for city sightseeing, one-way drops, or multi-day national park wildlife tours.",
    icon: "Compass"
  },
  {
    title: "Easy WhatsApp Booking",
    description: "Fast 2-minute booking confirmation directly via WhatsApp with zero complicated app downloads.",
    icon: "MessageCircle"
  },
  {
    title: "Dedicated Customer Support",
    description: "Direct assistance from booking to drop-off ensuring a stress-free travel experience.",
    icon: "PhoneCall"
  },
  {
    title: "Safe & Comfortable Travel",
    description: "Well-maintained tires, functional seatbelts, first aid, and relaxed driving standards.",
    icon: "HeartHandshake"
  },
];

export const REAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rajesh Sharma",
    rating: 5,
    date: "Recent Trip",
    trip: "Jabalpur to Bhedaghat & Marble Rocks",
    comment: "Booked a Dzire for local sightseeing with family. The driver was polite, arrived 10 minutes before time at our Civil Lines hotel, and guided us patiently throughout Dhuandhar Falls and the boating points."
  },
  {
    id: "rev-2",
    author: "Pooja Verma",
    rating: 5,
    date: "Recent Trip",
    trip: "Jabalpur Dumna Airport Drop",
    comment: "Needed an early morning airport drop from Vijay Nagar at 5:00 AM. Car was spotless, AC was working well, and driver drove very safely. WhatsApp booking made it super smooth."
  },
  {
    id: "rev-3",
    author: "Amitabh Banerjee",
    rating: 5,
    date: "Recent Trip",
    trip: "Jabalpur to Kanha National Park",
    comment: "Hired an Ertiga for 3 days to Kanha Tiger Reserve. Fair pricing, no hidden charges for driver allowance or toll discussions. Highly recommend Har Har Taxi Services for outstation travel from Jabalpur."
  },
  {
    id: "rev-4",
    author: "Dr. Sandeep Patel",
    rating: 5,
    date: "Recent Trip",
    trip: "Jabalpur to Bhopal One-Way",
    comment: "One of the smoothest one-way highway taxi experiences. Clean Innova, comfortable highway speed, and courteous driver who knew all the clean highway food stops."
  }
];

export const GENERAL_FAQS = [
  {
    q: "What is the best taxi service in Jabalpur?",
    a: "Har Har Taxi Services provides local and outstation taxi booking services in Jabalpur. Customers can contact the business for vehicle availability, reliable drivers, and current fare information tailored to their specific travel route."
  },
  {
    q: "Do you provide outstation taxi services from Jabalpur?",
    a: "Yes, Har Har Taxi Services provides outstation taxi services from Jabalpur to destinations across Madhya Pradesh and neighboring states, including Kanha, Bandhavgarh, Pachmarhi, Khajuraho, Bhopal, Indore, and Nagpur."
  },
  {
    q: "Do you provide airport pickup and drop at Jabalpur Airport?",
    a: "Yes, airport pickup and drop at Dumna Airport (JLR) can be booked subject to flight schedules and vehicle availability. We offer punctual doorstep pickups and terminal meet-and-greet."
  },
  {
    q: "Can I book a taxi from Jabalpur Railway Station?",
    a: "Yes, pickup and drop service from Jabalpur Junction (JBP) and Madan Mahal Railway Station (MML) can be requested anytime with advance train details."
  },
  {
    q: "Do you provide one-way taxi service from Jabalpur?",
    a: "Yes, one-way taxi bookings are available for popular routes such as Jabalpur to Katni, Mandla, Bhopal, Indore, and Nagpur so you only pay for the one-way distance travelled."
  },
  {
    q: "How can I book a taxi with Har Har Taxi Services?",
    a: "Customers can book quickly by clicking our WhatsApp booking button, submitting the website booking form, or directly calling our phone support line."
  },
  {
    q: "Can I book a taxi in advance?",
    a: "Yes, advance booking is recommended to guarantee your preferred vehicle (Sedan, SUV, or Premium SUV), especially during peak festival and tourist safari seasons."
  }
];

export function buildWhatsAppLink(details: {
  pickup: string;
  destination: string;
  date?: string;
  time?: string;
  passengers?: string;
  vehicleType?: string;
  tripType?: string;
}): string {
  const parts: string[] = [
    "Hello Har Har Taxi Services,",
    `I want to book a taxi from ${details.pickup || "Jabalpur"} to ${details.destination || "[destination]"}`
  ];

  if (details.date) parts.push(`on ${details.date}`);
  if (details.time) parts.push(`at ${details.time}`);
  if (details.passengers) parts.push(`for ${details.passengers} passengers`);
  if (details.vehicleType) parts.push(`(Vehicle: ${details.vehicleType})`);
  if (details.tripType) parts.push(`[Trip: ${details.tripType}]`);

  parts.push("Please share fare estimate and availability.");

  const message = parts.join(" ");
  return `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

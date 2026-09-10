import { RouteInfo } from "@/types";

export const ROUTES_DATA: RouteInfo[] = [
  {
    slug: "jabalpur-to-bhedaghat",
    destination: "Bhedaghat",
    distanceKm: 25,
    estimatedTime: "45 mins - 1 hour",
    highway: "Bhedaghat Road / NH-45 corridor",
    tagline: "World-famous Marble Rocks, Dhuandhar Falls & Chausath Yogini Temple",
    description: "Bhedaghat is Jabalpur's premier tourist attraction, situated along the tranquil Narmada River. Famous for the roaring Dhuandhar Waterfall and breathtaking soaring Marble Rocks gorge, hiring a dedicated private taxi ensures hassle-free boating visits, temple darshan, and comfortable return transfers without relying on crowded shared autos.",
    fares: {
      sedan: { oneWay: 800, roundTrip: 1400 },
      suv: { oneWay: 1200, roundTrip: 2000 },
      premiumSuv: { oneWay: 1800, roundTrip: 2800 },
    },
    keyAttractions: [
      "Dhuandhar Waterfall misty viewpoint",
      "Marble Rocks Narmada boat ride (daytime & full moon)",
      "10th-century Chausath Yogini Temple",
      "Bandarkudini narrow gorge viewpoint",
      "Local marble handicraft souvenirs"
    ],
    travelTips: [
      "Plan your trip around late afternoon to catch the sunset boating between the towering white marble cliffs.",
      "Boating remains closed during monsoon months (July to September) for river safety.",
      "Book a round-trip taxi with waiting time included to avoid transport haggling at the site."
    ],
    popularPickupPoints: [
      "Jabalpur Railway Junction (JBP)",
      "Madan Mahal Railway Station",
      "Civil Lines Hotels & Resorts",
      "Wright Town & Russell Chowk",
      "Vijay Nagar Residences"
    ],
    faqs: [
      {
        q: "How much does a taxi from Jabalpur to Bhedaghat cost?",
        a: "A comfortable round-trip sedan (Dzire/Etios) for Bhedaghat sightseeing typically starts around ₹1,400 with vehicle waiting included. SUV options start around ₹2,000. Contact Har Har Taxi Services for customized timings."
      },
      {
        q: "What is the distance and travel time from Jabalpur to Bhedaghat?",
        a: "The distance is approximately 25 km from Jabalpur city center, taking around 45 to 60 minutes depending on local city traffic."
      },
      {
        q: "Can the taxi wait while we take the boat ride and visit the temple?",
        a: "Yes, our round-trip packages include flexible waiting time at Bhedaghat so you can comfortably enjoy the waterfall, boating, and temple darshan at your own pace."
      }
    ]
  },
  {
    slug: "jabalpur-to-kanha",
    destination: "Kanha National Park",
    distanceKm: 165,
    estimatedTime: "3.5 - 4 hours",
    highway: "NH-30 & Mandla - Mocha Corridor",
    tagline: "Tiger Reserve Safari Transfers to Khatia, Mukki & Kisli Gates",
    description: "Kanha Tiger Reserve is legendary for its dense sal forests, royal Bengal tigers, and rare hardground barasingha. Har Har Taxi Services provides punctual, well-maintained outstation taxis from Jabalpur Airport and Railway Station directly to your jungle resort near Khatia, Mocha, or Mukki gates.",
    fares: {
      sedan: { oneWay: 3200, roundTrip: 5500 },
      suv: { oneWay: 4400, roundTrip: 7500 },
      premiumSuv: { oneWay: 5800, roundTrip: 9800 },
    },
    keyAttractions: [
      "Kanha Jungle Safari (Morning & Evening safaris)",
      "Khatia & Mukki Safari Gates",
      "Kanha Museum & Interpretation Center",
      "Bamni Dadar (Sunset Point)",
      "Scenic village forest walks near Mocha"
    ],
    travelTips: [
      "Book your morning safari permits well in advance online via MP Forest Portal.",
      "If landing at Jabalpur Dumna Airport, reserve our airport pickup in advance to reach Kanha before resort sunset dinner.",
      "Choose an Ertiga or Innova if travelling with family or large wildlife photography equipment."
    ],
    popularPickupPoints: [
      "Jabalpur Dumna Airport (JLR)",
      "Jabalpur Main Junction (Station Gate 1 & 2)",
      "Civil Lines / Napier Town Hotels",
      "Bypass NH-30 Junction"
    ],
    faqs: [
      {
        q: "Which safari gate in Kanha is closest when travelling from Jabalpur?",
        a: "Khatia (Kisli) gate near Mocha is the most common and closest entrance from Jabalpur (~160 km, 3.5 hrs). Mukki gate is approximately 190 km and takes around 4.5 hours."
      },
      {
        q: "Can I book an outstation taxi from Jabalpur Airport directly to Kanha?",
        a: "Yes, our drivers track flight arrivals at Dumna Airport (JLR) to provide seamless tarmac-to-resort transfers directly to your hotel."
      }
    ]
  },
  {
    slug: "jabalpur-to-bandhavgarh",
    destination: "Bandhavgarh National Park",
    distanceKm: 165,
    estimatedTime: "4 - 4.5 hours",
    highway: "NH-30 & Umaria State Highway Corridor",
    tagline: "Direct resort transfers for Tala, Magdhi & Khitauli Safari Gates",
    description: "Boasting one of the highest densities of Royal Bengal tigers in the world, Bandhavgarh National Park is an unmissable destination for wildlife photographers. Har Har Taxi Services offers experienced highway drivers skilled on forest routes for reliable resort transfers from Jabalpur.",
    fares: {
      sedan: { oneWay: 3400, roundTrip: 5800 },
      suv: { oneWay: 4600, roundTrip: 7800 },
      premiumSuv: { oneWay: 6000, roundTrip: 10200 },
    },
    keyAttractions: [
      "Tala, Magdhi and Khitauli Safari zones",
      "Bandhavgarh Ancient Hill Fort & Caves",
      "Shesh Shaiya reclining Vishnu statue",
      "Climbers point and wildlife photography tracks"
    ],
    travelTips: [
      "Check which resort gate you are staying near (Tala is the core hub).",
      "Start early from Jabalpur to reach your resort in time for the afternoon 2:30 PM safari window."
    ],
    popularPickupPoints: [
      "Jabalpur Dumna Airport (JLR)",
      "Jabalpur Railway Station",
      "Madan Mahal Station",
      "Wright Town & Civil Lines"
    ],
    faqs: [
      {
        q: "What is the best vehicle for Jabalpur to Bandhavgarh travel?",
        a: "For families or groups carrying luggage, an Ertiga or Innova Crysta is highly recommended for superior suspension and luggage comfort on the Umaria highway."
      }
    ]
  },
  {
    slug: "jabalpur-to-khajuraho",
    destination: "Khajuraho",
    distanceKm: 260,
    estimatedTime: "5.5 - 6 hours",
    highway: "NH-30 & NH-34 via Katni & Panna Corridor",
    tagline: "UNESCO World Heritage Temples & Panna National Park Connection",
    description: "Travel smoothly from Jabalpur to the ancient 10th-century temples of Khajuraho, renowned for exquisite Nagara architecture and UNESCO World Heritage status. Our intercity outstation cabs offer a relaxing journey with clean highway stopovers.",
    fares: {
      sedan: { oneWay: 4900, roundTrip: 8500 },
      suv: { oneWay: 6800, roundTrip: 11500 },
      premiumSuv: { oneWay: 8800, roundTrip: 14500 },
    },
    keyAttractions: [
      "Western Group of Temples (Kandariya Mahadeva)",
      "Eastern & Southern Temple clusters",
      "Evening Sound & Light Show",
      "Raneh Falls canyon nearby",
      "Panna Tiger Reserve stopover"
    ],
    travelTips: [
      "Combine your Khajuraho tour with a quick visit to Panna National Park or Raneh Falls canyon along the route.",
      "Carry sunglasses and comfortable walking footwear for temple courtyards."
    ],
    popularPickupPoints: [
      "Jabalpur City Centre",
      "Civil Lines",
      "Dumna Airport",
      "Railway Station Gate"
    ],
    faqs: [
      {
        q: "Can we do a one-way taxi from Jabalpur to Khajuraho?",
        a: "Yes, Har Har Taxi Services provides verified one-way drop fares so you only pay for the one-way journey."
      }
    ]
  },
  {
    slug: "jabalpur-to-pachmarhi",
    destination: "Pachmarhi",
    distanceKm: 240,
    estimatedTime: "5 - 6 hours",
    highway: "NH-45 via Narsinghpur & Pipariya",
    tagline: "Hill Station Gateway: Dhoopgarh, Bee Falls & Jata Shankar",
    description: "Escape to Madhya Pradesh's sole hill resort nestled amidst the Satpura range. The scenic road winds through lush green valleys, waterfalls, and pine groves. Our seasoned hill-road chauffeurs ensure safe, relaxed transit across ghat sections.",
    fares: {
      sedan: { oneWay: 4600, roundTrip: 8000 },
      suv: { oneWay: 6200, roundTrip: 10500 },
      premiumSuv: { oneWay: 8200, roundTrip: 13500 },
    },
    keyAttractions: [
      "Dhoopgarh (Highest peak in Madhya Pradesh)",
      "Bee Falls (Jamuna Prapat)",
      "Jata Shankar cave temple",
      "Pandav Caves",
      "Handi Khoh deep canyon"
    ],
    travelTips: [
      "Pachmarhi requires local registered Gypsy vehicles for internal forest zone entry, but our taxi provides hassle-free transport right up to your resort.",
      "Check hotel reservations in advance during holidays and long weekends."
    ],
    popularPickupPoints: [
      "Jabalpur Railway Junction",
      "Madan Mahal Station",
      "Vijay Nagar",
      "Civil Lines"
    ],
    faqs: [
      {
        q: "Is the road between Jabalpur and Pachmarhi in good condition?",
        a: "Yes, the route via NH-45 and Pipariya is largely smooth highway with a gentle ghat incline leading up to Pachmarhi."
      }
    ]
  },
  {
    slug: "jabalpur-to-katni",
    destination: "Katni",
    distanceKm: 90,
    estimatedTime: "1.5 - 2 hours",
    highway: "NH-30 4-Lane Express Highway",
    tagline: "Industrial Corridor & Major Railway Junction Connectivity",
    description: "Katni is an essential commercial and mineral mining hub in MP, as well as a prominent railway junction. Our daily one-way and same-day return cabs offer corporate executives and traders the most punctual, dependable transit on NH-30.",
    fares: {
      sedan: { oneWay: 1800, roundTrip: 3000 },
      suv: { oneWay: 2600, roundTrip: 4200 },
      premiumSuv: { oneWay: 3600, roundTrip: 5500 },
    },
    keyAttractions: [
      "Katni Junction & Murwara terminals",
      "Lime & Marble industrial complexes",
      "Roopnath Dham temple & Ashokan rock edict",
      "Vijayraghavgarh Fort"
    ],
    travelTips: [
      "The 4-lane highway ensures rapid commute under 2 hours.",
      "Ideal for business meetings, factory inspections, or catching trains from Katni Murwara."
    ],
    popularPickupPoints: [
      "Adhartal Transport Nagar",
      "Civil Lines Jabalpur",
      "Wright Town",
      "Jabalpur Railway Station"
    ],
    faqs: [
      {
        q: "Can I get a same-day return taxi to Katni for business meetings?",
        a: "Yes, our round-trip same-day corporate package includes door-to-door pickup, city transit in Katni, and prompt return back to Jabalpur."
      }
    ]
  },
  {
    slug: "jabalpur-to-mandla",
    destination: "Mandla",
    distanceKm: 95,
    estimatedTime: "2 - 2.5 hours",
    highway: "NH-30 Corridor",
    tagline: "Narmada River Loop, Ramnagar Fort & Gateway to Tribal Heritage",
    description: "Located picturesquely inside a winding loop of the sacred Narmada River, Mandla is rich in Gond tribal history, sacred ghats, and proximity to Kanha National Park. Enjoy an effortless, scenic drive with Har Har Taxi Services.",
    fares: {
      sedan: { oneWay: 1900, roundTrip: 3200 },
      suv: { oneWay: 2800, roundTrip: 4400 },
      premiumSuv: { oneWay: 3800, roundTrip: 5800 },
    },
    keyAttractions: [
      "Ramnagar Fort (Moti Mahal of Gond Kings)",
      "Sahastradhara Narmada rock formations",
      "Garam Pani (Natural Sulphur Spring)",
      "Rangrez Ghat and local markets"
    ],
    travelTips: [
      "Visit Sahastradhara where the river divides into a thousand streams over igneous rocks.",
      "Road is scenic with lush countryside greenery along NH-30."
    ],
    popularPickupPoints: [
      "Tilhari Mandla Road exit",
      "Gorakhpur Jabalpur",
      "Jabalpur Junction",
      "Civil Lines"
    ],
    faqs: [
      {
        q: "How can I book a one-way drop taxi from Jabalpur to Mandla?",
        a: "Simply use our online booking form or send a WhatsApp message with your pickup address and travel time for instant driver allotment."
      }
    ]
  },
  {
    slug: "jabalpur-to-nagpur",
    destination: "Nagpur",
    distanceKm: 275,
    estimatedTime: "5 - 6 hours",
    highway: "NH-44 & NH-347 Corridor via Seoni & Pench",
    tagline: "Connecting Jabalpur to the Orange City, Medical Centers & Dr. Babasaheb Ambedkar Airport",
    description: "Nagpur is Central India's economic powerhouse, premier healthcare destination (AIIMS, Care, Wockhardt), and international airport hub. Our comfortable highway cabs provide regular one-way drops and family transfers across the scenic Pench forest corridor on NH-44.",
    fares: {
      sedan: { oneWay: 4800, roundTrip: 8500 },
      suv: { oneWay: 6800, roundTrip: 11800 },
      premiumSuv: { oneWay: 8900, roundTrip: 15200 },
    },
    keyAttractions: [
      "Dr. Babasaheb Ambedkar International Airport (NAG)",
      "AIIMS Nagpur & MIHAN SEZ",
      "Deekshabhoomi Monument",
      "Futala Lake & Zero Mile Stone",
      "Pench forest corridor highway drive"
    ],
    travelTips: [
      "The highway crosses the elevated wildlife corridor near Pench National Park—keep your eyes open for wildlife sightings.",
      "Plan early departures if catching flights or morning medical appointments in Nagpur."
    ],
    popularPickupPoints: [
      "Jabalpur Railway Station",
      "Medical College & Civil Lines",
      "Wright Town",
      "Vijay Nagar",
      "Dumna Airport"
    ],
    faqs: [
      {
        q: "Can I book a medical emergency transfer from Jabalpur to AIIMS Nagpur?",
        a: "Yes, we prioritize urgent outstation rides with experienced, gentle drivers and sanitized air-conditioned vehicles."
      }
    ]
  },
  {
    slug: "jabalpur-to-bhopal",
    destination: "Bhopal",
    distanceKm: 310,
    estimatedTime: "6 - 7 hours",
    highway: "NH-45 Corridor via Narsinghpur, Pipariya & Hoshangabad",
    tagline: "State Capital Connection: VIP Travel, Government Secretariat & Upper Lake",
    description: "Connect between Jabalpur and Bhopal, the administrative capital of Madhya Pradesh. Ideal for government officials, business travelers, and families visiting Raja Bhoj Airport or premier educational institutes like AIIMS and IISER Bhopal.",
    fares: {
      sedan: { oneWay: 5200, roundTrip: 9200 },
      suv: { oneWay: 7200, roundTrip: 12500 },
      premiumSuv: { oneWay: 9500, roundTrip: 16500 },
    },
    keyAttractions: [
      "Upper Lake (Bhojtal) & Boat Club",
      "Van Vihar National Park",
      "Bharat Bhavan & Tribal Museum",
      "Bhimbetka Rock Shelters (UNESCO site near highway)",
      "Raja Bhoj International Airport"
    ],
    travelTips: [
      "Consider a short detour at Bhimbetka Rock Shelters to witness prehistoric cave art dating back 100,000 years.",
      "NH-45 provides multiple clean family food stops and dhabas."
    ],
    popularPickupPoints: [
      "High Court of MP & Civil Lines",
      "Wright Town & Napier Town",
      "Vijay Nagar & MR-4",
      "Jabalpur Junction Gate 1"
    ],
    faqs: [
      {
        q: "Is toll tax included in the Jabalpur to Bhopal taxi fare?",
        a: "We offer transparent billing with state toll charges clearly detailed in your quote before journey confirmation."
      }
    ]
  },
  {
    slug: "jabalpur-to-indore",
    destination: "Indore",
    distanceKm: 500,
    estimatedTime: "9 - 10 hours",
    highway: "NH-45 & Indore-Bhopal Express Highway",
    tagline: "Commercial Capital of MP: 56 Dukan, Sarafa Bazaar, Ujjain & Mahakal Transfers",
    description: "Travel in complete relaxation from Jabalpur to Indore, India's cleanest city and commercial powerhouse. Perfect for corporate travel, wedding parties, and pilgrims continuing onwards to Mahakaleshwar Jyotirlinga in Ujjain.",
    fares: {
      sedan: { oneWay: 8200, roundTrip: 14500 },
      suv: { oneWay: 11500, roundTrip: 19500 },
      premiumSuv: { oneWay: 15500, roundTrip: 25000 },
    },
    keyAttractions: [
      "Sarafa Bazaar Night Food Market & 56 Dukan",
      "Rajwada Palace & Lal Bagh Palace",
      "Chhappan Dukaan gourmet hub",
      "Onward connection to Ujjain Mahakal (55 km from Indore)",
      "Devi Ahilya Bai Holkar International Airport"
    ],
    travelTips: [
      "For a 500 km intercity route, Innova Crysta or Ertiga offers the utmost comfort with luggage capacity and reclining seats.",
      "We can arrange overnight or morning departures according to your convenience."
    ],
    popularPickupPoints: [
      "Civil Lines & High Court Area",
      "Vijay Nagar",
      "Jabalpur Junction",
      "Wright Town"
    ],
    faqs: [
      {
        q: "Can we extend our Indore taxi trip to include Ujjain Mahakal Darshan?",
        a: "Yes! Simply let our team know when booking on WhatsApp. We offer tailored multi-day MP tour itineraries."
      }
    ]
  }
];

export const CORE_SERVICES = [
  {
    slug: "local-taxi-jabalpur",
    title: "Local Taxi Service in Jabalpur",
    shortTitle: "Local Taxi",
    shortDesc: "Convenient taxi service for travelling within Jabalpur city, business commutes, shopping, and family functions.",
    fullDesc: "Need a comfortable ride across Jabalpur? Whether you're heading to Wright Town for business, visiting relatives in Napier Town, or commuting between Civil Lines and Vijay Nagar, Har Har Taxi Services offers punctual, AC local taxis at honest per-kilometer and hourly rental packages.",
    icon: "Navigation",
    features: [
      "Point-to-point city drops across all Jabalpur sectors",
      "Flexible half-day (4 hr / 40 km) and full-day (8 hr / 80 km) rental packages",
      "Clean, air-conditioned cabs with polite local drivers",
      "Transparent billing with zero surprise surge multipliers"
    ]
  },
  {
    slug: "outstation-taxi-jabalpur",
    title: "Outstation Taxi Service in Jabalpur",
    shortTitle: "Outstation Taxi",
    shortDesc: "Comfortable intercity taxis for round-trips, weekend getaways, and long-distance travel across Madhya Pradesh.",
    fullDesc: "Planning a trip outside Jabalpur? We provide reliable outstation cabs to Kanha, Bandhavgarh, Pachmarhi, Khajuraho, Bhopal, Indore, and Nagpur. Travel with seasoned highway drivers who understand road conditions and ensure safety for your loved ones.",
    icon: "MapPin",
    features: [
      "Dedicated one-way drops and relaxed round-trip vacation packages",
      "Highway-certified drivers trained for safe driving",
      "All MP state permit guidelines and insurance fully verified",
      "Well-maintained fleet equipped with luggage carriers"
    ]
  },
  {
    slug: "airport-taxi-jabalpur",
    title: "Airport Taxi Service in Jabalpur",
    shortTitle: "Airport Taxi",
    shortDesc: "Pre-booked Dumna Airport (JLR) pickup and drop service with flight tracking and guaranteed on-time arrival.",
    fullDesc: "Never miss a flight at Dumna Airport (JLR) with Har Har Taxi Services. We monitor flight landing and departure schedules so our cab is waiting at your doorstep or terminal arrival gate right on schedule.",
    icon: "Plane",
    features: [
      "Doorstep pickup anywhere in Jabalpur to Dumna Airport",
      "Terminal arrival meet-and-greet with luggage assistance",
      "Early morning and late-night flight airport transfers",
      "Direct transfers from Dumna Airport to Kanha & Bandhavgarh resorts"
    ]
  },
  {
    slug: "railway-station-taxi-jabalpur",
    title: "Railway Station Taxi in Jabalpur",
    shortTitle: "Railway Station Taxi",
    shortDesc: "Reliable 24x7 pickup and drop service from Jabalpur Junction (JBP) and Madan Mahal Railway Station (MML).",
    fullDesc: "Arriving by train? Avoid dealing with chaotic station auto queues. Our driver will be parked near Station Gate 1 or Gate 2 ready to take you directly to your hotel, residence, or onward outstation journey.",
    icon: "Train",
    features: [
      "Pickup from Jabalpur Main (JBP) & Madan Mahal (MML) stations",
      "Driver coordination right when your train reaches the platform",
      "Spacious boot for heavy suitcases and family luggage",
      "Flat, upfront station transfer rates"
    ]
  },
  {
    slug: "one-way-taxi-jabalpur",
    title: "One Way Taxi Service from Jabalpur",
    shortTitle: "One Way Taxi",
    shortDesc: "Affordable one-way taxi booking to Bhopal, Indore, Katni, Mandla, Nagpur, and other cities without return fare.",
    fullDesc: "Why pay round-trip charges when you only need a drop? Our dedicated one-way taxi network lets you book drop-only cabs from Jabalpur to major cities at highly competitive, transparent rates.",
    icon: "ArrowRightCircle",
    features: [
      "Pay only for the distance travelled—no return fare penalty",
      "Door-to-door pickup from your Jabalpur home or hotel",
      "Available across all major MP and Maharashtra corridors",
      "Includes toll transparency and verified highway drivers"
    ]
  },
  {
    slug: "round-trip-taxi-jabalpur",
    title: "Round Trip Taxi Service in Jabalpur",
    shortTitle: "Round Trip Taxi",
    shortDesc: "Comfortable return-trip taxi service for family vacations, business visits, and holy pilgrimage tours.",
    fullDesc: "Enjoy the total freedom of having your dedicated private car and driver throughout your entire journey. Perfect for multi-day wildlife safaris at Kanha or heritage temple explorations in Khajuraho and Pachmarhi.",
    icon: "Repeat",
    features: [
      "Car and chauffeur stay exclusively with your group for the trip",
      "Flexible itinerary with impromptu photo & refreshment stops",
      "Transparent night-allowance and daily per-km guidelines",
      "Sedan, 6-seater SUV, and 7-seater Innova Crysta choices"
    ]
  }
];

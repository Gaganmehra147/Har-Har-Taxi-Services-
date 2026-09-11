import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import FleetSection from "@/components/sections/FleetSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { ROUTES_DATA } from "@/data/routes";
import { BUSINESS_CONFIG, buildWhatsAppLink } from "@/data/business";
import { 
  MapPin, 
  Clock, 
  Compass, 
  Check, 
  Phone, 
  MessageSquare, 
  Car, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface RoutePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ROUTES_DATA.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const route = ROUTES_DATA.find((r) => r.slug === params.slug);
  if (!route) return { title: "Route Not Found" };

  const customTitles: Record<string, string> = {
    "jabalpur-to-bhedaghat": "Jabalpur to Bhedaghat Taxi | Fare & Booking",
    "jabalpur-to-kanha": "Jabalpur to Kanha Taxi | Cab Booking",
    "jabalpur-to-bandhavgarh": "Jabalpur to Bandhavgarh Taxi | Book a Cab",
    "jabalpur-to-khajuraho": "Jabalpur to Khajuraho Taxi | Cab Booking",
    "jabalpur-to-pachmarhi": "Jabalpur to Pachmarhi Taxi | Book a Cab",
    "jabalpur-to-katni": "Jabalpur to Katni Taxi | Taxi Booking",
    "jabalpur-to-mandla": "Jabalpur to Mandla Taxi | Cab Booking",
    "jabalpur-to-nagpur": "Jabalpur to Nagpur Taxi | One Way & Round Trip",
    "jabalpur-to-bhopal": "Jabalpur to Bhopal Taxi | Cab Booking",
    "jabalpur-to-indore": "Jabalpur to Indore Taxi | Book a Cab",
  };

  const title = customTitles[route.slug] || `Jabalpur to ${route.destination} Taxi | Har Har Taxi Services`;

  return {
    title,
    description: `Book Jabalpur to ${route.destination} taxi. Distance ${route.distanceKm} km, approx ${route.estimatedTime}. Clean AC Sedan, Ertiga & Innova cabs with verified highway drivers.`,
    alternates: {
      canonical: `${BUSINESS_CONFIG.siteUrl}/routes/${route.slug}/`,
    },
    openGraph: {
      title,
      description: route.tagline,
      url: `${BUSINESS_CONFIG.siteUrl}/routes/${route.slug}/`,
    },
  };
}

export default function RouteDetailPage({ params }: RoutePageProps) {
  const route = ROUTES_DATA.find((r) => r.slug === params.slug);
  if (!route) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Popular Routes", item: "/routes/" },
    { name: `Jabalpur to ${route.destination}`, item: `/routes/${route.slug}/` },
  ];

  const whatsappUrl = buildWhatsAppLink({
    pickup: "Jabalpur",
    destination: route.destination,
    tripType: "One-Way / Round-Trip",
  });

  return (
    <>
      <JsonLd
        breadcrumbs={breadcrumbs}
        faqs={route.faqs}
        pageType="Route"
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/routes/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Routes</Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">Jabalpur to {route.destination}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                <Compass className="w-3.5 h-3.5" />
                <span>Highway Route Guide &bull; {route.highway}</span>
              </div>

              {/* Exact H1 requested in blueprint */}
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
                Jabalpur to {route.destination} Taxi
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {route.description}
              </p>

              {/* Distance & Estimated Travel Time Badge Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Distance</span>
                  </div>
                  <div className="text-lg font-bold text-zinc-950 dark:text-white font-display mt-0.5">
                    {route.distanceKm} km approx.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Travel Time</span>
                  </div>
                  <div className="text-lg font-bold text-zinc-950 dark:text-white font-display mt-0.5">
                    {route.estimatedTime}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                    <Car className="w-3.5 h-3.5" />
                    <span>Starting Fare</span>
                  </div>
                  <div className="text-lg font-bold text-zinc-950 dark:text-white font-display mt-0.5">
                    ₹{route.fares.sedan.oneWay} onwards
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-saffron px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-glow-saffron"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-outline-saffron px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right column: Interactive pre-filled Booking Card */}
            <div className="lg:col-span-5">
              <BookingCard
                initialPickup="Jabalpur"
                initialDestination={route.destination}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED ROUTE SECTIONS */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section: Distance & Estimated Travel Time Details */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display mb-4">
              Distance &amp; Estimated Travel Time: Jabalpur to {route.destination}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              The driving distance from Jabalpur to {route.destination} is approximately <strong className="text-zinc-950 dark:text-white">{route.distanceKm} km</strong> via {route.highway}. Under standard driving conditions, the journey takes about <strong className="text-zinc-950 dark:text-white">{route.estimatedTime}</strong>. Our drivers know the best highway corridors to avoid construction bottlenecks, heavy village traffic, and rough bypass detours.
            </p>
          </div>

          {/* Section: One-Way Taxi & Round-Trip Taxi Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* One-Way Taxi Box */}
            <div className="glass-panel p-7 rounded-2xl">
              <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 mb-3">
                Drop Only
              </div>
              <h2 className="text-xl font-bold text-zinc-950 dark:text-white font-display mb-3">
                One-Way Taxi from Jabalpur to {route.destination}
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                If you are catching a flight, checking into a resort, or visiting family without an immediate return plan, book our one-way drop taxi. You pay only for the single journey without return charges.
              </p>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                  <span>Door-to-door pickup anywhere in Jabalpur</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                  <span>Direct drop at your destination hotel or address</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                  <span>No return fare penalty</span>
                </li>
              </ul>
            </div>

            {/* Round-Trip Taxi Box */}
            <div className="glass-panel p-7 rounded-2xl">
              <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3">
                Full Vacation Freedom
              </div>
              <h2 className="text-xl font-bold text-zinc-950 dark:text-white font-display mb-3">
                Round-Trip Taxi to {route.destination}
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                Planning a same-day excursion or a multi-day holiday? Keep the vehicle and chauffeur dedicated exclusively to your group for local sightseeing, safari gate transfers, and relaxed return travel.
              </p>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chauffeur remains with you for local sightseeing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Flexible departure times according to your wishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Hassle-free return back to your Jabalpur residence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section: Available Vehicles & Estimated Fare Comparison Table */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display">
                Available Vehicles &amp; Estimated Fare
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-1">
                Transparent starting estimates for Jabalpur to {route.destination}. Final quotes depend on exact pickup location, waiting days, and toll plaza costs.
              </p>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    <tr>
                      <th className="py-3.5 px-5">Vehicle Category</th>
                      <th className="py-3.5 px-5">Model Examples</th>
                      <th className="py-3.5 px-5">Capacity</th>
                      <th className="py-3.5 px-5">One-Way Fare</th>
                      <th className="py-3.5 px-5">Round-Trip Fare</th>
                      <th className="py-3.5 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 text-zinc-600 dark:text-zinc-300">
                    {/* Sedan */}
                    <tr className="hover:bg-zinc-100/60 dark:bg-zinc-900/40 transition-colors">
                      <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white flex items-center gap-2">
                        <Car className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                        <span>Sedan</span>
                      </td>
                      <td className="py-4 px-5 text-xs text-zinc-500 dark:text-zinc-400">Swift Dzire / Etios</td>
                      <td className="py-4 px-5 text-xs">4 Pax + 2 Bags</td>
                      <td className="py-4 px-5 font-bold text-zinc-700 dark:text-zinc-300">₹{route.fares.sedan.oneWay.toLocaleString("en-IN")}*</td>
                      <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white">₹{route.fares.sedan.roundTrip.toLocaleString("en-IN")}*</td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href={buildWhatsAppLink({
                            pickup: "Jabalpur",
                            destination: route.destination,
                            vehicleType: "Sedan (Dzire)",
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg btn-saffron text-xs font-semibold inline-block"
                        >
                          Book Sedan
                        </a>
                      </td>
                    </tr>

                    {/* SUV */}
                    <tr className="hover:bg-zinc-100/60 dark:bg-zinc-900/40 transition-colors">
                      <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white flex items-center gap-2">
                        <Car className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                        <span>SUV</span>
                      </td>
                      <td className="py-4 px-5 text-xs text-zinc-500 dark:text-zinc-400">Maruti Ertiga</td>
                      <td className="py-4 px-5 text-xs">6 Pax + 4 Bags</td>
                      <td className="py-4 px-5 font-bold text-zinc-700 dark:text-zinc-300">₹{route.fares.suv.oneWay.toLocaleString("en-IN")}*</td>
                      <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white">₹{route.fares.suv.roundTrip.toLocaleString("en-IN")}*</td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href={buildWhatsAppLink({
                            pickup: "Jabalpur",
                            destination: route.destination,
                            vehicleType: "SUV (Ertiga)",
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg btn-saffron text-xs font-semibold inline-block"
                        >
                          Book SUV
                        </a>
                      </td>
                    </tr>

                    {/* Premium SUV */}
                    <tr className="hover:bg-zinc-100/60 dark:bg-zinc-900/40 transition-colors">
                      <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white flex items-center gap-2">
                        <Car className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                        <span>Premium SUV</span>
                      </td>
                      <td className="py-4 px-5 text-xs text-zinc-500 dark:text-zinc-400">Toyota Innova / Crysta</td>
                      <td className="py-4 px-5 text-xs">7 Pax + 5 Bags</td>
                      <td className="py-4 px-5 font-bold text-zinc-700 dark:text-zinc-300">₹{route.fares.premiumSuv.oneWay.toLocaleString("en-IN")}*</td>
                      <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white">₹{route.fares.premiumSuv.roundTrip.toLocaleString("en-IN")}*</td>
                      <td className="py-4 px-5 text-right">
                        <a
                          href={buildWhatsAppLink({
                            pickup: "Jabalpur",
                            destination: route.destination,
                            vehicleType: "Premium SUV (Innova Crysta)",
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg btn-saffron text-xs font-semibold inline-block"
                        >
                          Book Innova
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-2">
              *Toll taxes, state permits, and parking charges are either included or billed transparently per your preference.
            </p>
          </div>

          {/* Section: Popular Pickup Locations in Jabalpur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display mb-4">
              Popular Pickup Locations in Jabalpur
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-5">
              We provide convenient doorstep departures from all major transit hubs and neighborhoods in Jabalpur:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {route.popularPickupPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-200 flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0" />
                  <span className="truncate">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Travel Information & Key Attractions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-3">
                Key Attractions in {route.destination}
              </h3>
              <ul className="space-y-2">
                {route.keyAttractions.map((att, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                    <span>{att}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-3">
                Helpful Travel Tips
              </h3>
              <ul className="space-y-2">
                {route.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Why Book With Har Har Taxi Services */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display mb-6">
              Why Book With Har Har Taxi Services for {route.destination}?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl">
                <ShieldCheck className="w-7 h-7 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white mb-2">Highway Verified Chauffeurs</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Our drivers are intimately familiar with the {route.highway}, ensuring smooth, relaxed overtaking and maximum safety.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl">
                <Clock className="w-7 h-7 text-emerald-400 mb-3" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white mb-2">Punctual Doorstep Pickup</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  We guarantee on-time arrivals at Dumna Airport, Jabalpur Junction, or your hotel so you stay right on schedule.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl">
                <Car className="w-7 h-7 text-amber-400 mb-3" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white mb-2">Clean, Chilled AC Cab</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Vehicles are vacuumed, washed, and sanitised before every trip with 100% working air conditioning.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQS SPECIFIC TO THIS ROUTE */}
      <FaqAccordion
        faqs={route.faqs}
        title={`Jabalpur to ${route.destination} Taxi FAQs`}
        subtitle={`Everything you need to know about booking, travel time, and rates for ${route.destination}.`}
      />

      {/* FINAL WHATSAPP BOOKING CTA */}
      <FinalCta />
    </>
  );
}

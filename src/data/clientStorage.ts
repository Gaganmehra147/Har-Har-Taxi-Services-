import { Booking, CarItem, BookingStatus } from "./db/types";

export const DEFAULT_CARS: CarItem[] = [
  {
    id: "sedan",
    name: "Sedan (Swift Dzire)",
    modelExamples: "Swift Dzire / Toyota Etios / equivalent",
    category: "sedan",
    badge: "★ POPULAR: WHITE SWIFT DZIRE",
    ratePerKm: 11,
    normalBookingFare: 1800,
    normalBookingTerms: "Full Day Local (8 hrs / 80 km)",
    capacityPassengers: 4,
    capacityLuggage: 2,
    hasAC: true,
    image: "/images/white-swift-taxi.jpg",
    description: "Premium white commercial sedan ideal for solo travellers, couples, small families, and airport transfers. Fuel-efficient, clean cabin with dual AC.",
    features: ["Dual Air Conditioning", "Ergonomic Legroom", "Boot Space (2 Bags)", "Clean Sanitized Cabin", "Phone Charging"],
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    id: "suv",
    name: "SUV (Maruti Ertiga)",
    modelExamples: "Maruti Ertiga / Mahindra Marazzo",
    category: "suv",
    badge: "Best Value for Families",
    ratePerKm: 15,
    normalBookingFare: 2600,
    normalBookingTerms: "Full Day Local (8 hrs / 80 km)",
    capacityPassengers: 6,
    capacityLuggage: 4,
    hasAC: true,
    image: "/images/ertiga-taxi.jpg",
    description: "Spacious 6-seater MPV/SUV with triple-row AC and reclining seats. Perfect for family outstation trips, tiger safaris, and airport luggage.",
    features: ["Triple-row Roof AC Vents", "Reclining Comfortable Seats", "Carrier / Roof Rack Option", "Smooth Highway Ride", "First Aid Kit"],
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    id: "premium-suv",
    name: "Premium SUV (Innova Crysta)",
    modelExamples: "Toyota Innova / Innova Crysta",
    category: "premium-suv",
    badge: "Ultimate Highway Luxury",
    ratePerKm: 19,
    normalBookingFare: 3600,
    normalBookingTerms: "Full Day Local (8 hrs / 80 km)",
    capacityPassengers: 7,
    capacityLuggage: 5,
    hasAC: true,
    image: "/images/innova-crysta-taxi.jpg",
    description: "The gold standard of luxury highway travel in India. Captain seat comfort, whisper-quiet cabin, top suspension for Bandhavgarh and Kanha safaris.",
    features: ["Captain Seat Luxury", "Whisper-quiet Highway Drive", "Superior Suspension", "Spacious Boot & Legroom", "Senior Chauffeur"],
    active: true,
    createdAt: new Date().toISOString()
  }
];

export const DEFAULT_BOOKINGS: Booking[] = [
  {
    id: "BK-882101",
    customerName: "Rajesh Sharma",
    customerPhone: "+91 98261 44521",
    pickup: "Wright Town, Jabalpur",
    destination: "Kanha National Park",
    date: "2026-09-12",
    time: "07:30",
    passengers: "4",
    tripType: "round-trip",
    vehicleId: "suv",
    vehicleName: "SUV (Maruti Ertiga)",
    estimatedFare: 4400,
    pricingModel: "per-km",
    status: "confirmed",
    notes: "Safari transfer to Khatia Gate resort. Needs carrier for luggage.",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: "BK-882102",
    customerName: "Pooja Verma",
    customerPhone: "+91 94251 33219",
    pickup: "Dumna Airport (JLR)",
    destination: "Civil Lines, Jabalpur",
    date: "2026-09-11",
    time: "14:15",
    passengers: "2",
    tripType: "one-way",
    vehicleId: "sedan",
    vehicleName: "Sedan (Swift Dzire)",
    estimatedFare: 800,
    pricingModel: "per-km",
    status: "pending",
    notes: "Flight arrival pickup, driver should carry name placard.",
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  }
];

const BOOKINGS_KEY = "harhar_bookings_db";
const CARS_KEY = "harhar_cars_db";

export function getClientBookings(): Booking[] {
  if (typeof window === "undefined") return DEFAULT_BOOKINGS;
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    if (!raw) {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(DEFAULT_BOOKINGS));
      return DEFAULT_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch (err) {
    return DEFAULT_BOOKINGS;
  }
}

export function addClientBooking(data: Omit<Booking, "id" | "createdAt" | "status"> & Partial<Pick<Booking, "status">>): Booking {
  const current = getClientBookings();
  const newBooking: Booking = {
    ...data,
    id: `BK-${Math.floor(100000 + Math.random() * 900000)}`,
    status: data.status || "pending",
    createdAt: new Date().toISOString()
  };
  const updated = [newBooking, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("harhar_bookings_updated"));
  }
  return newBooking;
}

export function updateClientBookingStatus(id: string, status: BookingStatus): Booking[] {
  const current = getClientBookings();
  const updated = current.map(b => b.id === id ? { ...b, status } : b);
  if (typeof window !== "undefined") {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("harhar_bookings_updated"));
  }
  return updated;
}

export function deleteClientBooking(id: string): Booking[] {
  const current = getClientBookings();
  const updated = current.filter(b => b.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("harhar_bookings_updated"));
  }
  return updated;
}

export function getClientCars(): CarItem[] {
  if (typeof window === "undefined") return DEFAULT_CARS;
  try {
    const raw = localStorage.getItem(CARS_KEY);
    if (!raw) {
      localStorage.setItem(CARS_KEY, JSON.stringify(DEFAULT_CARS));
      return DEFAULT_CARS;
    }
    return JSON.parse(raw);
  } catch (err) {
    return DEFAULT_CARS;
  }
}

export function addClientCar(carData: Omit<CarItem, "id" | "createdAt">): CarItem {
  const current = getClientCars();
  const slug = carData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const id = `${slug}-${Date.now().toString().slice(-4)}`;
  const newCar: CarItem = {
    ...carData,
    id,
    createdAt: new Date().toISOString()
  };
  const updated = [newCar, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(CARS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("harhar_cars_updated"));
  }
  return newCar;
}

export function toggleClientCarActive(id: string): CarItem[] {
  const current = getClientCars();
  const updated = current.map(c => c.id === id ? { ...c, active: !c.active } : c);
  if (typeof window !== "undefined") {
    localStorage.setItem(CARS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("harhar_cars_updated"));
  }
  return updated;
}

export function deleteClientCar(id: string): CarItem[] {
  const current = getClientCars();
  const updated = current.filter(c => c.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(CARS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("harhar_cars_updated"));
  }
  return updated;
}

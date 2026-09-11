import fs from "fs/promises";
import path from "path";
import { Booking, CarItem } from "./types";

const DB_DIR = path.join(process.cwd(), "src", "data", "db");
const BOOKINGS_FILE = path.join(DB_DIR, "bookings.json");
const CARS_FILE = path.join(DB_DIR, "cars.json");

const INITIAL_CARS: CarItem[] = [
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

const INITIAL_BOOKINGS: Booking[] = [
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

async function ensureDir() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
  } catch (err) {
    // ignore
  }
}

export async function getBookings(): Promise<Booking[]> {
  await ensureDir();
  try {
    const data = await fs.readFile(BOOKINGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // If not exists, write initial
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify(INITIAL_BOOKINGS, null, 2), "utf-8");
    return INITIAL_BOOKINGS;
  }
}

export async function saveBookings(bookings: Booking[]): Promise<void> {
  await ensureDir();
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");
}

export async function addBooking(bookingData: Omit<Booking, "id" | "createdAt" | "status"> & Partial<Pick<Booking, "status">>): Promise<Booking> {
  const bookings = await getBookings();
  const newBooking: Booking = {
    ...bookingData,
    id: `BK-${Math.floor(100000 + Math.random() * 900000)}`,
    status: bookingData.status || "pending",
    createdAt: new Date().toISOString()
  };
  bookings.unshift(newBooking);
  await saveBookings(bookings);
  return newBooking;
}

export async function updateBookingStatus(id: string, status: Booking["status"], notes?: string): Promise<Booking | null> {
  const bookings = await getBookings();
  const index = bookings.findIndex(b => b.id === id);
  if (index === -1) return null;
  bookings[index].status = status;
  if (notes !== undefined) {
    bookings[index].notes = notes;
  }
  await saveBookings(bookings);
  return bookings[index];
}

export async function deleteBooking(id: string): Promise<boolean> {
  const bookings = await getBookings();
  const filtered = bookings.filter(b => b.id !== id);
  if (filtered.length === bookings.length) return false;
  await saveBookings(filtered);
  return true;
}

export async function getCars(): Promise<CarItem[]> {
  await ensureDir();
  try {
    const data = await fs.readFile(CARS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    await fs.writeFile(CARS_FILE, JSON.stringify(INITIAL_CARS, null, 2), "utf-8");
    return INITIAL_CARS;
  }
}

export async function saveCars(cars: CarItem[]): Promise<void> {
  await ensureDir();
  await fs.writeFile(CARS_FILE, JSON.stringify(cars, null, 2), "utf-8");
}

export async function addCar(carData: Omit<CarItem, "id" | "createdAt">): Promise<CarItem> {
  const cars = await getCars();
  const slug = carData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const id = `${slug}-${Date.now().toString().slice(-4)}`;
  const newCar: CarItem = {
    ...carData,
    id,
    createdAt: new Date().toISOString()
  };
  cars.push(newCar);
  await saveCars(cars);
  return newCar;
}

export async function deleteCar(id: string): Promise<boolean> {
  const cars = await getCars();
  const filtered = cars.filter(c => c.id !== id);
  if (filtered.length === cars.length) return false;
  await saveCars(filtered);
  return true;
}

export async function toggleCarActive(id: string): Promise<CarItem | null> {
  const cars = await getCars();
  const index = cars.findIndex(c => c.id === id);
  if (index === -1) return null;
  cars[index].active = !cars[index].active;
  await saveCars(cars);
  return cars[index];
}

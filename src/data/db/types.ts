export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";
export type TripType = "one-way" | "round-trip";
export type PricingModel = "per-km" | "normal-rental";

export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  tripType: TripType;
  vehicleId: string;
  vehicleName: string;
  estimatedFare?: number | null;
  pricingModel: PricingModel;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
}

export interface CarItem {
  id: string;
  name: string;
  modelExamples: string;
  category: "sedan" | "suv" | "premium-suv" | "luxury" | "tempo";
  badge?: string;
  ratePerKm: number;
  normalBookingFare: number; // e.g., 8 hrs / 80 km or full day fixed package
  normalBookingTerms: string; // e.g. "8hr / 80km Full Day Rental"
  capacityPassengers: number;
  capacityLuggage: number;
  hasAC: boolean;
  image: string;
  description: string;
  features: string[];
  active: boolean;
  createdAt: string;
}

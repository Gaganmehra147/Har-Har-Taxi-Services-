export interface RouteInfo {
  slug: string;
  destination: string;
  distanceKm: number;
  estimatedTime: string;
  highway: string;
  tagline: string;
  description: string;
  fares: {
    sedan: { oneWay: number; roundTrip: number };
    suv: { oneWay: number; roundTrip: number };
    premiumSuv: { oneWay: number; roundTrip: number };
  };
  keyAttractions: string[];
  travelTips: string[];
  popularPickupPoints: string[];
  faqs: { q: string; a: string }[];
}

export interface VehicleCategory {
  id: string;
  name: string;
  modelExamples: string;
  badge?: string;
  capacityPassengers: number;
  capacityLuggage: number;
  hasAC: boolean;
  baseFarePerKm: number;
  suitableFor: string[];
  features: string[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
}

export interface LocalArea {
  name: string;
  pincode?: string;
  description: string;
  popularSpots: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  trip: string;
  comment: string;
}

export interface BookingFormData {
  pickup: string;
  destination: string;
  travelDate: string;
  travelTime: string;
  passengers: string;
  tripType: "one-way" | "round-trip" | "local-rental";
  vehicleType: "sedan" | "suv" | "premium-suv";
}

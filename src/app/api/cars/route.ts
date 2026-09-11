import { NextResponse } from "next/server";
import { getCars, addCar } from "@/data/db/storage";

export async function GET() {
  try {
    const cars = await getCars();
    return NextResponse.json({ success: true, cars });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch cars" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      modelExamples,
      category,
      badge,
      ratePerKm,
      normalBookingFare,
      normalBookingTerms,
      capacityPassengers,
      capacityLuggage,
      hasAC,
      image,
      description,
      features,
      active
    } = body;

    if (!name || !ratePerKm) {
      return NextResponse.json(
        { success: false, error: "Car name and rate per km are required" },
        { status: 400 }
      );
    }

    const newCar = await addCar({
      name: name.trim(),
      modelExamples: modelExamples ? modelExamples.trim() : name.trim(),
      category: category || "sedan",
      badge: badge ? badge.trim() : undefined,
      ratePerKm: Number(ratePerKm),
      normalBookingFare: Number(normalBookingFare) || Number(ratePerKm) * 150,
      normalBookingTerms: normalBookingTerms || "Full Day (8 hrs / 80 km)",
      capacityPassengers: Number(capacityPassengers) || 4,
      capacityLuggage: Number(capacityLuggage) || 2,
      hasAC: hasAC !== undefined ? Boolean(hasAC) : true,
      image: image || "/images/white-swift-taxi.jpg",
      description: description || `Reliable and comfortable ${name} taxi service in Jabalpur.`,
      features: Array.isArray(features) ? features : (features ? String(features).split(",").map(f => f.trim()) : ["Air Conditioning", "Clean Sanitized Cabin"]),
      active: active !== undefined ? Boolean(active) : true
    });

    return NextResponse.json({ success: true, car: newCar }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to add car" }, { status: 500 });
  }
}

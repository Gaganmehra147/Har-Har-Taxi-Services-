import { NextResponse } from "next/server";
import { getBookings, addBooking } from "@/data/db/storage";

export async function GET() {
  try {
    const bookings = await getBookings();
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch bookings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      customerName, 
      customerPhone, 
      pickup, 
      destination, 
      date, 
      time, 
      passengers, 
      tripType, 
      vehicleId, 
      vehicleName, 
      estimatedFare, 
      pricingModel,
      notes 
    } = body;

    if (!pickup || !destination || !customerPhone) {
      return NextResponse.json(
        { success: false, error: "Pickup, destination and phone number are required" },
        { status: 400 }
      );
    }

    const newBooking = await addBooking({
      customerName: customerName || "Customer",
      customerPhone: customerPhone.trim(),
      pickup: pickup.trim(),
      destination: destination.trim(),
      date: date || new Date().toISOString().split("T")[0],
      time: time || "08:00",
      passengers: passengers || "2",
      tripType: tripType || "one-way",
      vehicleId: vehicleId || "sedan",
      vehicleName: vehicleName || "Sedan (Swift Dzire)",
      estimatedFare: estimatedFare ? Number(estimatedFare) : null,
      pricingModel: pricingModel || "per-km",
      status: "pending",
      notes: notes || ""
    });

    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save booking" }, { status: 500 });
  }
}

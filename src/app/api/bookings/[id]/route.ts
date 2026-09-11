import { NextResponse } from "next/server";
import { updateBookingStatus, deleteBooking } from "@/data/db/storage";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status, notes } = body;

    const updated = await updateBookingStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, booking: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update booking" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const deleted = await deleteBooking(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Booking deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete booking" }, { status: 500 });
  }
}

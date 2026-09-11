import { NextResponse } from "next/server";
import { deleteCar, toggleCarActive } from "@/data/db/storage";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const updated = await toggleCarActive(id);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Car not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, car: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to toggle car" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const deleted = await deleteCar(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Car not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Car deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete car" }, { status: 500 });
  }
}

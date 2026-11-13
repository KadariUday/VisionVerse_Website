import { NextResponse } from "next/server";
import { servicesData } from "@/config/services";

export async function GET() {
  return NextResponse.json({ services: servicesData });
}

import { NextResponse } from "next/server";
import { projectsData } from "@/config/projects";

export async function GET() {
  return NextResponse.json({ projects: projectsData });
}

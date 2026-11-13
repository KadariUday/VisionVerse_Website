import { NextResponse } from "next/server";
import { getServiceRoleClient } from "@/lib/supabase/server";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || null;
  const client = getServiceRoleClient();

  if (!client) {
    return NextResponse.json({
      status: "degraded",
      database: {
        provider: "local-fallback",
        connected: false,
        message: "Supabase credentials not configured. Using local JSON store.",
      },
      timestamp: new Date().toISOString(),
    });
  }

  try {
    const { error } = await client.from("enquiries").select("id").limit(1);

    if (error) {
      return NextResponse.json({
        status: "schema_pending",
        database: {
          provider: "supabase",
          host: supabaseUrl,
          connected: true,
          tablesReady: false,
          error: error.message,
          action: "Execute 001_initial_schema.sql in Supabase SQL editor",
        },
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      status: "healthy",
      database: {
        provider: "supabase",
        host: supabaseUrl,
        connected: true,
        tablesReady: true,
        message: "Database is connected successfully!",
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "error",
        database: {
          provider: "supabase",
          connected: false,
          error: err.message,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

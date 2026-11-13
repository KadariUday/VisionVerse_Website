import { NextRequest, NextResponse } from "next/server";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { updateLocalEnquiryStatus } from "@/lib/supabase/mock-db";
import { EnquiryStatus } from "@/types";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authCookie = req.cookies.get("vv24_admin_token");
    const authHeader = req.headers.get("authorization");
    const validSecret = process.env.ADMIN_SECRET_KEY || "visionverse24-admin-dev-key";

    const isAuthorized =
      (authCookie && authCookie.value === validSecret) ||
      (authHeader && authHeader === `Bearer ${validSecret}`);

    if (!isAuthorized) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { status, notes } = body;

    const validStatuses: EnquiryStatus[] = ["new", "in-progress", "completed", "cancelled"];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const id = params.id;
    const supabase = getServiceRoleClient();

    if (supabase) {
      const updatePayload: any = {};
      if (status) updatePayload.status = status;
      if (notes !== undefined) updatePayload.notes = notes;

      const { data, error } = await supabase
        .from("enquiries")
        .update(updatePayload)
        .eq("id", id)
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, enquiry: data });
      }
    }

    // Local fallback update
    const updated = updateLocalEnquiryStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    console.error("Enquiry PATCH error:", error);
    return NextResponse.json({ error: "Failed to update enquiry" }, { status: 500 });
  }
}

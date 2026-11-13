import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { key, email } = body;

    const validSecret = process.env.ADMIN_SECRET_KEY || "visionverse24-admin-dev-key";
    const validEmail = process.env.ADMIN_EMAIL || "kadariudaycl@gmail.com";

    // Validate credentials
    if (!key || key !== validSecret) {
      return NextResponse.json({ error: "Invalid Admin Access Key" }, { status: 401 });
    }

    if (email && email.toLowerCase() !== validEmail.toLowerCase()) {
      return NextResponse.json({ error: "Invalid Admin Email" }, { status: 401 });
    }

    const res = NextResponse.json({
      success: true,
      message: "Admin authenticated successfully",
      admin: {
        email: validEmail,
        role: "SuperAdmin",
      },
    });

    // Set secure HTTP-only cookie
    res.cookies.set("vv24_admin_token", validSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (error) {
    console.error("Admin Auth POST error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get("vv24_admin_token");
  const validSecret = process.env.ADMIN_SECRET_KEY || "visionverse24-admin-dev-key";

  if (authCookie && authCookie.value === validSecret) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true, message: "Logged out" });
  res.cookies.set("vv24_admin_token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return res;
}

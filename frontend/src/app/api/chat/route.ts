import { NextRequest, NextResponse } from "next/server";

// This acts as a proxy between your Next.js frontend and Shashank's Python backend
// Avoids CORS issues when calling localhost:8000 from localhost:3000

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch("http://127.0.0.1:8000/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    // Backend not running
    if (error.code === "ECONNREFUSED" || error.cause?.code === "ECONNREFUSED") {
      return NextResponse.json(
        { error: "Backend server is not running. Please start final_server.py on port 8000." },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch("http://localhost:8000/health");
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ status: "Backend offline" }, { status: 503 });
  }
}
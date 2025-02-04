import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await axios.post("http://103.56.148.33:9011/login", body);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data || "Login failed" },
      { status: error.response?.status || 500 },
    );
  }
}

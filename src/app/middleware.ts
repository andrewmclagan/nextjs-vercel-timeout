import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    return NextResponse.next();
  } catch (error: unknown) {
    console.log("ERROR!!!!");
    console.error("ERROR!!!!");
    throw error;
  }
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("TEST");
  try {
    const resp = NextResponse.next();
    console.log(resp);
    return resp;
  } catch (error: unknown) {
    console.log("ERROR!!!!");
    console.error("ERROR!!!!");
    throw error;
  }
}

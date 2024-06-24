import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const adminToken = request.cookies.get("adminToken");
    if (!adminToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  } else if (pathname.startsWith("/applicant")) {
    const userToken = request.cookies.get("token");
    if (!userToken) {
      return NextResponse.redirect(new URL("/applicant/signin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/dashboard",
    "/admin/applicants",
    "/admin/mphil-applicants",
    '/admin/msc-applicants',
    '/admin/phd-applicants',
    "/applicant/dashboard",
  ],
};


import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  console.log(token); // Will log the value of cookie named
  if (!token) {
    // Token yoksa, kullanıcıyı login sayfasına yönlendir
    return NextResponse.rewrite(new URL("/auth/login", request.url));
  } else {
    // Redirect to login page if not authenticated
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/",
};

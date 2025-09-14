export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/strategy/:path*",
    "/maturity/:path*",
    "/quadrant/:path*",
    "/pmo/:path*",
    "/training/:path*",
    "/settings/:path*",
  ],
};
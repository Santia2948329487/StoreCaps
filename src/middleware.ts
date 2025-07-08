import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(() => {
  // No proteger ninguna ruta
  return;
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
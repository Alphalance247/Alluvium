import { NextResponse } from "next/server";

// Printed QR short links for the Compound Intelligence book (see
// readmenew.md "Printed links: do not break these"). Mirrors the redirects
// already live on the compound-intelligence.netlify.app fallback set
// (site/netlify.toml): /yt, /alluvium ("talk"), /partners.
// 302s on purpose - these are temporary so destinations can change without
// reprinting the 1,000 physical copies the codes are in.
const SHORT_LINKS = {
  "/yt": "https://www.youtube.com/@compound-intelligence-claude?sub_confirmation=1",
  "/talk": "https://alluvium.net/?utm_source=team26eu&utm_medium=book&utm_campaign=ci-book1",
  "/partners": "https://alluvium.net/?utm_source=team26eu&utm_medium=partner-onepager&utm_campaign=ci-book1",
};

export function middleware(request) {
  const destination = SHORT_LINKS[request.nextUrl.pathname];
  if (destination) {
    return NextResponse.redirect(destination, 302);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/yt", "/talk", "/partners"],
};

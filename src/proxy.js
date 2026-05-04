import { NextResponse } from 'next/server';

const sessionCookieNames = [
  'better-auth.session_token',
  '__Secure-better-auth.session_token',
  'better-auth.session_data',
  '__Secure-better-auth.session_data',
  'better-auth.account_data',
  '__Secure-better-auth.account_data',
];

export function proxy(request) {
  const url = request.nextUrl;

  if (!url.pathname.startsWith('/productDetails')) {
    return NextResponse.next();
  }

  const hasSession = sessionCookieNames.some((name) => !!request.cookies.get(name)?.value);

  if (hasSession) {
    return NextResponse.next();
  }

  const from = `${url.pathname}${url.search}`;
  return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, url));
}

export const config = {
  matcher: '/productDetails/:path*',
};
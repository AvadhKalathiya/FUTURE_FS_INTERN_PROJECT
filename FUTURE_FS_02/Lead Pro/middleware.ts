import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Only run middleware on root and dashboard routes
export const config = {
  matcher: ['/dashboard/:path*', '/'],
};

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    // Minimal middleware - just pass through
    return NextResponse.next();
  } catch (error) {
    console.error('[Middleware Error]:', error);
    // Return error response instead of throwing
    return NextResponse.json(
      { error: 'Middleware error' },
      { status: 500 }
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
};

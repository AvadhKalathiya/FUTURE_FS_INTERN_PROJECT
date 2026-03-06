import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export interface AuthPayload {
  userId: string;
  email: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// JWT token generation
export async function generateToken(payload: AuthPayload): Promise<string> {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
}

// JWT token verification
export async function verifyToken(token: string): Promise<AuthPayload | null> {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload & { iat?: number; exp?: number };
    // Exclude JWT metadata
    const { iat, exp, ...authPayload } = payload;
    if (authPayload.userId && authPayload.email) {
      return authPayload as AuthPayload;
    }
    return null;
  } catch (error) {
    console.error('[JWT Verification Error]:', error instanceof Error ? error.message : error);
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get('auth-token')?.value || null;
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
}

export async function getAuthUser() {
  const token = await getAuthToken();
  if (!token) return null;

  const payload = await verifyToken(token);
  return payload;
}

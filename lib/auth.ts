import { cookies } from 'next/headers';

export interface AuthPayload {
  userId: string;
  email: string;
}

// Simple token generation using base64 encoding
export async function generateToken(payload: AuthPayload): Promise<string> {
  const data = JSON.stringify({ ...payload, timestamp: Date.now() });
  return Buffer.from(data).toString('base64');
}

// Simple token verification
export async function verifyToken(token: string): Promise<AuthPayload | null> {
  try {
    const data = Buffer.from(token, 'base64').toString('utf-8');
    const payload = JSON.parse(data);
    // Basic validation
    if (payload.userId && payload.email) {
      return { userId: payload.userId, email: payload.email };
    }
    return null;
  } catch (error) {
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

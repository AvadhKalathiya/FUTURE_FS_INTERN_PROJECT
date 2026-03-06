import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { dbConnect, Lead } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userLeads = await Lead.find({ userId: payload.userId }).sort({ createdAt: -1 });

    return NextResponse.json({ leads: userLeads }, { status: 200 });
  } catch (error: any) {
    console.error('[v0] Get leads error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { name, email, phone, company, status, value, notes } = await request.json();

    // Validation
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Please provide name, email, phone, and company' },
        { status: 400 }
      );
    }

    const lead = await Lead.create({
      userId: payload.userId,
      name,
      email,
      phone,
      company,
      status: status || 'new',
      value: value || 0,
      notes: notes || '',
    });

    return NextResponse.json({ lead }, { status: 201 });
  } catch (error: any) {
    console.error('[v0] Create lead error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create lead' },
      { status: 500 }
    );
  }
}

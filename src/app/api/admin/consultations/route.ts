import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    // JWT 토큰 인증
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
      if (!decoded.role || decoded.role !== 'admin') {
        return new NextResponse('Unauthorized', { status: 401 });
      }
    } catch {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // 상담 데이터 조회
    const { data: consultations, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching consultations:', error);
      return NextResponse.json(
        { error: 'Failed to fetch consultations' },
        { status: 500 }
      );
    }

    return NextResponse.json(consultations);
  } catch (error) {
    console.error('Error in admin consultations API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
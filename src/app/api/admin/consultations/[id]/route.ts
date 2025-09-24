import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import jwt from 'jsonwebtoken';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // JWT 토큰 인증
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      if (!decoded.role || decoded.role !== 'admin') {
        return new NextResponse('Unauthorized', { status: 401 });
      }
    } catch (jwtError) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { status } = await request.json();
    const { id } = await params;
    const consultationId = id;

    // status 유효성 검사
    if (!['pending', 'completed'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be "pending" or "completed"' },
        { status: 400 }
      );
    }

    // 상담 상태 업데이트
    const { data, error } = await supabase
      .from('consultations')
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', consultationId)
      .select('*')
      .single();

    if (error) {
      console.error('Error updating consultation status:', error);
      return NextResponse.json(
        { error: 'Failed to update consultation status' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in admin consultation update API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
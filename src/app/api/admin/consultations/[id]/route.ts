import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Basic Auth 확인
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      });
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (username !== 'admin' || password !== adminPassword) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      });
    }

    const { status } = await request.json();
    const consultationId = params.id;

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
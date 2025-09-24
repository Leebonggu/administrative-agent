import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // JWT 토큰 인증
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
      if (!decoded.role || decoded.role !== 'admin') {
        return new NextResponse('Unauthorized', { status: 401 });
      }
    } catch {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Current password and new password are required' }, { status: 400 });
    }

    // 현재 관리자 정보 조회
    const { data: admin, error: adminError } = await supabase
      .from('admins')
      .select('*')
      .eq('id', decoded.userId)
      .single();

    if (adminError || !admin) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    // 현재 비밀번호 검증
    const isValidCurrentPassword = await bcrypt.compare(currentPassword, admin.password_hash);

    if (!isValidCurrentPassword) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
    }

    // 새 비밀번호 해시화
    const saltRounds = 12;
    const newPasswordHash = await bcrypt.hash(newPassword, saltRounds);

    // 비밀번호 업데이트
    const { error: updateError } = await supabase
      .from('admins')
      .update({
        password_hash: newPasswordHash,
        updated_at: new Date().toISOString()
      })
      .eq('id', decoded.userId);

    if (updateError) {
      console.error('Error updating password:', updateError);
      return NextResponse.json({ error: 'Failed to update password' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Password updated successfully' });

  } catch (error) {
    console.error('Error in change password API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
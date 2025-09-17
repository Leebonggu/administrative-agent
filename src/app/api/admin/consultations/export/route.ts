import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Area"',
      },
    });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

  if (password !== ADMIN_PASSWORD) {
    return new Response('Invalid credentials', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Area"',
      },
    });
  }

  try {
    const { data: consultations, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Found consultations:', consultations?.length || 0);
    if (consultations) {
      console.log('Sample data:', consultations[0]);
    }

    const csvHeaders = [
      'ID',
      '성명',
      '연락처',
      '이메일',
      '회사명',
      '상담업무',
      '상담내용',
      '개인정보동의',
      '신청일시'
    ];

    const csvRows = consultations?.map(consultation => [
      consultation.id,
      consultation.name,
      consultation.phone,
      consultation.email,
      consultation.company || '',
      consultation.service_type,
      consultation.message.replace(/"/g, '""').replace(/\n/g, ' '),
      consultation.privacy_agreed ? '동의' : '미동의',
      new Date(consultation.created_at).toLocaleString('ko-KR')
    ]) || [];

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row =>
        row.map(field => `"${field}"`).join(',')
      )
    ].join('\n');

    const filename = `상담신청_${new Date().toISOString().split('T')[0]}.csv`;

    // UTF-8 BOM 추가하여 한글이 제대로 표시되도록
    const csvWithBOM = '\uFEFF' + csvContent;
    const buffer = Buffer.from(csvWithBOM, 'utf-8');

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(filename)}"`,
      },
    });

  } catch (error) {
    console.error('CSV export error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
# Claude Code 프로젝트 컨텍스트

## 빌드 & 개발 명령어
```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행
```

## 색상 시스템 변경
- 메인 색상 변경: `src/app/globals.css`의 `--color-primary-*` 변수 수정
- 전체 사이트에서 `primary-*` 클래스 사용하여 자동 적용

## 중요 파일들
- `src/app/page.tsx` - 메인 랜딩페이지
- `src/app/consultation/page.tsx` - 상담 신청 페이지
- `src/app/globals.css` - Tailwind CSS v4 색상 정의
- `src/components/layout/` - 레이아웃 컴포넌트들
- `src/components/ui/Modal.tsx` - 재사용 가능한 모달 컴포넌트
- `src/components/ui/SuccessModal.tsx` - 성공 알림 모달
- `src/lib/supabase.ts` - Supabase 클라이언트 설정
- `database/schema.sql` - 데이터베이스 스키마
- `tailwind.config.ts` - Tailwind 설정 (사용 안 함, CSS 변수 방식 사용)

## 프로젝트 특징
- Tailwind CSS v4 사용 (CSS 변수 기반)
- 파란색 메인 테마
- 완전 반응형 디자인
- 컴포넌트 기반 레이아웃 시스템
- Supabase 백엔드 연동
- 상담 신청 시스템 구현

## 데이터베이스 (Supabase)
- PostgreSQL 데이터베이스
- `consultations` 테이블: 상담 신청 데이터 저장
- RLS 정책: INSERT/SELECT 모두 허용
- 자동 타임스탬프 (created_at, updated_at)

## 관리자 기능
### CSV 데이터 내보내기
- **URL**: `/api/admin/consultations/export`
- **인증**: Basic HTTP Auth (브라우저 패스워드 창)
- **패스워드**: 환경변수 `ADMIN_PASSWORD` (기본값: admin123)
- **기능**: 모든 상담 신청 데이터를 CSV로 다운로드
- **한글 지원**: UTF-8 BOM 포함

## 환경변수 (.env.local)
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_PASSWORD=your_admin_password
```
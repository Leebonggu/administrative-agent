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
NEXT_PUBLIC_BASE_URL=https://administrative-agent.vercel.app  # SEO 메타데이터용
```

## SEO 최적화 (2025-01-19 완료)

### 메타데이터 및 구조화된 데이터
- **메인 레이아웃** (`src/app/layout.tsx`): 전문 행정사 키워드, Open Graph, Twitter Cards
- **상담 페이지** (`src/app/consultation/layout.tsx`): 상담 전용 메타데이터
- **구조화된 데이터**: LegalService + ProfessionalService + Organization 스키마
- **FAQ 스키마** (`src/app/page.tsx`): 자주 묻는 질문 구조화 데이터

### 검색엔진 최적화 파일
- **사이트맵**: `src/app/sitemap.ts` - 자동 생성
- **로봇 규칙**: `src/app/robots.ts` - 관리자/API 경로 차단
- **언어 설정**: 한국어 (ko) 설정 완료

### 주요 SEO 키워드
- 핵심: "이민구, 이민구 행정사, 행정사이민구, 이민구행정사, 행정사, 인허가, 법인설립, 사업자등록"
- 전문: "건설업허가, 일반음식점허가, 화물운송업허가, 외국인투자신고"
- 지역: "서울행정사, 경기행정사, 서울특별시 강서구 마곡"
- 전문가: "인허가 이민구, 이민구 인허가, 행정사 인허가, 인허가 전문가 이민구"

### 변경 가능한 콘텐츠 위치

#### FAQ 섹션 (`src/app/page.tsx`)
- **위치**: 메인 페이지 FAQ 섹션 (라인 217-273)
- **구조화 데이터**: faqStructuredData 객체 (라인 7-44)
- **변경 시 주의**: JSON-LD 스키마도 함께 업데이트 필요

#### Footer 정보 (`src/components/layout/Footer.tsx`)
- **사무소 정보**: 라인 18 - 주소 (현재: 서울특별시 강서구 마곡)
- **자격증 정보**: 라인 30 - 행정사 자격 번호 및 개업연도
- **영업시간**: 라인 24 - 운영시간 정보
- **전문분야 태그**: 라인 57-61 - 행정법, 상법, 건설업법

#### 비즈니스 정보 업데이트 시 연동 필요
1. **메타데이터** (`src/app/layout.tsx` 라인 22-26): 지역 정보
2. **구조화된 데이터** (`src/app/layout.tsx` 라인 93-97): 주소 정보
3. **사이트맵/로봇** (`src/app/sitemap.ts`, `src/app/robots.ts`): 도메인 정보

### SEO 성과 지표
- 구조화된 데이터: 비즈니스, FAQ, 서비스 카탈로그
- 메타데이터: 완전한 Open Graph, Twitter Cards
- 기술적 SEO: 사이트맵, 로봇, 언어 설정 완료
- 평점 정보: 실제 리뷰 발생 시 추가 예정 (현재 미포함)
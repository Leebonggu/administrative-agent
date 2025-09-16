# 인허가닷컴 프로젝트 정보

## 프로젝트 개요
- **프로젝트명**: 인허가닷컴 (admin-work-site)
- **목적**: 행정사를 위한 행정업무 랜딩페이지
- **기술스택**: Next.js 15.5.3, TypeScript, Tailwind CSS v4

## 컬러 시스템
### Primary 색상 (파란색 계열)
- 50: #e6f3ff (연한 파란색)
- 600: #0052a3 (메인 파란색)
- 700: #003d7a (진한 파란색)

### 변경 방법
- `src/app/globals.css`의 `--color-primary-*` 변수 수정
- 모든 컴포넌트에서 `primary-*` 클래스 사용

## 컴포넌트 구조
```
src/
├── app/
│   ├── globals.css (색상 정의)
│   └── page.tsx (메인 랜딩페이지)
├── components/layout/
│   ├── Header.tsx (네비게이션)
│   ├── Footer.tsx (하단 정보)
│   ├── Layout.tsx (전체 레이아웃)
│   ├── Section.tsx (섹션 래퍼)
│   └── Container.tsx (컨테이너)
└── utils/
    └── colors.ts (색상 유틸리티)
```

## 페이지 구성
1. **히어로 섹션**: 메인 타이틀과 CTA 버튼
2. **서비스 섹션**: 6가지 행정업무 카테고리
3. **기능 섹션**: 3가지 핵심 기능 소개
4. **상담 CTA 섹션**: 전문 상담 안내
5. **푸터**: 회사 정보 및 링크

## 반응형 디자인
- 모바일 우선 설계
- 햄버거 메뉴 (모바일)
- 그리드 레이아웃 (md: 2열, lg: 3열)

## 개발 명령어
- 개발 서버: `npm run dev`
- 빌드: `npm run build`
- 린트: `npm run lint`
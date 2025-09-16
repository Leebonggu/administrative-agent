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
- `src/app/globals.css` - Tailwind CSS v4 색상 정의
- `src/components/layout/` - 레이아웃 컴포넌트들
- `tailwind.config.ts` - Tailwind 설정 (사용 안 함, CSS 변수 방식 사용)

## 프로젝트 특징
- Tailwind CSS v4 사용 (CSS 변수 기반)
- 파란색 메인 테마
- 완전 반응형 디자인
- 컴포넌트 기반 레이아웃 시스템
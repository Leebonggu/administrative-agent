# 디자인 시스템 가이드

## 컴포넌트 사용법

### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">클릭하세요</Button>
<Button variant="outline" size="md">보조 버튼</Button>
<Button variant="ghost" size="sm">고스트 버튼</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

<Card hover>
  <CardHeader>
    <CardTitle>제목</CardTitle>
  </CardHeader>
  <CardContent>
    내용이 들어갑니다.
  </CardContent>
</Card>
```

### Input
```tsx
import { Input } from '@/components/ui';

<Input
  label="이름"
  placeholder="이름을 입력하세요"
  error="필수 입력 항목입니다"
/>
```

### Typography
```tsx
import { Heading, Text } from '@/components/ui';

<Heading level={1}>대제목</Heading>
<Text size="lg" color="secondary">설명 텍스트</Text>
```

### Icon
```tsx
import { Icon } from '@/components/ui';

<Icon size="lg" background color="primary">
  <svg>...</svg>
</Icon>
```

## 색상 시스템
- Primary: 파란색 계열 (`primary-*`)
- Secondary: 슬레이트 계열 (`slate-*`)
- 색상 변경: `src/app/globals.css`에서 CSS 변수 수정

## 예제 페이지
- `/about` - 소개 페이지
- `/contact` - 문의 페이지

## 레이아웃 시스템
```tsx
<Layout>
  <Section background="gray" padding="xl">
    <Container>
      // 내용
    </Container>
  </Section>
</Layout>
```
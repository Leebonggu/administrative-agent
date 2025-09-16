import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { Button, Card, CardHeader, CardTitle, CardContent, Icon, Heading, Text } from '@/components/ui';

export default function About() {
  return (
    <Layout>
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <Heading level={1}>
            인허가닷컴 <span className="text-primary-600">소개</span>
          </Heading>
          <Text size="xl" color="secondary" className="max-w-3xl mx-auto mb-8">
            20년 이상의 경험을 바탕으로 고객의 행정업무를 전문적으로 처리하는
            대한민국 최고의 행정사 서비스입니다.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              상담 신청하기
            </Button>
            <Button variant="outline" size="lg">
              서비스 둘러보기
            </Button>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Heading level={2}>우리의 강점</Heading>
          <Text size="lg" color="secondary">
            고객 만족도 98%를 달성한 전문 서비스의 비결입니다
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover>
            <CardHeader>
              <Icon size="lg" background>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Icon>
              <CardTitle>전문성</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                행정사 자격을 보유한 전문가들이 직접 업무를 처리합니다.
              </Text>
              <ul className="space-y-2">
                <li className="text-sm text-slate-500">• 행정사 면허 보유</li>
                <li className="text-sm text-slate-500">• 20년+ 경력</li>
                <li className="text-sm text-slate-500">• 지속적인 교육 이수</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="lg" background>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Icon>
              <CardTitle>신속성</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                효율적인 시스템으로 빠른 업무 처리를 보장합니다.
              </Text>
              <ul className="space-y-2">
                <li className="text-sm text-slate-500">• 평균 처리기간 단축</li>
                <li className="text-sm text-slate-500">• 실시간 진행상황 알림</li>
                <li className="text-sm text-slate-500">• 우선순위 업무 지원</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="lg" background>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </Icon>
              <CardTitle>보안성</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                고객의 민감한 정보를 안전하게 보호합니다.
              </Text>
              <ul className="space-y-2">
                <li className="text-sm text-slate-500">• 개인정보보호법 준수</li>
                <li className="text-sm text-slate-500">• 암호화된 문서 관리</li>
                <li className="text-sm text-slate-500">• 접근권한 철저 관리</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section background="blue" padding="xl">
        <div className="text-center">
          <Heading level={2} className="text-primary-900 mb-6">
            궁금한 점이 있으신가요?
          </Heading>
          <Text size="lg" className="text-primary-800 mb-8 max-w-2xl mx-auto">
            전문 상담사가 친절하게 안내해드립니다.
            언제든지 편하게 문의해주세요.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              전화 상담 신청
            </Button>
            <Button variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-600">
              온라인 문의
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
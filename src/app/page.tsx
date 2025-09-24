import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { Button, Card, CardHeader, CardTitle, CardContent, Icon, Heading, Text } from '@/components/ui';
import Link from 'next/link';

export default function Home() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "법인 설립에 필요한 서류는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "법인 설립 시 필요한 주요 서류는 정관, 주주명부, 이사회 결의서, 대표이사 취임승낙서 등이 있습니다. 법인 형태와 업종에 따라 추가 서류가 필요할 수 있으며, 상담을 통해 정확한 서류 목록을 안내해드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "인허가 처리 기간은 얼마나 걸리나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "인허가 종류에 따라 처리 기간이 다릅니다. 일반음식점 허가는 약 7-14일, 건설업 허가는 약 30-45일, 화물운송업 허가는 약 20-30일 정도 소요됩니다. 정확한 기간은 관할 기관과 서류 준비 상황에 따라 달라질 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "상담 비용이 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "초기 상담은 무료로 제공해드립니다. 상담을 통해 고객님의 상황을 파악한 후 정확한 견적을 제시해드리며, 투명한 비용 구조로 안내해드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "외국인도 법인 설립이 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 외국인도 한국에서 법인 설립이 가능합니다. 외국인투자신고, 체류자격 확인 등 추가 절차가 필요하며, 관련 서류 준비부터 설립 완료까지 전 과정을 지원해드립니다."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <Layout>
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <Heading level={1}>
            인허가 업무의 <span className="text-primary-600">전문 파트너</span>
          </Heading>
          <Text size="xl" color="secondary" className="max-w-3xl mx-auto mb-8">
            이민구 행정사가 복잡한 인허가 업무를 전문적으로 처리하고, 고객에게 신뢰할 수 있는 서비스를 제공합니다.
            법인설립부터 각종 허가까지 모든 행정업무를 안전하게 대행해드립니다.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <Link href="/consultation">
              <Button variant="primary" size="lg" className="w-full sm:w-48">
                상담 신청하기
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-48">
              서비스 안내
            </Button>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Heading level={2}>어떤 행정업무든 쉽게 처리하세요</Heading>
          <Text size="lg" color="secondary">행정사가 담당하는 모든 업무를 효율적으로 관리할 수 있습니다</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card hover>
            <CardHeader>
              <Icon size="md" background color="primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </Icon>
              <CardTitle>법인 설립 및 관리</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                주식회사, 유한회사, 합명회사 등 모든 법인 설립부터 정관 변경, 합병, 분할까지
              </Text>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 법인 설립 등기</li>
                <li>• 정관 변경</li>
                <li>• 임원 변경 등기</li>
                <li>• 법인 해산 및 청산</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="md" background color="success">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Icon>
              <CardTitle>사업자등록 및 신고</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                개인사업자부터 법인사업자까지 모든 사업자등록 업무를 처리합니다
              </Text>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 사업자등록 신청</li>
                <li>• 사업자 변경신고</li>
                <li>• 사업자 폐업신고</li>
                <li>• 부가세 신고 대행</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="md" background color="warning">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </Icon>
              <CardTitle>각종 인허가 업무</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                건설업, 운송업, 음식업 등 다양한 업종의 인허가 신청을 지원합니다
              </Text>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 건설업 허가</li>
                <li>• 일반음식점 허가</li>
                <li>• 화물운송업 허가</li>
                <li>• 각종 신고업 신고</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="md" background className="bg-purple-100 text-purple-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Icon>
              <CardTitle>외국인 관련 업무</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                외국인 투자, 비자 연장, 체류 자격 변경 등 외국인 관련 모든 업무
              </Text>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 외국인 투자신고</li>
                <li>• 비자 연장 신청</li>
                <li>• 체류자격 변경</li>
                <li>• 외국인 고용허가</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="md" background color="danger">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </Icon>
              <CardTitle>인증 및 확인서</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                각종 공증, 확인서 발급, 번역 공증 등 인증 관련 업무를 처리합니다
              </Text>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 공증 업무</li>
                <li>• 각종 확인서 발급</li>
                <li>• 번역 공증</li>
                <li>• 사실증명원 발급</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Icon size="md" background className="bg-indigo-100 text-indigo-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Icon>
              <CardTitle>행정 심판 및 소송</CardTitle>
            </CardHeader>
            <CardContent>
              <Text color="secondary" className="mb-4">
                행정처분에 대한 이의신청, 행정심판, 행정소송 등을 대리합니다
              </Text>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 이의신청 대리</li>
                <li>• 행정심판 대리</li>
                <li>• 행정소송 대리</li>
                <li>• 민원 상담</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <Heading level={2}>왜 우리 시스템을 선택해야 할까요?</Heading>
          <Text size="lg" color="secondary">행정사 업무에 특화된 기능들로 더 효율적으로 일하세요</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Icon size="xl" background color="primary" className="mx-auto mb-6">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Icon>
            <Heading level={3}>빠른 업무 처리</Heading>
            <Text color="secondary">
              자동화된 서류 작성과 일정 관리로 업무 시간을 50% 단축하세요
            </Text>
          </div>

          <div className="text-center">
            <Icon size="xl" background color="success" className="mx-auto mb-6">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </Icon>
            <Heading level={3}>안전한 데이터 관리</Heading>
            <Text color="secondary">
              고객 정보와 중요 서류를 암호화하여 안전하게 보관합니다
            </Text>
          </div>

          <div className="text-center">
            <Icon size="xl" background className="bg-purple-100 text-purple-600 mx-auto mb-6">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </Icon>
            <Heading level={3}>24/7 고객 지원</Heading>
            <Text color="secondary">
              언제든지 궁금한 점을 문의하고 빠른 답변을 받으세요
            </Text>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Heading level={2}>자주 묻는 질문</Heading>
            <Text size="lg" color="secondary">고객님들이 자주 문의하시는 질문들을 모았습니다</Text>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>법인 설립에 필요한 서류는 무엇인가요?</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  법인 설립 시 필요한 주요 서류는 정관, 주주명부, 이사회 결의서, 대표이사 취임승낙서 등이 있습니다.
                  법인 형태와 업종에 따라 추가 서류가 필요할 수 있으며, 상담을 통해 정확한 서류 목록을 안내해드립니다.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>인허가 처리 기간은 얼마나 걸리나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  인허가 종류에 따라 처리 기간이 다릅니다. 일반음식점 허가는 약 7-14일, 건설업 허가는 약 30-45일,
                  화물운송업 허가는 약 20-30일 정도 소요됩니다. 정확한 기간은 관할 기관과 서류 준비 상황에 따라 달라질 수 있습니다.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>상담 비용이 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  초기 상담은 무료로 제공해드립니다. 상담을 통해 고객님의 상황을 파악한 후
                  정확한 견적을 제시해드리며, 투명한 비용 구조로 안내해드립니다.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>외국인도 법인 설립이 가능한가요?</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>
                  네, 외국인도 한국에서 법인 설립이 가능합니다. 외국인투자신고, 체류자격 확인 등
                  추가 절차가 필요하며, 관련 서류 준비부터 설립 완료까지 전 과정을 지원해드립니다.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="blue" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} className="text-primary-900 mb-6">전문적인 인허가 서비스</Heading>
          <Text size="xl" className="text-primary-800 mb-8 max-w-3xl mx-auto">
            복잡한 인허가 업무를 신속하고 정확하게 처리해드립니다.
            이민구 행정사가 직접 상담하고 맞춤형 솔루션을 제공합니다.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <Link href="/consultation">
              <Button variant="primary" size="lg" className="w-full sm:w-48 shadow-lg">
                상담 신청하기
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-48 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600"
            >
              견적 문의하기
            </Button>
          </div>
        </div>
      </Section>

      </Layout>
    </>
  );
}
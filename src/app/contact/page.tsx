import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Icon, Heading, Text } from '@/components/ui';

export default function Contact() {
  return (
    <Layout>
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <Heading level={1}>
            <span className="text-primary-600">문의하기</span>
          </Heading>
          <Text size="xl" color="secondary" className="max-w-3xl mx-auto">
            궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.
            전문 상담사가 빠르게 답변해드리겠습니다.
          </Text>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Heading level={2} className="mb-8">연락처 정보</Heading>

            <div className="space-y-6">
              <Card padding="md">
                <div className="flex items-center space-x-4">
                  <Icon size="md" background>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </Icon>
                  <div>
                    <Text className="font-semibold">전화 문의</Text>
                    <Text color="secondary">02-1234-5678</Text>
                    <Text size="sm" color="muted">평일 09:00 - 18:00</Text>
                  </div>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center space-x-4">
                  <Icon size="md" background>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Icon>
                  <div>
                    <Text className="font-semibold">이메일</Text>
                    <Text color="secondary">contact@인허가닷컴.kr</Text>
                    <Text size="sm" color="muted">24시간 접수 가능</Text>
                  </div>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center space-x-4">
                  <Icon size="md" background>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </Icon>
                  <div>
                    <Text className="font-semibold">사무실 주소</Text>
                    <Text color="secondary">서울시 강남구 테헤란로 123</Text>
                    <Text size="sm" color="muted">지하철 2호선 강남역 3번 출구</Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>온라인 문의</CardTitle>
                <Text color="secondary">
                  아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다.
                </Text>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="이름"
                      placeholder="성함을 입력해주세요"
                      required
                    />
                    <Input
                      label="연락처"
                      placeholder="전화번호를 입력해주세요"
                      required
                    />
                  </div>

                  <Input
                    label="이메일"
                    type="email"
                    placeholder="이메일 주소를 입력해주세요"
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      문의 유형
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none">
                      <option>법인 설립</option>
                      <option>사업자등록</option>
                      <option>인허가 업무</option>
                      <option>외국인 관련 업무</option>
                      <option>기타 문의</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      문의 내용
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      placeholder="상세한 문의 내용을 입력해주세요"
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full">
                    문의 접수하기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
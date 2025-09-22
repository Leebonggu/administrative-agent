'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { Button, Card, CardHeader, CardTitle, CardContent, Heading, Text, SuccessModal } from '@/components/ui';
import Link from 'next/link';
import { supabase, type ConsultationData } from '@/lib/supabase';

export default function ConsultationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const consultationData: ConsultationData = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || undefined,
      service_type: formData.get('serviceType') as string,
      message: formData.get('message') as string,
      privacy_agreed: true
    };

    try {
      const { error } = await supabase
        .from('consultations')
        .insert([consultationData]);

      if (error) {
        console.error('Error inserting consultation:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Section background="gray" padding="xl">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Heading level={1}>상담 신청</Heading>
            <Text size="lg" color="secondary">
              전문 행정사가 맞춤형 상담을 제공해드립니다
            </Text>
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mt-4">
                상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.
              </div>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>상담 신청 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      성명
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    회사명/단체명 (선택)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                    상담 희망 업무
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">업무를 선택해주세요</option>
                    <option value="법인설립">법인 설립 및 관리</option>
                    <option value="사업자등록">사업자등록 및 신고</option>
                    <option value="인허가">각종 인허가 업무</option>
                    <option value="외국인">외국인 관련 업무</option>
                    <option value="인증">인증 및 확인서</option>
                    <option value="행정심판">행정 심판 및 소송</option>
                    <option value="기타">기타</option>
                  </select>
                </div>


                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    상담 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="상담을 원하시는 내용을 자세히 적어주세요..."
                  />
                </div>

                <div className="bg-slate-50 p-4 rounded-md">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mr-3 mt-1 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-slate-600">
                      개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며,
                      상담 완료 후 관련 법령에 따라 보관됩니다.
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:justify-center">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-48" disabled={isSubmitting}>
                    {isSubmitting ? '신청 중...' : '상담 신청하기'}
                  </Button>
                  <Link href="/">
                    <Button type="button" variant="outline" size="lg" className="w-full sm:w-32">
                      취소
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <SuccessModal
        isOpen={submitStatus === 'success'}
        onClose={() => setSubmitStatus('idle')}
        title="상담 신청 완료!"
        message="상담 신청이 성공적으로 접수되었습니다.<br />전문 행정사가 <strong class='text-primary-600'>영업일 기준 1-2일 이내</strong>에<br />연락드리겠습니다."
      />
    </Layout>
  );
}
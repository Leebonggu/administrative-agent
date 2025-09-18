import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 신청 | 인허가 업무 전문 행정사",
  description: "전문 행정사가 맞춤형 상담을 제공해드립니다. 법인설립, 사업자등록, 인허가 등 모든 행정업무에 대해 무료 상담을 받아보세요.",
  openGraph: {
    title: "상담 신청 | 인허가 업무 전문 행정사",
    description: "전문 행정사가 맞춤형 상담을 제공해드립니다. 법인설립, 사업자등록, 인허가 등 모든 행정업무에 대해 무료 상담을 받아보세요.",
  },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
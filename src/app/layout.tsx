import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://admin-work-site.vercel.app'),
  title: "행정사 전문 사무소 | 인허가·법인설립·사업자등록 대행 서비스",
  description: "전문 행정사가 인허가, 법인설립, 사업자등록, 건설업허가, 음식점허가 등 모든 행정업무를 신속하고 정확하게 대행해드립니다.",
  keywords: "행정사, 인허가, 법인설립, 사업자등록, 건설업허가, 일반음식점허가, 화물운송업허가, 외국인투자신고, 공증업무, 행정심판, 인허가대행, 행정업무대행, 전문행정사, 서울행정사, 경기행정사",
  authors: [{ name: "행정사 전문 사무소" }],
  category: "Professional Services",
  other: {
    "business:contact_data:locality": "서울",
    "business:contact_data:region": "서울특별시",
    "business:contact_data:country_name": "대한민국",
    "og:type": "business.business",
  },
  openGraph: {
    title: "행정사 전문 사무소 | 인허가·법인설립·사업자등록 대행 서비스",
    description: "전문 행정사가 인허가, 법인설립, 사업자등록 등 모든 행정업무를 신속하고 정확하게 대행해드립니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "행정사 전문 사무소",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "행정사 전문 사무소 - 인허가 업무 대행",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "행정사 전문 사무소 | 인허가·법인설립·사업자등록 대행 서비스",
    description: "전문 행정사가 모든 행정업무를 신속하고 정확하게 대행해드립니다.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService", "Organization"],
    "name": "행정사 전문 사무소",
    "alternateName": "인허가닷컴",
    "description": "전문 행정사가 인허가, 법인설립, 사업자등록, 건설업허가, 음식점허가 등 모든 행정업무를 신속하고 정확하게 대행해드립니다.",
    "url": "https://admin-work-site.vercel.app",
    "logo": "https://admin-work-site.vercel.app/logo.png",
    "image": "https://admin-work-site.vercel.app/og-image.png",
    "serviceType": [
      "법인 설립 및 관리",
      "사업자등록 및 신고",
      "건설업 허가",
      "일반음식점 허가",
      "화물운송업 허가",
      "외국인 투자신고",
      "각종 인허가 업무",
      "외국인 관련 업무",
      "공증 및 인증업무",
      "행정 심판 및 소송"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "대한민국"
    },
    "availableLanguage": ["ko", "Korean"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressRegion": "서울특별시"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Korean"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "행정업무 대행 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "법인 설립 및 관리",
            "description": "주식회사, 유한회사 등 모든 법인 설립 및 관리 업무"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "사업자등록 및 신고",
            "description": "개인사업자부터 법인사업자까지 모든 사업자등록 업무"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "각종 인허가 업무",
            "description": "건설업, 운송업, 음식업 등 다양한 업종의 인허가 신청"
          }
        }
      ]
    },
    "knowsAbout": [
      "행정법",
      "상법",
      "건설업법",
      "식품위생법",
      "화물자동차운수사업법",
      "외국인투자촉진법"
    ]
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

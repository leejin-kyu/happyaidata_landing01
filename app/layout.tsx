import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Analytics from '@/components/Analytics'
import { GA_TRACKING_ID } from '@/lib/gtag'

export const metadata: Metadata = {
  title: 'AI 기반 빅데이터 분석 | 해피AI - 공공기관·연구기관 전문 데이터 분석 서비스',
  description: 'AI LLM 기반 전문 빅데이터 분석 서비스. 과학기술정책연구원·한국교육과정평가원·삼성전자 등 300건 이상 프로젝트 실적. 정책 분석, 여론 분석, 학술 텍스트마이닝 전문.',
  keywords: 'AI 빅데이터 분석, 텍스트마이닝, LLM 분석, 정책 분석, 여론 분석, 공공기관 데이터 분석, 연구기관 분석, ChatGPT 분석, BERTopic, LDA, STM, 데이터 컨설팅',
  authors: [{ name: '해피AI (HappyAI)' }],
  creator: '해피AI',
  publisher: '해피AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://[YOUR-DOMAIN]',
    siteName: '해피AI - AI 기반 빅데이터 분석',
    title: 'AI 기반 빅데이터 분석 전문 | 해피AI',
    description: '공공기관·연구기관을 위한 AI LLM 기반 전문 데이터 분석 서비스. 과학기술정책연구원·삼성전자 등 300건+ 실적.',
    images: [
      {
        url: '/og-image-happyai.jpg',
        width: 1200,
        height: 630,
        alt: 'AI 빅데이터 분석 - 해피AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 기반 빅데이터 분석 | 해피AI',
    description: 'AI LLM 기반 전문 빅데이터 분석 및 연구지원 서비스',
    images: ['/og-image-happyai.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      naver: 'naver-site-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {/* Google Analytics 4 */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <Analytics />
        {children}
      </body>
    </html>
  )
}

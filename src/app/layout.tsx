import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mindly.jungpyung.com"), // 실제 배포 도메인으로 수정 필요
  title: {
    default: "Mindly - AI 심리테스트 & 성향 분석",
    template: "%s | Mindly",
  },
  description: "AI 기반 심리테스트 플랫폼 Mindly에서 MBTI, 연애, 직업, 성향 분석을 무료로 체험해보세요. 당신의 마음을 읽어드립니다.",
  keywords: ["심리테스트", "MBTI", "연애 심리테스트", "성격 테스트", "직업 적성 검사", "AI 심리상담", "무료 심리테스트", "Mindly"],
  authors: [{ name: "SoftMind Lab" }],
  creator: "SoftMind Lab",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mindly.jungpyung.com",
    title: "Mindly - AI 심리테스트 & 성향 분석",
    description: "나를 찾아가는 여행, Mindly. AI가 분석해주는 정확하고 재미있는 심리테스트를 만나보세요.",
    siteName: "Mindly",
    images: [
      {
        url: "/images/og-image.png", // 대표 이미지 (생성 필요)
        width: 1200,
        height: 630,
        alt: "Mindly 서비스 미리보기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindly - AI 심리테스트",
    description: "AI가 분석해주는 나의 진짜 모습, 지금 확인해보세요.",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "c_zwevHTZKeQNZ6qbs70JMBCwgvdMgfkfJx2ebJIU2Q", // 구글 서치 콘솔에서 발급받은 코드 입력
    other: {
      "naver-site-verification": "8139e98b8416bc7562dc77100cf60da3ede8274c", // 네이버 웹마스터 도구 코드 입력
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f0f4f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased bg-slate-50 min-h-screen flex flex-col`}>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-80" />
        <Header />
        <main className="flex-1 pt-24 pb-12 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

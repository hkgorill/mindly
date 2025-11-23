import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mindly.jungpyung.com'; // 실제 도메인으로 변경 필요

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // 예시: 비공개 경로는 차단
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


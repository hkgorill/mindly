import { MetadataRoute } from 'next';
import { getAllTests } from '@/lib/tests';

export default function sitemap(): MetadataRoute.Sitemap {
  const tests = getAllTests();
  const baseUrl = 'https://mindly.jungpyung.com'; // 실제 도메인으로 변경 필요

  // 정적 페이지
  const routes = [
    '',
    '/about',
    '/contact',
    '/policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 테스트 페이지 (동적)
  const testRoutes = tests.map((test) => ({
    url: `${baseUrl}/test/${test.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // 테스트 페이지는 중요도가 높음
  }));

  return [...routes, ...testRoutes];
}


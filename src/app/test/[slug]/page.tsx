import { getTestById } from "@/lib/tests";
import { notFound } from "next/navigation";
import { TestRunner } from "@/components/TestRunner";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestById(slug);

  if (!test) {
    return {
      title: "Test Not Found",
    };
  }

  return {
    title: test.title,
    description: test.description,
    openGraph: {
      title: test.title,
      description: test.description,
      images: test.imageUrl ? [test.imageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: test.title,
      description: test.description,
      images: test.imageUrl ? [test.imageUrl] : [],
    },
  };
}

export default async function TestPage({ params }: PageProps) {
  const { slug } = await params;
  const test = getTestById(slug);

  if (!test) {
    notFound();
  }

  return <TestRunner test={test} />;
}

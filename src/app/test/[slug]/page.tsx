import { getTestById } from "@/lib/tests";
import { notFound } from "next/navigation";
import { TestRunner } from "@/components/TestRunner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TestPage({ params }: PageProps) {
  const { slug } = await params;
  const test = getTestById(slug);

  if (!test) {
    notFound();
  }

  return <TestRunner test={test} />;
}


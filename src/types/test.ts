export interface TestOption {
  text: string;
  score: Record<string, number>;
}

export interface TestQuestion {
  id: number;
  text: string;
  options: TestOption[];
}

export interface TestResult {
  type: string;
  title: string;
  description: string;
  traits: string[];
  tags: string[]; // energy, emotion, behavior
  graph?: { label: string; value: number }[];
}

export interface TestData {
  id: string;
  title: string;
  description: string;
  category: string; // '성격' | '연애' | '직업' | '감정' | '취향'
  imageUrl?: string;
  questions: TestQuestion[];
  results: TestResult[];
}



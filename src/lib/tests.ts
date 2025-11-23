import mbtiLite from "@/data/tests/mbti-lite.json";
import socialEnergy from "@/data/tests/social-energy.json";
import emotionalProcessing from "@/data/tests/emotional-processing.json";

import loveTension from "@/data/tests/love-tension.json";
import matchAnalysis from "@/data/tests/match-analysis.json";

import workStyle from "@/data/tests/work-style.json";
import stressCoping from "@/data/tests/stress-coping.json";
import jobCharacter from "@/data/tests/job-character.json";

import emotionalTemp from "@/data/tests/emotional-temp.json";
import resilience from "@/data/tests/resilience.json";
import selfUnderstanding from "@/data/tests/self-understanding.json";

import lifePattern from "@/data/tests/life-pattern.json";
import colorPreference from "@/data/tests/color-preference.json";
import cultureTaste from "@/data/tests/culture-taste.json";

import { TestData } from "@/types/test";

const tests: TestData[] = [
  // 성격
  mbtiLite as unknown as TestData,
  socialEnergy as unknown as TestData,
  emotionalProcessing as unknown as TestData,
  
  // 연애
  loveTension as unknown as TestData,
  matchAnalysis as unknown as TestData,
  
  // 직업
  workStyle as unknown as TestData,
  stressCoping as unknown as TestData,
  jobCharacter as unknown as TestData,

  // 감정
  emotionalTemp as unknown as TestData,
  resilience as unknown as TestData,
  selfUnderstanding as unknown as TestData,

  // 취향
  lifePattern as unknown as TestData,
  colorPreference as unknown as TestData,
  cultureTaste as unknown as TestData,
];

export function getAllTests(): TestData[] {
  return tests;
}

export function getTestById(id: string): TestData | undefined {
  return tests.find((t) => t.id === id);
}

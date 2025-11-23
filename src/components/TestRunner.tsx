"use client";

import { useState } from "react";
import { TestData, TestOption } from "@/types/test";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function TestRunner({ test }: { test: TestData }) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = test.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;

  const handleStart = () => setStarted(true);

  const handleAnswer = (option: TestOption) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Update scores
    const newScores = { ...scores };
    Object.entries(option.score).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    // Delay for animation
    setTimeout(() => {
      if (currentQuestionIndex < test.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        finishTest(newScores);
      }
    }, 400);
  };

  const finishTest = (finalScores: Record<string, number>) => {
    const params = new URLSearchParams();
    Object.entries(finalScores).forEach(([k, v]) => params.append(k, v.toString()));
    router.push(`/result/${test.id}?${params.toString()}`);
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center space-y-8 animate-fade-in">
        <div className="w-full h-64 bg-indigo-50 rounded-3xl flex items-center justify-center mb-8 border-4 border-white shadow-inner">
           <span className="text-6xl">🎨</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">{test.title}</h1>
        <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{test.description}</p>
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-200/50 transform hover:-translate-y-1"
        >
          테스트 시작하기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-8 md:py-12 min-h-[600px] flex flex-col">
      {/* Progress */}
      <div className="mb-12 space-y-2">
        <div className="flex justify-between text-sm font-medium text-slate-500">
          <span className="text-indigo-600 font-bold">Q.{currentQuestionIndex + 1}</span>
          <span>{currentQuestionIndex + 1} / {test.questions.length}</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center">
         <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed word-keep-all">
                 {question.text}
               </h2>
               
               <div className="space-y-4">
                 {question.options.map((option, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleAnswer(option)}
                     className="w-full p-6 text-left bg-white border-2 border-slate-100 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 shadow-sm hover:shadow-md group active:scale-[0.98]"
                   >
                     <span className="text-lg text-slate-700 font-medium group-hover:text-indigo-700">
                       {option.text}
                     </span>
                   </button>
                 ))}
               </div>
            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}


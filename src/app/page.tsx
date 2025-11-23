"use client";

import Link from "next/link";
import { getAllTests } from "@/lib/tests";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const allTests = getAllTests();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      const matchesCategory = selectedCategory === "All" || test.category === selectedCategory;
      const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          test.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allTests, selectedCategory, searchQuery]);

  const categories = ["All", "성격", "연애", "직업", "감정", "취향"];

  return (
    <div className="container mx-auto max-w-5xl space-y-16">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 text-center space-y-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm text-indigo-600 text-sm font-medium animate-fade-in">
          <Sparkles size={16} />
          <span>AI가 읽어주는 나의 심리 지도</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800 animate-fade-in-up">
          Discover Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Inner Universe
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          AI 기술로 더 정확하고 깊이 있는 심리 분석을 경험해보세요. <br className="hidden md:block" />
          당신의 마음 속 이야기를 들어드립니다.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative animate-fade-in-up delay-200">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="어떤 테스트를 찾으시나요?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-4 py-3 rounded-full border-2 border-white/50 bg-white/60 backdrop-blur-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all shadow-sm"
          />
        </div>
      </section>

      {/* Tests Section */}
      <section className="animate-fade-in-up delay-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-slate-800">Popular Tests</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-white/50 text-slate-600 hover:bg-white hover:text-indigo-600"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <Link
                key={test.id}
                href={`/test/${test.id}`}
                className="group relative bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-6 hover:bg-white/60 transition-all hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden"
              >
                {/* Background Image Decoration */}
                {test.imageUrl && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={test.imageUrl} alt="" className="w-full h-full object-cover blur-xl scale-150" />
                  </div>
                )}

                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                   {test.imageUrl ? (
                     // eslint-disable-next-line @next/next/no-img-element
                     <img src={test.imageUrl} alt="" className="w-24 h-24 object-contain" />
                   ) : (
                     <Sparkles size={100} className="text-indigo-600" />
                   )}
                </div>

                <div className="relative z-10 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                    {test.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {test.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {test.description}
                  </p>
                  
                  <div className="pt-4 flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    시작하기 <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 bg-white/30 rounded-3xl border border-white/40">
            <p className="text-lg">검색 결과가 없습니다. 😅</p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
              className="mt-4 text-indigo-600 hover:underline font-medium"
            >
              모든 테스트 보기
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

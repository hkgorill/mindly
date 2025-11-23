"use client";

import Link from "next/link";
import { getAllTests } from "@/lib/tests";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import KakaoAdFit from "@/components/KakaoAdFit";

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
            {filteredTests.map((test, index) => (
              <Link
                key={test.id}
                href={`/test/${test.id}`}
                className="group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer overflow-hidden flex flex-col h-[320px]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Soft Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-indigo-200/50 transition-colors pointer-events-none" />
                
                {/* Dynamic Background Blob */}
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl group-hover:scale-125 group-hover:bg-indigo-200/40 transition-all duration-500" />

                {/* Card Header: Category & Icon */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider shadow-sm">
                    {test.category}
                  </span>
                  
                  {/* Icon with float animation */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/50 shadow-inner border border-white/60 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                     {test.imageUrl ? (
                       // eslint-disable-next-line @next/next/no-img-element
                       <img src={test.imageUrl} alt="" className="w-10 h-10 object-contain drop-shadow-md" />
                     ) : (
                       <Sparkles size={32} className="text-indigo-600" />
                     )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
                      {test.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 group-hover:text-slate-600">
                      {test.description}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span>테스트 시작하기</span>
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

      {/* Main Page Ad */}
      <KakaoAdFit 
        pcUnit="DAN-C8DDIqgiiesqQtDg"
        mobileUnit="DAN-8yJc4f6JD0KeYUMF"
        className="mt-12 mb-8 animate-fade-in-up delay-500"
      />
    </div>
  );
}

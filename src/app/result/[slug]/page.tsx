import { getTestById } from "@/lib/tests";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Share2, RotateCcw } from "lucide-react";
import { ResultChart } from "@/components/ResultChart";
import KakaoAdFit from "@/components/KakaoAdFit";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ResultPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const test = getTestById(slug);

  if (!test) {
    notFound();
  }

  // Logic to determine result from query params
  let result = test.results[0]; // Default
  
  if (test.id === 'mbti-lite') {
      const e = Number(query['E'] || 0);
      const i = Number(query['I'] || 0);
      
      if (i > e) {
          const isfp = test.results.find(r => r.type === 'ISFP');
          if (isfp) result = isfp;
      } else {
          const entp = test.results.find(r => r.type === 'ENTP');
          if (entp) result = entp;
      }
  } else if (test.id === 'love-tension') {
      const active = Number(query['Active'] || 0);
      const passive = Number(query['Passive'] || 0);
      // More Active = Passionate, More Passive = Considerate
      if (active >= passive) {
          const passionate = test.results.find(r => r.type === 'PASSIONATE');
          if (passionate) result = passionate;
      } else {
          const considerate = test.results.find(r => r.type === 'CONSIDERATE');
          if (considerate) result = considerate;
      }
  } else if (test.id === 'work-style') {
     const vision = Number(query['Vision'] || 0);
     const detail = Number(query['Detail'] || 0);
     // Vision > Detail = Commander
     if (vision >= detail) {
         const commander = test.results.find(r => r.type === 'COMMANDER');
         if (commander) result = commander;
     } else {
         const supporter = test.results.find(r => r.type === 'SUPPORTER');
         if (supporter) result = supporter;
     }
  } else if (test.id === 'social-energy') {
      const out = Number(query['Out'] || 0);
      const inn = Number(query['In'] || 0); // 'In' is reserved keyword sometimes, better use inn or safe access
      
      if (out >= inn) {
          const nuclear = test.results.find(r => r.type === 'NUCLEAR');
          if (nuclear) result = nuclear;
      } else {
          const bunker = test.results.find(r => r.type === 'BUNKER');
          if (bunker) result = bunker;
      }
  } else if (test.id === 'match-analysis') {
      const hot = Number(query['Hot'] || 0);
      const cold = Number(query['Cold'] || 0);
      
      if (hot >= cold) {
          const romantic = test.results.find(r => r.type === 'ROMANTIC');
          if (romantic) result = romantic;
      } else {
          const pragmatic = test.results.find(r => r.type === 'PRAGMATIC');
          if (pragmatic) result = pragmatic;
      }
  } else if (test.id === 'emotional-temp') {
      const high = Number(query['High'] || 0);
      const low = Number(query['Low'] || 0);
      
      if (high >= low) {
          const sunny = test.results.find(r => r.type === 'SUNNY');
          if (sunny) result = sunny;
      } else {
          const cloudy = test.results.find(r => r.type === 'CLOUDY');
          if (cloudy) result = cloudy;
      }
  } else if (test.id === 'emotional-processing') {
      const out = Number(query['Out'] || 0);
      const inn = Number(query['In'] || 0);
      
      if (out >= inn) {
          const volcano = test.results.find(r => r.type === 'VOLCANO');
          if (volcano) result = volcano;
      } else {
          const lake = test.results.find(r => r.type === 'LAKE');
          if (lake) result = lake;
      }
  } else if (test.id === 'stress-coping') {
      const solve = Number(query['Solve'] || 0);
      const avoid = Number(query['Avoid'] || 0);
      
      if (solve >= avoid) {
          const fighter = test.results.find(r => r.type === 'FIGHTER');
          if (fighter) result = fighter;
      } else {
          const healer = test.results.find(r => r.type === 'HEALER');
          if (healer) result = healer;
      }
  } else if (test.id === 'job-character') {
      const news = Number(query['New'] || 0);
      const stable = Number(query['Stable'] || 0);
      
      if (news >= stable) {
          const innovator = test.results.find(r => r.type === 'INNOVATOR');
          if (innovator) result = innovator;
      } else {
          const guardian = test.results.find(r => r.type === 'GUARDIAN');
          if (guardian) result = guardian;
      }
  } else if (test.id === 'resilience') {
      const high = Number(query['High'] || 0);
      const low = Number(query['Low'] || 0);
      
      if (high >= low) {
          const elastic = test.results.find(r => r.type === 'ELASTIC');
          if (elastic) result = elastic;
      } else {
          const cushion = test.results.find(r => r.type === 'CUSHION');
          if (cushion) result = cushion;
      }
  } else if (test.id === 'self-understanding') {
      const clear = Number(query['Clear'] || 0);
      const foggy = Number(query['Foggy'] || 0);
      
      if (clear >= foggy) {
          const mirror = test.results.find(r => r.type === 'MIRROR');
          if (mirror) result = mirror;
      } else {
          const explorer = test.results.find(r => r.type === 'EXPLORER');
          if (explorer) result = explorer;
      }
  } else if (test.id === 'color-preference') {
      const warm = Number(query['Warm'] || 0);
      const cool = Number(query['Cool'] || 0);
      
      if (warm >= cool) {
          const warmResult = test.results.find(r => r.type === 'WARM');
          if (warmResult) result = warmResult;
      } else {
          const coolResult = test.results.find(r => r.type === 'COOL');
          if (coolResult) result = coolResult;
      }
  } else if (test.id === 'culture-taste') {
      const hip = Number(query['Hip'] || 0);
      const pop = Number(query['Pop'] || 0);
      
      if (hip >= pop) {
          const hipster = test.results.find(r => r.type === 'HIPSTER');
          if (hipster) result = hipster;
      } else {
          const mainstream = test.results.find(r => r.type === 'MAINSTREAM');
          if (mainstream) result = mainstream;
      }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 animate-fade-in-up">
      <div className="glass-card rounded-3xl p-8 md:p-12 text-center border-2 border-white/50 shadow-xl relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-transparent -z-10" />
        
        <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm mb-6">
          {test.title} 결과
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          {result.title}
        </h1>
        
        <p className="text-xl text-indigo-600 font-medium mb-8">
          {result.type}
        </p>

        <div className="prose prose-slate mx-auto mb-12 text-slate-600 leading-relaxed whitespace-pre-wrap">
          {result.description}
        </div>

        {/* Chart */}
        {result.graph && (
          <div className="mb-12">
            <ResultChart data={result.graph} />
          </div>
        )}

        {/* Traits / Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {result.traits.map((trait) => (
            <span key={trait} className="px-4 py-2 rounded-full bg-white border border-indigo-100 text-indigo-700 font-medium shadow-sm">
              # {trait}
            </span>
          ))}
           {result.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-medium shadow-sm">
              # {tag}
            </span>
          ))}
        </div>

        {/* Kakao AdFit */}
        <KakaoAdFit 
          pcUnit="DAN-gbh0aQ2W7ZLCGZYh"
          mobileUnit="DAN-sMBJFVMEtB2DBKzN"
          className="my-8"
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200/50">
            <Share2 size={18} />
            공유하기
          </button>
          <Link 
            href={`/test/${test.id}`}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors"
          >
            <RotateCcw size={18} />
            다시하기
          </Link>
        </div>
      </div>
      
      <div className="mt-8 text-center">
         <Link href="/" className="text-slate-500 hover:text-indigo-600 text-sm font-medium underline decoration-indigo-200 underline-offset-4">
            다른 테스트 보러가기
         </Link>
      </div>
    </div>
  );
}

import { Sparkles, Brain, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl space-y-20 py-12 animate-fade-in">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10" />
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-indigo-600 text-sm font-bold mb-4 backdrop-blur-sm">
          Our Story
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
          We Help You Find <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Your True Self
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Mindly는 AI 기술과 심리학을 결합하여 당신의 마음을 가장 쉽고 정확하게 읽어주는 나침반입니다.
          복잡한 마음속 지도를 함께 탐험하며, 당신만의 빛나는 가치를 찾아드립니다.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Brain className="w-8 h-8 text-indigo-600" />,
            title: "AI 기반 분석",
            desc: "최신 AI 알고리즘을 통해 단순한 유형 분류를 넘어 깊이 있는 성향 분석을 제공합니다."
          },
          {
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            title: "따뜻한 공감",
            desc: "딱딱한 결과지가 아닌, 마치 친구가 이야기해주는 듯한 따뜻한 위로와 조언을 건넵니다."
          },
          {
            icon: <Users className="w-8 h-8 text-blue-500" />,
            title: "모두를 위한 서비스",
            desc: "성격, 연애, 진로 등 누구나 공감할 수 있는 다양한 주제의 테스트를 무료로 제공합니다."
          }
        ].map((feature, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl border border-white/60 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="rounded-3xl p-12 border border-white/20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "심리 테스트" },
            { number: "50K+", label: "누적 사용자" },
            { number: "98%", label: "결과 만족도" },
            { number: "24/7", label: "언제나 이용 가능" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
              <div className="text-indigo-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="text-center max-w-3xl mx-auto space-y-6 py-8">
        <Sparkles className="w-10 h-10 text-indigo-400 mx-auto" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          "마음의 건강이 곧 삶의 행복입니다."
        </h2>
        <p className="text-slate-600 leading-relaxed">
          SoftMind Lab은 기술이 사람의 마음을 치유하는 도구가 될 수 있다고 믿습니다. <br className="hidden md:block"/>
          Mindly와 함께하는 짧은 여정이 당신에게 작은 위로와 발견의 기쁨이 되기를 바랍니다.
        </p>
      </section>
    </div>
  );
}


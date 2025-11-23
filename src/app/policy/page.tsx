import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 animate-fade-in">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">개인정보 처리방침</h1>
        <p className="text-slate-600">
          Mindly는 사용자의 개인정보를 소중하게 생각합니다.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 border-2 border-white/50 shadow-xl bg-white/60 backdrop-blur-md">
        <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-indigo-600">
          <h3>1. 수집하는 개인정보의 항목</h3>
          <p>
            Mindly(이하 "서비스")는 별도의 회원가입 없이 이용 가능한 서비스입니다. 
            서비스 이용 과정에서 심리검사 진행을 위한 답변 데이터가 일시적으로 처리되나, 
            이는 결과 분석을 위한 용도로만 사용되며 <strong>서버에 영구 저장되지 않습니다.</strong>
          </p>
          <ul>
            <li>수집 항목: 심리검사 답변 데이터 (일회성)</li>
            <li>수집 방법: 서비스 이용 시 사용자가 직접 입력</li>
          </ul>

          <h3>2. 개인정보의 처리 목적</h3>
          <p>
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않습니다.
          </p>
          <ul>
            <li>심리검사 결과 분석 및 제공</li>
            <li>서비스 이용 통계 및 분석 (익명화된 데이터)</li>
          </ul>

          <h3>3. 쿠키(Cookie)의 운용 및 거부</h3>
          <p>
            서비스는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
            이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹브라우저 옵션 설정을 통해 이를 거부할 수 있습니다.
          </p>

          <h3>4. 개인정보의 제3자 제공</h3>
          <p>
            서비스는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우를 제외하고는 
            개인정보를 제3자에게 제공하지 않습니다.
          </p>

          <h3>5. 문의처</h3>
          <p>
            개인정보 보호 관련 문의사항은 아래 연락처로 문의 주시면 신속하게 처리해 드리겠습니다.
          </p>
          <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 not-prose">
            <p className="font-semibold text-slate-800 mb-1">SoftMind Lab 개인정보 보호 책임자</p>
            <p className="text-slate-600 text-sm">이메일: privacy@mindly.com</p>
          </div>
          
          <p className="text-sm text-slate-400 mt-8 text-right">
            시행일자: 2025년 11월 23일
          </p>
        </div>
      </div>
    </div>
  );
}


import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 animate-fade-in">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
          <FileText size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">이용약관</h1>
        <p className="text-slate-600">
          Mindly 서비스 이용에 관한 규정입니다.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 border-2 border-white/50 shadow-xl bg-white/60 backdrop-blur-md">
        <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-indigo-600">
          <h3>제1조 (목적)</h3>
          <p>
            본 약관은 SoftMind Lab(이하 "회사")이 제공하는 심리검사 서비스 Mindly(이하 "서비스")의 
            이용조건 및 절차, 회사와 회원의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
          </p>

          <h3>제2조 (서비스의 제공 및 변경)</h3>
          <p>
            회사는 이용자에게 다음과 같은 서비스를 제공합니다.
          </p>
          <ul>
            <li>다양한 주제의 온라인 심리테스트 및 결과 분석</li>
            <li>테스트 결과 공유 기능</li>
            <li>기타 회사가 자체 개발하거나 제휴 등을 통해 제공하는 일체의 서비스</li>
          </ul>

          <h3>제3조 (저작권의 귀속 및 이용제한)</h3>
          <p>
            1. 회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속합니다.<br/>
            2. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 
            영리 목적으로 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
          </p>

          <h3>제4조 (면책조항)</h3>
          <p>
            1. 본 서비스에서 제공하는 심리검사 결과는 의학적 진단이 아니며, 참고용으로만 활용되어야 합니다.<br/>
            2. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 
            서비스 제공에 관한 책임이 면제됩니다.
          </p>

          <h3>제5조 (분쟁해결)</h3>
          <p>
            본 약관은 대한민국 법률에 따라 규율되고 해석되며, 서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁에 대해서는 
            민사소송법상의 관할 법원에 제소합니다.
          </p>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              부칙<br/>
              본 약관은 2025년 11월 23일부터 시행합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



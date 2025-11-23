"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        throw new Error("전송 실패");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("메시지 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 animate-fade-in">
      <div className="text-center mb-16 space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-indigo-600 text-sm font-bold mb-4 backdrop-blur-sm">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Contact Us</h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          서비스에 대한 제안, 버그 신고, 혹은 단순한 응원 메시지까지 언제든 환영합니다.
          SoftMind Lab 팀은 여러분의 목소리에 귀 기울이고 있습니다.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Contact Form */}
        <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/60 shadow-lg bg-white/40 backdrop-blur-md">
          {isSubmitted ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">메시지 전송 완료!</h3>
              <p className="text-slate-600">
                소중한 의견 감사합니다. <br/>
                빠른 시일 내에 답변 드리겠습니다.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-indigo-600 font-medium hover:underline"
              >
                새로운 메시지 보내기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  placeholder="홍길동"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  placeholder="hello@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                  placeholder="어떤 내용이 궁금하신가요?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg hover:shadow-indigo-200/50 transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    전송 중...
                  </>
                ) : (
                  <>
                    메시지 보내기 <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

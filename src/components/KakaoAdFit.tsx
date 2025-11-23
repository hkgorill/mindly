"use client";

import { useEffect, useRef, useState } from "react";

interface KakaoAdFitProps {
  pcUnit: string;
  mobileUnit: string;
  className?: string;
}

export default function KakaoAdFit({ pcUnit, mobileUnit, className }: KakaoAdFitProps) {
  // const scriptElement = useRef<HTMLScriptElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // 화면 크기 체크 (768px 기준)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 체크
    checkMobile();

    // 리사이즈 이벤트 리스너 (반응형 대응)
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // isMobile이 결정된 후에만 스크립트 로드
    if (isMobile === null) return;

    const script = document.createElement("script");
    script.setAttribute("src", "//t1.daumcdn.net/kas/static/ba.min.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);

    return () => {
      // 스크립트 제거는 신중하게 (다른 광고가 있을 수 있음)
      // document.body.removeChild(script); 
      // AdFit 스크립트는 전역으로 동작하므로 굳이 제거하지 않아도 됨
    };
  }, [isMobile]); // isMobile이 변경될 때마다(광고 단위가 바뀔 때) 재실행 로직이 필요할 수 있으나, AdFit은 자동 감지함

  // 화면 크기 계산 전에는 렌더링 하지 않음 (Hydration Mismatch 방지 및 깜빡임 최소화)
  if (isMobile === null) return <div className={`w-full h-[50px] or h-[90px] ${className}`} />;

  return (
    <div className={`flex justify-center items-center w-full overflow-hidden ${className}`}>
      {isMobile ? (
        // Mobile용 광고 (320x50)
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={mobileUnit}
          data-ad-width="320"
          data-ad-height="50"
        ></ins>
      ) : (
        // PC용 광고 (728x90)
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={pcUnit}
          data-ad-width="728"
          data-ad-height="90"
        ></ins>
      )}
    </div>
  );
}

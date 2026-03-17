import { useEffect, useRef } from "react";
import Image from "next/image";
import { IMG_RECTANGLE_STRIP } from "../data";
import { t, type Lang } from "../translations";

interface HeroProps {
  lang: Lang;
  onScrollToForm: () => void;
}

export default function Hero({ lang, onScrollToForm }: HeroProps) {
  const tr = t[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});

    const playOnInteraction = () => {
      if (video.paused) video.play().catch(() => {});
    };
    document.addEventListener("touchstart", playOnInteraction, { once: true });
    document.addEventListener("click", playOnInteraction, { once: true });
    video.addEventListener("canplay", playOnInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", playOnInteraction);
      document.removeEventListener("click", playOnInteraction);
      video.removeEventListener("canplay", playOnInteraction);
    };
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-bg"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Single gradient bottom (duplicate removed) */}
      <div className="hero-gradient-bottom" />
      <div className="hero-gradient-top" />
      <div className="hero-gradient-right" />
      <div className="hero-gradient-left" />
      <div className="hero-content" data-animate-group>
        <h1 className="hero-title animate-up">{tr.heroTitle}</h1>
        <p className="hero-subtitle animate-up">{tr.heroSubtitle}</p>
        <div className="hero-btn animate-up">
          <button className="btn-primary" onClick={onScrollToForm}>
            {tr.heroCta}
          </button>
        </div>
      </div>
      <div className="hero-strip animate-up">
        <Image src={IMG_RECTANGLE_STRIP} alt="" aria-hidden={true} width={1440} height={40} style={{ width: "100%", height: "auto" }} priority />
      </div>
    </section>
  );
}

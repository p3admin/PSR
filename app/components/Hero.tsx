import { useEffect, useRef } from "react";
import { t, type Lang } from "../translations";
import shared from "../styles/shared.module.css";
import styles from "./Hero.module.css";

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
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.heroBg}
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className={styles.heroGradientBottom} />
      <div className={styles.heroGradientTop} />
      <div className={styles.heroGradientRight} />
      <div className={styles.heroGradientLeft} />
      <div className={styles.heroContent} data-animate-group>
        <h1 className={`${styles.heroTitle} animate-up`}>{tr.heroTitle}</h1>
        <p className={`${styles.heroSubtitle} animate-up`}>{tr.heroSubtitle}</p>
        <div className={`${styles.heroBtn} animate-up`}>
          <button className={shared.btnPrimary} onClick={onScrollToForm}>
            {tr.heroCta}
          </button>
        </div>
      </div>
    </section>
  );
}

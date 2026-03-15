import { IMG_RECTANGLE_STRIP } from "../data";
import { t, type Lang } from "../translations";

interface HeroProps {
  lang: Lang;
  onScrollToForm: () => void;
}

export default function Hero({ lang, onScrollToForm }: HeroProps) {
  const tr = t[lang];

  return (
    <section className="hero">
      <video
        className="hero-bg"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
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
        <img src={IMG_RECTANGLE_STRIP} alt="" role="presentation" />
      </div>
    </section>
  );
}

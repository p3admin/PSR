import Image from "next/image";
import { competencyImages, techLogos } from "../data";
import { t, type Lang } from "../translations";

interface CompetenciesProps {
  lang: Lang;
}

export default function Competencies({ lang }: CompetenciesProps) {
  const tr = t[lang];
  const cards = tr.competencyCards;
  const totalLabel = String(cards.length).padStart(2, "0");

  return (
    <>
      <section id="competencies" className="section section-gap">
        <h2 className="section-title animate-up" style={{ marginBottom: 36 }}>
          {tr.competenciesTitle}
        </h2>
        <div className="competency-cards-list" data-animate-group>
          {cards.map((card, idx) => (
            <div key={card.title} className="competency-card card-bg-1 animate-up">
              <div className="competency-card-desktop">
                <div className="competency-card-content">
                  <h3 className="competency-title">{card.title}</h3>
                  <p className="competency-desc">{card.desc}</p>
                </div>
                <div className="card-image-container">
                  <Image src={competencyImages[idx].desktop} alt={card.title} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  <div className="card-image-gradient" />
                </div>
                <div className="competency-counter">
                  <span>{String(idx + 1).padStart(2, "0")}</span> — {totalLabel}
                </div>
                <div className="card-glow" />
              </div>
              <div className="competency-card-mobile">
                <div className="competency-card-mobile-content">
                  <h3 className="competency-mobile-title">{card.title}</h3>
                  <p className="competency-mobile-desc">{card.desc}</p>
                </div>
                <div className="competency-mobile-counter">
                  <span className="competency-mobile-counter-current">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="competency-mobile-counter-sep"> —</span>
                  <span className="competency-mobile-counter-total">{totalLabel}</span>
                </div>
                <div className="competency-mobile-illustration">
                  <Image src={competencyImages[idx].mobile} alt="" aria-hidden={true} width={357} height={274} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Logo Strip */}
      <div className="tech-strip">
        <div className="tech-strip-fade-left" />
        <div className="tech-strip-inner">
          {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.name}-${i}`}
              className="tech-logo"
              src={logo.src}
              alt={logo.name}
              style={{ width: logo.w, height: logo.h }}
            />
          ))}
        </div>
        <div className="tech-strip-fade-right" />
      </div>
    </>
  );
}

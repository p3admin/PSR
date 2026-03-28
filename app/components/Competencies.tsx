import Image from "next/image";
import { competencyImages, techLogos } from "../data";
import { t, type Lang } from "../translations";
import shared from "../styles/shared.module.css";
import styles from "./Competencies.module.css";

interface CompetenciesProps {
  lang: Lang;
}

export default function Competencies({ lang }: CompetenciesProps) {
  const tr = t[lang];
  const cards = tr.competencyCards;
  const totalLabel = String(cards.length).padStart(2, "0");

  return (
    <>
      <section id="competencies" className={`${shared.section} ${shared.sectionGap}`}>
        <h2 className={`${shared.sectionTitle} animate-up`} style={{ marginBottom: 36 }}>
          {tr.competenciesTitle}
        </h2>
        <div className={styles.competencyCardsList} data-animate-group>
          {cards.map((card, idx) => (
            <div key={card.title} className={`${styles.competencyCard} ${styles.cardBg1} animate-up`}>
              <div className={styles.competencyCardDesktop}>
                <div className={styles.competencyCardContent}>
                  <h3 className={styles.competencyTitle}>{card.title}</h3>
                  <p className={styles.competencyDesc}>{card.desc}</p>
                </div>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={competencyImages[idx].desktop}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.cardImageGradient} />
                </div>
                <div className={styles.competencyCounter}>
                  <span>{String(idx + 1).padStart(2, "0")}</span> — {totalLabel}
                </div>
                <div className={styles.cardGlow} />
              </div>
              <div className={styles.competencyCardMobile}>
                <div className={styles.competencyCardMobileContent}>
                  <h3 className={styles.competencyMobileTitle}>{card.title}</h3>
                  <p className={styles.competencyMobileDesc}>{card.desc}</p>
                </div>
                <div className={styles.competencyMobileCounter}>
                  <span className={styles.competencyMobileCounterCurrent}>{String(idx + 1).padStart(2, "0")}</span>
                  <span className={styles.competencyMobileCounterSep}> —</span>
                  <span className={styles.competencyMobileCounterTotal}>{totalLabel}</span>
                </div>
                <div className={styles.competencyMobileIllustration}>
                  <Image
                    src={competencyImages[idx].mobile}
                    alt=""
                    aria-hidden={true}
                    width={357}
                    height={274}
                    sizes="357px"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.techStrip}>
        <div className={styles.techStripFadeLeft} />
        <div className={styles.techStripInner}>
          {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.name}-${i}`}
              className={styles.techLogo}
              src={logo.src}
              alt={logo.name}
              style={{ width: logo.w, height: logo.h }}
            />
          ))}
        </div>
        <div className={styles.techStripFadeRight} />
      </div>
    </>
  );
}

import Image from "next/image";
import { t, type Lang } from "../translations";
import shared from "../styles/shared.module.css";
import styles from "./Mission.module.css";

interface MissionProps {
  lang: Lang;
}

export default function Mission({ lang }: MissionProps) {
  const tr = t[lang];

  return (
    <section id="mission" className={`${shared.section} ${shared.sectionGap} ${styles.missionSection}`}>
      <Image
        src="/missionhole.png"
        alt=""
        aria-hidden={true}
        className={styles.missionHoleAbsolute}
        width={800}
        height={800}
        sizes="(max-width: 768px) 0px, 50vw"
      />
      <h2 className={`${shared.sectionTitle} ${styles.missionSectionTitle} animate-up`}>{tr.missionTitle}</h2>
      <div className={styles.missionContent}>
        <div className={styles.missionTextWrapper}>
          <p className={`${styles.missionText} animate-up`}>{tr.missionBody}</p>
        </div>
        <div className={styles.missionHoleMobileWrap}>
          <Image
            src="/missionhole.png"
            alt=""
            aria-hidden={true}
            className={styles.missionHoleMobile}
            width={800}
            height={800}
            sizes="(max-width: 768px) 80vw, 0px"
          />
        </div>
        <div className={`${styles.missionApproach} animate-up`}>
          <p className={styles.missionApproachTitle}>{tr.missionApproachTitle}</p>
          <div className={styles.missionApproachItems}>
            {tr.missionApproachItems.map((item, i) => (
              <p key={i} className={styles.missionApproachItem}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { structureIcons } from "../data";
import { t, type Lang } from "../translations";
import shared from "../styles/shared.module.css";
import styles from "./Structure.module.css";

interface StructureProps {
  lang: Lang;
}

export default function Structure({ lang }: StructureProps) {
  const tr = t[lang];

  return (
    <section id="structure" className={`${shared.section} ${shared.sectionGap}`}>
      <div className={styles.structureSection}>
        <div className={styles.structureLeft}>
          <h2 className={`${shared.sectionTitle} animate-up`}>{tr.structureTitle}</h2>
          <div className={styles.structureItems} data-animate-group>
            {tr.structureItems.map((item, i) => (
              <div key={item.title} className={`${styles.structureItem} animate-up`}>
                <div className={styles.structureItemHeader}>
                  <Image
                    className={styles.structureItemIcon}
                    src={structureIcons[i]}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                  <span className={styles.structureItemTitle}>{item.title}</span>
                </div>
                <p className={styles.structureItemText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.structureRight} animate-up`}>
          <div className={styles.concentricCircles}>
            <div className={`${styles.circle} ${styles.circleOuter}`} />
            <div className={`${styles.circle} ${styles.circleMid}`} />
            <div className={`${styles.circle} ${styles.circleInner}`} />
            <div className={`${styles.circleLabel} ${styles.circleLabelTop}`}>{tr.circleLabels[0]}</div>
            <div className={`${styles.circleLabel} ${styles.circleLabelMid}`}>{tr.circleLabels[1]}</div>
            <div className={`${styles.circleLabel} ${styles.circleLabelBottom}`}>{tr.circleLabels[2]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

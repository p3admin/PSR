import Image from "next/image";
import { t, type Lang } from "../translations";

interface MissionProps {
  lang: Lang;
}

export default function Mission({ lang }: MissionProps) {
  const tr = t[lang];

  return (
    <section id="mission" className="section section-gap mission-section">
      <Image
        src="/missionhole.png"
        alt=""
        aria-hidden={true}
        className="mission-hole-absolute"
        width={800}
        height={800}
        sizes="(max-width: 768px) 0px, 50vw"
      />
      <h2 className="section-title animate-up">{tr.missionTitle}</h2>
      <div className="mission-content">
        <div className="mission-text-wrapper">
          <p className="mission-text animate-up">{tr.missionBody}</p>
        </div>
        <div className="mission-hole-mobile-wrap">
          <Image
            src="/missionhole.png"
            alt=""
            aria-hidden={true}
            className="mission-hole-mobile"
            width={800}
            height={800}
            sizes="(max-width: 768px) 80vw, 0px"
          />
        </div>
        <div className="mission-approach animate-up">
          <p className="mission-approach-title">{tr.missionApproachTitle}</p>
          <div className="mission-approach-items">
            {tr.missionApproachItems.map((item, i) => (
              <p key={i} className="mission-approach-item">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

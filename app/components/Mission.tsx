import { t, type Lang } from "../translations";

interface MissionProps {
  lang: Lang;
}

export default function Mission({ lang }: MissionProps) {
  const tr = t[lang];

  return (
    <section id="mission" className="section section-gap mission-section">
      <img
        src="/missionhole.png"
        alt=""
        role="presentation"
        className="mission-hole-absolute"
      />
      <h2 className="section-title animate-up">{tr.missionTitle}</h2>
      <div className="mission-content">
        <div className="mission-text-wrapper">
          <p className="mission-text animate-up">{tr.missionBody}</p>
        </div>
        <div className="mission-hole-mobile-wrap">
          <img
            src="/missionhole.png"
            alt=""
            role="presentation"
            className="mission-hole-mobile"
          />
        </div>
        <div className="mission-approach">
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

import { structureIcons } from "../data";
import { t, type Lang } from "../translations";

interface StructureProps {
  lang: Lang;
}

export default function Structure({ lang }: StructureProps) {
  const tr = t[lang];

  return (
    <section id="structure" className="section section-gap">
      <div className="structure-section">
        <div className="structure-left">
          <h2 className="section-title animate-up">{tr.structureTitle}</h2>
          <div className="structure-items" data-animate-group>
            {tr.structureItems.map((item, i) => (
              <div key={item.title} className="structure-item animate-up">
                <div className="structure-item-header">
                  <img
                    className="structure-item-icon"
                    src={structureIcons[i]}
                    alt={item.title}
                  />
                  <span className="structure-item-title">{item.title}</span>
                </div>
                <p className="structure-item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="structure-right animate-up">
          <div className="concentric-circles">
            <div className="circle circle-outer" />
            <div className="circle circle-mid" />
            <div className="circle circle-inner" />
            <div className="circle-label circle-label-top">{tr.circleLabels[0]}</div>
            <div className="circle-label circle-label-mid">{tr.circleLabels[1]}</div>
            <div className="circle-label circle-label-bottom">{tr.circleLabels[2]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

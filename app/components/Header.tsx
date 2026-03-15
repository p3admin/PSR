"use client";
import { IMG_PSR_LOGO, IMG_PSR_LOGO_ENG } from "../data";
import { t, type Lang } from "../translations";

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  const { menuItems } = t[lang];
  const languages: Lang[] = ["ru", "en"];
  const langLabel: Record<Lang, string> = { ru: "Русский", en: "English" };

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="https://psr.group/" target="_blank" rel="noopener noreferrer">
          <img src={lang === "en" ? IMG_PSR_LOGO_ENG : IMG_PSR_LOGO} alt="ПСР" />
        </a>
      </div>
      <nav className="nav" aria-label="Основная навигация">
        {menuItems.map(({ label, sectionId }) => (
          <button
            key={sectionId}
            className="nav-item"
            aria-label={`Перейти к разделу ${label}`}
            onClick={() => scrollTo(sectionId)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="lang-wrapper">
        <button className="lang-btn" aria-label="Выбрать язык">
          {langLabel[lang]}
          <span className="lang-arrow" aria-hidden="true" />
        </button>
        <div className="lang-dropdown">
          {languages.map((l) => (
            <button
              key={l}
              className={`lang-option${lang === l ? " active" : ""}`}
              onClick={() => onLangChange(l)}
            >
              {langLabel[l]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

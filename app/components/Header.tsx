"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IMG_PSR_LOGO, IMG_PSR_LOGO_ENG } from "../data";
import { t, type Lang } from "../translations";
import styles from "./Header.module.css";

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  const { menuItems } = t[lang];
  const languages: Lang[] = ["ru", "en"];
  const langLabel: Record<Lang, string> = { ru: "Русский", en: "English" };
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" }), 10);
  };

  useEffect(() => {
    const ids = menuItems.map((item) => item.sectionId);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          } else if (entry.boundingClientRect.top > 0) {
            setActiveSection((prev) => prev === id ? "" : prev);
          }
        },
        { rootMargin: "-15% 0px -80% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [menuItems]);

  return (
    <div className={styles.headerBar}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="https://psr.group/" target="_blank" rel="noopener noreferrer">
            <Image src={lang === "en" ? IMG_PSR_LOGO_ENG : IMG_PSR_LOGO} alt="ПСР" width={88} height={30} priority />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Основная навигация">
          {menuItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              className={`${styles.navItem}${activeSection === sectionId ? " " + styles.navItemActive : ""}`}
              aria-label={`Перейти к разделу ${label}`}
              onClick={() => handleScrollTo(sectionId)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop lang picker */}
        <div className={styles.langWrapper}>
          <button className={styles.langBtn} aria-label="Выбрать язык">
            {langLabel[lang]}
            <span className={styles.langArrow} aria-hidden="true" />
          </button>
          <div className={styles.langDropdown}>
            {languages.map((l) => (
              <button
                key={l}
                className={`${styles.langOption}${lang === l ? " " + styles.active : ""}`}
                onClick={() => onLangChange(l)}
              >
                {langLabel[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`${styles.burgerLine}${menuOpen ? " " + styles.burgerLineTop : ""}`} />
          <span className={`${styles.burgerLine}${menuOpen ? " " + styles.burgerLineMid : ""}`} />
          <span className={`${styles.burgerLine}${menuOpen ? " " + styles.burgerLineBot : ""}`} />
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {menuItems.map(({ label, sectionId }) => (
              <button
                key={sectionId}
                className={`${styles.mobileNavItem}${activeSection === sectionId ? " " + styles.navItemActive : ""}`}
                onClick={() => handleScrollTo(sectionId)}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className={styles.mobileLang}>
            {languages.map((l) => (
              <button
                key={l}
                className={`${styles.mobileLangOption}${lang === l ? " " + styles.active : ""}`}
                onClick={() => { onLangChange(l); setMenuOpen(false); }}
              >
                {langLabel[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

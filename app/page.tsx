"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles/page.css";
import type { TabKey } from "./data";
import type { Lang } from "./translations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Structure from "./components/Structure";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function PSRLanding() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const group = el.closest("[data-animate-group]");
            const siblings = group
              ? Array.from(group.querySelectorAll(".animate-up"))
              : [el];
            const index = siblings.indexOf(el);
            setTimeout(() => el.classList.add("visible"), index * 120);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".animate-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
    setActiveTab("all");
  };

  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      const top = form.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="psr-page-wrapper">
      <div className="psr-root">
        <Header lang={lang} onLangChange={handleLangChange} />
        <Hero lang={lang} onScrollToForm={scrollToForm} />
        <Mission lang={lang} />
        <Structure lang={lang} />
        <Competencies lang={lang} />
        <Projects lang={lang} activeTab={activeTab} onTabChange={setActiveTab} />
        <Footer lang={lang} />
      </div>
      <Image
        src="/rectangle.png"
        alt=""
        aria-hidden={true}
        className="footer-rect-bg"
        width={1440}
        height={400}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

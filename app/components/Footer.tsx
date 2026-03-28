"use client";
import Image from "next/image";
import { IMG_PSR_LOGO, IMG_PSR_LOGO_ENG, IMG_VECTOR_PHONE } from "../data";
import { t, type Lang } from "../translations";
import ContactForm from "./ContactForm";
import LegalCard from "./LegalCard";
import styles from "./Footer.module.css";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const tr = t[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ContactForm lang={lang} />
        <div className={`${styles.contactColumn} animate-up`}>
          <div className={styles.contactCard}>
            <div className={styles.contactCardHeader}>
              <Image className={styles.contactCardIcon} src={IMG_VECTOR_PHONE} alt="Телефон" width={24} height={24} />
              <span className={styles.contactCardTitle}>MAX</span>
            </div>
            <a href="tel:+79853669398" className={styles.contactCardValue}>+7 985 366 93 98</a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactEmailList}>
              <span className={styles.contactCardTitle}>{tr.formEmail}</span>
              <a href="mailto:business@psr.group" className={styles.contactCardValue}>business@psr.group</a>
              <a href="mailto:marketing@psr.group" className={styles.contactCardValue}>marketing@psr.group</a>
              <a href="mailto:technology@psr.group" className={styles.contactCardValue}>technology@psr.group</a>
            </div>
          </div>
          <LegalCard lang={lang} />
        </div>
      </div>
      <div className={`${styles.footerBottom} animate-up`}>
        <div className={styles.footerLogoSection}>
          <a href="https://psr.group/" target="_blank" rel="noopener noreferrer">
            <Image src={lang === "en" ? IMG_PSR_LOGO_ENG : IMG_PSR_LOGO} alt="ПСР" className={styles.footerLogo} width={88} height={30} />
          </a>
          <span className={styles.footerCopyright}>{tr.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import { t, type Lang } from "../translations";
import styles from "./LegalCard.module.css";

interface LegalCardProps {
  lang: Lang;
}

export default function LegalCard({ lang }: LegalCardProps) {
  const tr = t[lang];
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.legalCard}>
      <div className={styles.legalHeader}>
        <span className={styles.legalTitle}>{tr.legalTitle}</span>
        <button
          className={styles.legalToggle}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="legal-body"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" aria-hidden="true">
            <circle cx="13.0435" cy="13.0434" r="12.6935" transform="rotate(-90 13.0435 13.0434)" stroke="#E0DDFE" strokeOpacity="0.4" strokeWidth="0.7" />
            <g
              className={`${styles.legalToggleArrow}${open ? " " + styles.open : ""}`}
              style={{ transformOrigin: "13.0435px 13.0434px" }}
            >
              <path d="M11.2552 5.69957L5.74796 0.482178L0.240711 5.69957" stroke="#E0DDFE" strokeWidth="0.7" transform="translate(7.295, 10.5)" />
            </g>
          </svg>
        </button>
      </div>
      <div id="legal-body" className={`${styles.legalBody}${open ? " " + styles.open : ""}`}>
        <div className={styles.legalBodyInner}>
          <p className={styles.legalText}>{tr.legalText}</p>
          <div className={styles.legalDivider} />
          <div className={styles.legalCompanyInfo}>
            <span>{tr.companyMC.name}</span>
            <span>ОГРН {tr.companyMC.ogrn}</span>
            <span>ИНН {tr.companyMC.inn}</span>
            <span>{tr.companyMC.address}</span>
          </div>
          <div className={styles.legalDivider} />
          <div className={styles.legalCompanyInfo}>
            <span>{tr.companySDB.name}</span>
            <span>ОГРН {tr.companySDB.ogrn}</span>
            <span>ИНН {tr.companySDB.inn}</span>
            <span>{tr.companySDB.address}</span>
          </div>
          <div className={styles.legalDivider} />
          <div className={styles.legalLinks}>
            <a href="/agreement">{tr.linkOffer}</a>
            <a href="/privacy_policy">{tr.linkPrivacy}</a>
          </div>
          <div className={styles.legalMdWrapper}>
            <span className={styles.legalMdAccreditation}>АО-20260220-36999953627-3 от 17.03.2026</span>
            <Image src="/md.png" alt="МИР badge" width={145} height={31} className={styles.legalMdBadge} />
          </div>
        </div>
      </div>
    </div>
  );
}

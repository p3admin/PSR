"use client";
import { useState } from "react";
import { IMG_PSR_LOGO, IMG_PSR_LOGO_ENG, IMG_VECTOR_PHONE } from "../data";
import { t, type Lang } from "../translations";

interface FooterProps {
  lang: Lang;
}

function ContactForm({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [formSuccess, setFormSuccess] = useState(false);
  const [formName, setFormName] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!formEmail) {
      setError(tr.formErrorEmail);
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          company: formCompany,
          email: formEmail,
          message: formMessage,
        }),
      });
      if (!res.ok) throw new Error("server error");
      setFormSuccess(true);
      setFormName("");
      setFormCompany("");
      setFormEmail("");
      setFormMessage("");
    } catch {
      setError(tr.formErrorServer);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {formSuccess && (
        <div className="success-overlay">
          <div className="success-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <g clipPath="url(#clip0_163_883)">
                <path
                  d="M23.9998 2.66663C19.7805 2.66663 15.6559 3.9178 12.1477 6.26194C8.63943 8.60608 5.90509 11.9379 4.29042 15.836C2.67575 19.7342 2.25328 24.0236 3.07643 28.1619C3.89958 32.3001 5.93138 36.1014 8.9149 39.0849C11.8984 42.0684 15.6997 44.1002 19.8379 44.9234C23.9762 45.7465 28.2656 45.3241 32.1638 43.7094C36.0619 42.0947 39.3937 39.3604 41.7379 35.8521C44.082 32.3439 45.3332 28.2193 45.3332 24C45.3332 18.342 43.0856 12.9158 39.0848 8.91501C35.084 4.91424 29.6578 2.66663 23.9998 2.66663ZM23.9998 42.6666C20.3079 42.6666 16.6989 41.5718 13.6292 39.5207C10.5595 37.4696 8.16693 34.5543 6.7541 31.1434C5.34126 27.7325 4.9716 23.9793 5.69185 20.3583C6.41211 16.7373 8.18994 13.4112 10.8005 10.8006C13.4111 8.19005 16.7372 6.41222 20.3582 5.69197C23.9791 4.97171 27.7324 5.34137 31.1433 6.75421C34.5542 8.16704 37.4695 10.5596 39.5206 13.6293C41.5717 16.699 42.6665 20.308 42.6665 24C42.6665 28.9507 40.6998 33.6986 37.1992 37.1993C33.6985 40.7 28.9506 42.6666 23.9998 42.6666Z"
                  fill="#1B0349"
                />
                <path
                  d="M37.3334 16.1333C37.0836 15.885 36.7457 15.7456 36.3934 15.7456C36.0412 15.7456 35.7032 15.885 35.4534 16.1333L20.6534 30.8667L12.6534 22.8667C12.4094 22.6032 12.0708 22.4475 11.7119 22.4337C11.3531 22.42 11.0035 22.5493 10.7401 22.7933C10.4766 23.0373 10.3209 23.376 10.3071 23.7348C10.2934 24.0936 10.4227 24.4432 10.6667 24.7067L20.6534 34.6667L37.3334 18.0267C37.4584 17.9027 37.5576 17.7552 37.6253 17.5928C37.693 17.4303 37.7278 17.256 37.7278 17.08C37.7278 16.904 37.693 16.7297 37.6253 16.5672C37.5576 16.4047 37.4584 16.2573 37.3334 16.1333Z"
                  fill="#1B0349"
                />
              </g>
              <defs>
                <clipPath id="clip0_163_883">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="success-texts">
              <span className="success-title">{tr.successTitle}</span>
              <span className="success-desc">{tr.successDesc}</span>
            </div>
            <button
              className="success-close"
              onClick={() => setFormSuccess(false)}
            >
              {tr.successClose}
            </button>
          </div>
        </div>
      )}

      <div id="contact-form" className="form-card animate-up">
        <h3 className="form-title">{tr.formTitle}</h3>
        <div className="form-fields">
          <div className="form-group">
            <label className="form-label">{tr.formName}</label>
            <input
              className="form-input"
              placeholder={tr.formName}
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{tr.formCompany}</label>
            <input
              className="form-input"
              placeholder={tr.formCompanyPlaceholder}
              value={formCompany}
              onChange={(e) => setFormCompany(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              required
              placeholder="example@company.com"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{tr.formInquiry}</label>
            <textarea
              className="form-input form-textarea"
              placeholder={tr.formMessagePlaceholder}
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
            />
          </div>
        </div>
        {error && <p className="form-error">{error}</p>}
        <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? tr.formSubmitting : tr.formSubmit}
        </button>
      </div>
    </>
  );
}

export default function Footer({ lang }: FooterProps) {
  const tr = t[lang];
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <ContactForm lang={lang} />
        <div className="contact-column animate-up">
          <div className="contact-card">
            <div className="contact-card-header">
              <img
                className="contact-card-icon"
                src={IMG_VECTOR_PHONE}
                alt="Телефон"
              />
              <span className="contact-card-title">MAX</span>
            </div>
            <p className="contact-card-value">+ 7 495 555 55 55</p>
          </div>
          <div className="contact-card">
            <div className="contact-email-list">
              <span className="contact-card-title">E-mail</span>
              <a href="mailto:business@psr.group" className="contact-card-value">
                business@psr.group
              </a>
              <a href="mailto:creative@psr.group" className="contact-card-value">
                creative@psr.group
              </a>
              <a href="mailto:technology@psr.group" className="contact-card-value">
                technology@psr.group
              </a>
            </div>
          </div>
          <div className="legal-card">
            <div className="legal-header">
              <span className="legal-title">{tr.legalTitle}</span>
              <button
                className="legal-toggle"
                onClick={() => setLegalOpen((o) => !o)}
                aria-expanded={legalOpen}
                aria-controls="legal-body"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="13.0435"
                    cy="13.0434"
                    r="12.6935"
                    transform="rotate(-90 13.0435 13.0434)"
                    stroke="#E0DDFE"
                    strokeOpacity="0.4"
                    strokeWidth="0.7"
                  />
                  <g
                    className={`legal-toggle-arrow${legalOpen ? " open" : ""}`}
                    style={{ transformOrigin: "13.0435px 13.0434px" }}
                  >
                    <path
                      d="M11.2552 5.69957L5.74796 0.482178L0.240711 5.69957"
                      stroke="#E0DDFE"
                      strokeWidth="0.7"
                      transform="translate(7.295, 10.5)"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div
              id="legal-body"
              className={`legal-body${legalOpen ? " open" : ""}`}
            >
              <div className="legal-body-inner">
                <p className="legal-text">{tr.legalText}</p>
                <div className="legal-divider" />
                <div className="legal-company-info">
                  <span>{tr.companyMC.name}</span>
                  <span>{tr.companyMC.inn}</span>
                  <span>{tr.companyMC.address}</span>
                </div>
                <div className="legal-divider" />
                <div className="legal-company-info">
                  <span>{tr.companySDB.name}</span>
                  <span>{tr.companySDB.inn}</span>
                  <span>{tr.companySDB.address}</span>
                </div>
                <div className="legal-divider" />
                <div className="legal-links">
                  <a href="/agreement">{tr.linkOffer}</a>
                  <a href="/privacy_policy">{tr.linkPrivacy}</a>
                </div>
                <img
                  src="/md.png"
                  alt="МИР badge"
                  width={145}
                  height={31}
                  className="legal-md-badge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-section">
          <a href="https://psr.group/" target="_blank" rel="noopener noreferrer">
            <img src={lang === "en" ? IMG_PSR_LOGO_ENG : IMG_PSR_LOGO} alt="ПСР" className="footer-logo" />
          </a>
          <span className="footer-copyright">{tr.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

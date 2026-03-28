"use client";
import { t, type Lang } from "../translations";
import { useContactForm } from "../hooks/useContactForm";
import SuccessModal from "./SuccessModal";
import shared from "../styles/shared.module.css";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  lang: Lang;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const tr = t[lang];
  const { fields, setField, consent, setConsent, loading, error, success, setSuccess, handleSubmit } =
    useContactForm();

  return (
    <>
      {success && <SuccessModal lang={lang} onClose={() => setSuccess(false)} />}

      <div id="contact-form" className={`${styles.formCard} animate-up`}>
        <h3 className={styles.formTitle}>{tr.formTitle}</h3>
        <div className={styles.formFields}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{tr.formName}</label>
            <input
              className={styles.formInput}
              placeholder={tr.formName}
              value={fields.name}
              onChange={setField("name")}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{tr.formCompany}</label>
            <input
              className={styles.formInput}
              placeholder={tr.formCompanyPlaceholder}
              value={fields.company}
              onChange={setField("company")}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{tr.formEmail}</label>
            <input
              className={styles.formInput}
              type="text"
              placeholder={tr.formEmailPlaceholder}
              value={fields.email}
              onChange={setField("email")}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{tr.formInquiry}</label>
            <textarea
              className={`${styles.formInput} ${styles.formTextarea}`}
              placeholder={tr.formMessagePlaceholder}
              value={fields.message}
              onChange={setField("message")}
            />
          </div>
        </div>
        <label className={styles.formConsent}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            {tr.formConsent}{" "}
            <a href="/privacy_policy" target="_blank" rel="noopener noreferrer">
              {tr.formConsentLink}
            </a>
          </span>
        </label>
        {error && <p className={styles.formError}>{error}</p>}
        <button
          className={shared.btnPrimary}
          onClick={() => handleSubmit({ email: tr.formErrorEmail, consent: tr.formErrorConsent, server: tr.formErrorServer })}
          disabled={loading}
        >
          {loading ? tr.formSubmitting : tr.formSubmit}
        </button>
      </div>
    </>
  );
}

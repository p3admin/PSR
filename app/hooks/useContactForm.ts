import { useState } from "react";

interface FormFields {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface UseContactFormReturn {
  fields: FormFields;
  setField: (key: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  consent: boolean;
  setConsent: (v: boolean) => void;
  loading: boolean;
  error: string;
  success: boolean;
  setSuccess: (v: boolean) => void;
  handleSubmit: (errors: { email: string; consent: string; server: string }) => Promise<void>;
}

export function useContactForm(): UseContactFormReturn {
  const [fields, setFields] = useState<FormFields>({ name: "", company: "", email: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const setField =
    (key: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (errors: { email: string; consent: string; server: string }) => {
    if (!fields.email) { setError(errors.email); return; }
    if (!consent)      { setError(errors.consent); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("server error");
      setSuccess(true);
      setFields({ name: "", company: "", email: "", message: "" });
    } catch {
      setError(errors.server);
    } finally {
      setLoading(false);
    }
  };

  return { fields, setField, consent, setConsent, loading, error, success, setSuccess, handleSubmit };
}

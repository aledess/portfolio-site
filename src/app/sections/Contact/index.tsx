"use client";

import { useState } from "react";
import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import Socialbar from "@/app/components/ui/Socialbar";
import Toast from "@components/ui/Toast";
import styles from "./styles.module.scss";
import type { ContactData } from "@schemas/contact";
import type { SocialData } from "@schemas/social";
import { useTranslation } from "@/app/i18n/useTranslation";

const contactTitleLoop = [
  "Let’s work together",
  "Start a project",
  "Get in touch",
  "Say hello",
];

type Props = {
  data: ContactData;
  socialData: SocialData;
  lang: "it" | "en";
};

export default function Contact({ data, socialData, lang }: Props) {
  const t = useTranslation(lang);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [toast, setToast] = useState<{
    message: string;
    type?: "success" | "error" | "loading";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setToast({ message: t("contact.toastSending"), type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setToast({ message: t("contact.toastSuccess"), type: "success" });
      } else {
        setStatus("error");
        setToast({ message: t("contact.toastError"), type: "error" });
      }
    } catch (error) {
      console.error("Errore durante l'invio:", error);
      setStatus("error");
      setToast({ message: "Errore durante l'invio", type: "error" });
    }
  };

  return (
    <Section id="contact" titleLoop={contactTitleLoop} full>
      <div className={styles.contact__sidebar}>
        <Socialbar items={socialData.items} layout="sidebar" />
      </div>
      <Text
        as="p"
        variant="body"
        color="secondary"
        className={styles.contact__intro}
      >
        {data.description}
      </Text>

      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="name">
            {t("contact.name")}
          </Text>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="email">
            {t("contact.email")}
          </Text>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="message">
            {t("contact.message")}
          </Text>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.contact__button}
          disabled={status === "sending"}
        >
          <Text as="span" variant="label" color="inherit">
            {status === "sending" && t("contact.sending")}
            {status === "sent" && t("contact.sent")}
            {status === "error" && t("contact.error")}
            {status === "idle" && t("contact.send")}
          </Text>
        </button>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => {
            setToast(null);
            setStatus("idle");
          }}
        />
      )}
    </Section>
  );
}

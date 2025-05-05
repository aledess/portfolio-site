"use client";

import { useState } from "react";
import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import Toast from "@components/ui/Toast";
import styles from "./styles.module.scss";
import type { ContactData } from "@schemas/contact";
import { useTranslation } from "@/app/i18n/useTranslation";
import { AnimatePresence } from "framer-motion";

type Props = {
  data: ContactData;
  lang: "it" | "en";
};

export default function Contact({ data, lang }: Props) {
  const t = useTranslation(lang);
  const { sectionTitle, description } = data;

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

        setTimeout(() => {
          setToast(null);
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
        setToast({ message: t("contact.toastError"), type: "error" });

        setTimeout(() => {
          setToast(null);
          setStatus("idle");
        }, 4000);
      }
    } catch {
      setStatus("error");
      setToast({ message: t("contact.toastError"), type: "error" });

      setTimeout(() => {
        setToast(null);
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <Section id="contact" titleLoop={sectionTitle}>
      {description && (
        <Text
          as="p"
          variant="body"
          color="secondary"
          className={styles.contact__intro}
        >
          {description}
        </Text>
      )}
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <div className={styles.contact__field}>
          <div className={styles.contact__floating}>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className={form.name ? styles.filled : ""}
            />
            <Text as="label" htmlFor="name" variant="label">
              {t("contact.name")}
            </Text>
          </div>
        </div>

        <div className={styles.contact__field}>
          <div className={styles.contact__floating}>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className={form.email ? styles.filled : ""}
            />
            <Text as="label" htmlFor="email" variant="label">
              {t("contact.email")}
            </Text>
          </div>
        </div>

        <div className={styles.contact__field}>
          <div className={styles.contact__floating}>
            <textarea
              id="message"
              name="message"
              rows={10}
              value={form.message}
              onChange={handleChange}
              required
              className={form.message ? styles.filled : ""}
            />
            <Text as="label" htmlFor="message" variant="label">
              {t("contact.message")}
            </Text>
          </div>
        </div>

        <button
          type="submit"
          className={styles.contact__button}
          disabled={
            status === "sending" ||
            !form.name.trim() ||
            !form.email.trim() ||
            !form.message.trim()
          }
        >
          <Text as="span" variant="label" color="inherit">
            {t("contact.send")}
          </Text>
        </button>
      </form>
      <AnimatePresence mode="wait">
        {toast && (
          <Toast
            key={toast.message} // importante per transizione unica per messaggio
            message={toast.message}
            type={toast.type}
            onClose={() => {
              setToast(null);
              setStatus("idle");
            }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}

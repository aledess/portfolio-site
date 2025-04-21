"use client";

import { useState } from "react";
import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import Toast from "@components/ui/Toast";
import styles from "./styles.module.scss";
import { ContactData } from "@schemas/contact";

const contactTitleLoop = [
  "Let’s work together",
  "Start a project",
  "Get in touch",
  "Say hello",
];

type Props = {
  data: ContactData;
};

export default function Contact({ data }: Props) {
  console.log("Contact Section Data", data);

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
    setToast({ message: "Invio in corso...", type: "loading" });

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
        setToast({
          message: "Messaggio inviato con successo!",
          type: "success",
        });
      } else {
        setStatus("error");
        setToast({ message: "Errore durante l'invio", type: "error" });
      }
    } catch (error) {
      console.error("Errore durante l'invio:", error);
      setStatus("error");
      setToast({ message: "Errore durante l'invio", type: "error" });
    }
  };

  return (
    <Section id="contact" titleLoop={contactTitleLoop}>
      <Text
        as="p"
        variant="body"
        color="secondary"
        className={styles.contact__intro}
      >
        Want to collaborate or just say hi? Fill out the form below and I’ll get
        back to you soon.
      </Text>

      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="name">
            Name
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
            Email
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
            Message
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
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message Sent!"}
            {status === "error" && "Error, try again"}
            {status === "idle" && "Send Message"}
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

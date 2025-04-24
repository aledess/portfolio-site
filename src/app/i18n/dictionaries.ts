export const dictionaries = {
  it: {
    contact: {
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      send: "Invia",
      sending: "Invio in corso...",
      sent: "Messaggio inviato!",
      error: "Errore, riprova",
    },
    navigation: {
      home: "Home",
      skills: "Skills",
      experience: "Esperienza",
      works: "Progetti",
      about: "Chi sono",
      contact: "Contatti",
    },
  },
  en: {
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      sent: "Message Sent!",
      error: "Error, try again",
    },
    navigation: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      works: "Works",
      about: "About",
      contact: "Contact",
    },
  },
} as const;

export type Language = keyof typeof dictionaries;

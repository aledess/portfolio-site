export const dictionaries = {
  it: {
    contact: {
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      send: "Invia",
      toastSending: "Invio in corso...",
      toastSuccess: "Messaggio inviato con successo!",
      toastError: "Errore durante l'invio, riprova",
    },
    navigation: {
      home: "Home",
      skills: "Skills",
      experience: "Esperienza",
      works: "Progetti",
      about: "Chi sono",
      contact: "Contatti",
    },
    carousel: {
      next: "Avanti",
      prev: "Indietro",
      swipe: "Swipe",
      replay: "Rivedi",
    },
    maintenance: {
      title: "Sito in manutenzione",
      subtitle: "Torno presto online, promesso!",
    },
  },
  en: {
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      toastSending: "Sending your message...",
      toastSuccess: "Message sent successfully!",
      toastError: "Error while sending. Please try again.",
    },
    navigation: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      works: "Works",
      about: "About",
      contact: "Contact",
    },
    carousel: {
      next: "Next",
      prev: "Back",
      swipe: "Swipe",
      replay: "Rewatch",
    },
    maintenance: {
      title: "Site under maintenance",
      subtitle: "I'll be back online soon, I promise!",
    },
  },
} as const;

export type Language = keyof typeof dictionaries;

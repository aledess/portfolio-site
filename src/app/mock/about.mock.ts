import type { AboutData } from "@schemas/about";

export const mockAboutIT: AboutData = {
  sectionTitle: ["Chi sono", "Diario illustrato", "La mia storia"],
  steps: [
    {
      title: "Diploma informatico",
      image: {
        asset: { url: "/images/about/step1.png" },
        alt: "Diploma informatico",
      },
      box1: "Diploma preso. Avevo più virus nel PC che idee sul futuro.",
      box2: "In effetti sapevo più formattare che programmare.",
    },
    {
      title: "Viaggi mentali",
      image: {
        asset: { url: "/images/about/step2.png" },
        alt: "Viaggi mentali",
      },
      box1: "Viaggiare con la testa non costa nulla. Ma ti cambia uguale.",
      box2: "Scoprivo luoghi senza spostarmi. Dentro ero già mezzo islandese.",
    },
    {
      title: "Passione nordica",
      image: {
        asset: { url: "/images/about/step3.png" },
        alt: "Passione nordica",
      },
      box1: "Voglio rinascere islandese. Freddo, silenzio, design. Volevo essere scandinavo inside.",
      box2: "Non era una meta geografica. Era un posto mentale.",
    },
    {
      title: "Vita che si inceppa",
      image: {
        asset: { url: "/images/about/step4.png" },
        alt: "Vita che si inceppa",
      },
      box1: "La vita ogni tanto ti dice: retry later.",
      box2: "E lì ho messo in pausa tutto. O forse era crash.",
    },
    {
      title: "Arrivano gli amici a quattro zampe",
      image: {
        asset: { url: "/images/about/step5.png" },
        alt: "Cani",
      },
      box1: "Poi sono arrivati loro. Due debugger emotivi.",
      box2: "Nessun giudizio. Solo zampate giuste. E mi hanno fatto risentire a casa.",
    },
    {
      title: "Ritorno al coding",
      image: {
        asset: { url: "/images/about/step6.png" },
        alt: "Coding",
      },
      box1: "Coding: round two. Con meno paura e più tasti premuti.",
      box2: "Cercavo una forma. E ho trovato anche una funzione.",
    },
    {
      title: "Ce l’ho fatta",
      image: {
        asset: { url: "/images/about/step7.png" },
        alt: "Lavoro come developer",
      },
      box1: "Un giorno ho pensato: e se fosse davvero il mio lavoro?",
      box2: "Spoiler: lo è diventato.",
    },
    {
      title: "Sogni e realtà",
      image: {
        asset: { url: "/images/about/step8.png" },
        alt: "Islanda e Artù",
      },
      box1: "Continuo a sognare l’Islanda. Ma senza fretta.",
      box2: "La Scandinavia è ancora lì, nel cassetto. Ma la ciotola di Artù è qui, sul pavimento.",
    },
    {
      title: "Passioni e corsa",
      image: {
        asset: { url: "/images/about/step9.png" },
        alt: "Corsa e sistema solare",
      },
      box1: "Leggo Hornby e Murakami, guardo *Lost* ma non mi perdo, progetto case.",
      box2: "A volte corro. E altre studio il sistema solare. Ma non per scappare.",
    },
  ],
};

export const mockAboutEN: AboutData = {
  sectionTitle: ["About Me", "Illustrated Diary", "My Story"],
  steps: [
    {
      title: "IT Diploma",
      image: {
        asset: { url: "/images/about/step1.png" },
        alt: "IT Diploma",
      },
      box1: "I got my diploma. More viruses on my PC than ideas in my head.",
      box2: "Honestly, I was better at formatting than coding.",
    },
    {
      title: "Mental travels",
      image: {
        asset: { url: "/images/about/step2.png" },
        alt: "Mental travels",
      },
      box1: "Traveling in your mind costs nothing. But it still changes you.",
      box2: "I explored places without moving. Inside, I was already half Icelandic.",
    },
    {
      title: "Nordic passion",
      image: {
        asset: { url: "/images/about/step3.png" },
        alt: "Nordic passion",
      },
      box1: "I wanted to be born Icelandic. Cold, quiet, and design-driven.",
      box2: "It wasn’t a place on a map. It was a state of mind.",
    },
    {
      title: "Life glitch",
      image: {
        asset: { url: "/images/about/step4.png" },
        alt: "Life glitch",
      },
      box1: "Sometimes life just says: retry later.",
      box2: "So I paused everything. Or maybe it crashed.",
    },
    {
      title: "Four-legged friends",
      image: {
        asset: { url: "/images/about/step5.png" },
        alt: "Dogs",
      },
      box1: "Then they came. Two emotional debuggers.",
      box2: "No judgment. Just the right paw at the right time.",
    },
    {
      title: "Back to coding",
      image: {
        asset: { url: "/images/about/step6.png" },
        alt: "Coding",
      },
      box1: "Coding: round two. With less fear and more keystrokes.",
      box2: "I was looking for a shape. I found a function too.",
    },
    {
      title: "Made it",
      image: {
        asset: { url: "/images/about/step7.png" },
        alt: "Developer job",
      },
      box1: "One day I thought: what if this really was my job?",
      box2: "Spoiler: it is now.",
    },
    {
      title: "Dreams and reality",
      image: {
        asset: { url: "/images/about/step8.png" },
        alt: "Iceland and Artù",
      },
      box1: "I still dream of Iceland. No rush though.",
      box2: "Scandinavia's still in the drawer. But Artù's bowl is on the floor.",
    },
    {
      title: "Passions and running",
      image: {
        asset: { url: "/images/about/step9.png" },
        alt: "Running and solar system",
      },
      box1: "I read Hornby and Murakami, watch *Lost* but don’t get lost, and sketch houses.",
      box2: "Sometimes I run. Other times I study the solar system. But not to escape.",
    },
  ],
};

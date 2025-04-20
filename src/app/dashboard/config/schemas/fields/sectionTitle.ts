import { defineField } from "sanity";

export const sectionTitle = defineField({
  name: "sectionTitle",
  title: "Titolo della sezione",
  description: "Lista di titoli localizzati per animazione",
  type: "array",
  of: [{ type: "string" }],
  validation: (Rule) =>
    Rule.required().min(1).error("Inserisci almeno un titolo"),
});

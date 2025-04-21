// ./schemas/experience.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "experience",
  title: "Esperienza",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Titolo della sezione",
      description: "Lista di titoli localizzati (es. per animazione)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().min(1).error("Inserisci almeno un titolo"),
    }),
    defineField({
      name: "items",
      title: "Esperienze",
      type: "array",
      of: [
        {
          type: "object",
          name: "experienceItem",
          fields: [
            defineField({
              name: "date",
              title: "Periodo",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "company",
              title: "Azienda",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Descrizione",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Experience" };
    },
  },
});

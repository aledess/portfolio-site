import { defineType, defineField } from "sanity";
import { sectionTitle } from "./fields/sectionTitle";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "experience",
  title: "Esperienza",
  type: "document",
  fields: [
    sectionTitle,
    language,
    defineField({
      name: "items",
      title: "Esperienze",
      type: "array",
      validation: (Rule) =>
        Rule.required().min(1).error("Aggiungi almeno un'esperienza"),
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
      return { title: "💼 Experience" };
    },
  },
  ...previewField,
});

// ./schemas/about.ts
import { defineType, defineField } from "sanity";
import { sectionTitle } from "./fields/sectionTitle";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    sectionTitle,
    language,
    defineField({
      name: "description",
      title: "Descrizione generale",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.required().error("La descrizione è obbligatoria"),
    }),
    defineField({
      name: "items",
      title: "Hobby e Interessi",
      type: "array",
      of: [
        {
          type: "object",
          name: "aboutItem",
          fields: [
            defineField({
              name: "title",
              title: "Titolo",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Immagine",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: "alt",
                  title: "Testo alternativo (alt)",
                  type: "string",
                  description:
                    "Descrizione dell'immagine per SEO e accessibilità",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                }),
              ],
            }),
            defineField({
              name: "height",
              title: "Altezza in pixel (per layout masonry)",
              type: "number",
              validation: (Rule) =>
                Rule.required().positive().error("Inserisci un'altezza valida"),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About" };
    },
  },
  ...previewField,
});

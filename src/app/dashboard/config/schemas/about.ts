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
    }),
    defineField({
      name: "images",
      title: "Immagini",
      type: "array",
      of: [
        {
          type: "object",
          name: "aboutImage",
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
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
                  validation: (Rule) =>
                    Rule.required().error("L'alt è obbligatorio"),
                }),
              ],
            }),
            defineField({
              name: "height",
              title: "Altezza desktop (px)",
              type: "number",
              validation: (Rule) =>
                Rule.required().positive().error("Inserisci un'altezza valida"),
            }),
            defineField({
              name: "heightMobile",
              title: "Altezza mobile (px)",
              type: "number",
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

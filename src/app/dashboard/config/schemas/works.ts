import { defineType, defineField } from "sanity";
import { sectionTitle } from "./fields/sectionTitle";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    sectionTitle,
    language,
    defineField({
      name: "items",
      title: "Progetti",
      type: "array",
      of: [
        {
          type: "object",
          name: "workItem",
          fields: [
            defineField({
              name: "title",
              title: "Titolo",
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
            defineField({
              name: "images",
              title: "Immagini",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    defineField({
                      name: "alt",
                      title: "Testo alternativo (alt)",
                      type: "string",
                      validation: (Rule) =>
                        Rule.required().error("L'alt è obbligatorio"),
                    }),
                  ],
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            }),

            defineField({
              name: "tech",
              title: "Tecnologie utilizzate",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Works" };
    },
  },
  ...previewField,
});

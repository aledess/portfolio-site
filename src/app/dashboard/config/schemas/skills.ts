import { defineType, defineField } from "sanity";
import { sectionTitle } from "./fields/sectionTitle";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    sectionTitle,
    language,
    defineField({
      name: "items",
      title: "Elenco Skill",
      type: "array",
      of: [
        {
          type: "object",
          name: "skillItem",
          fields: [
            defineField({
              name: "label",
              title: "Nome",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Il nome è obbligatorio"),
            }),
            defineField({
              name: "light",
              title: "Icona per tema chiaro",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error("L'alt è obbligatorio"),
                }),
              ],
            }),
            defineField({
              name: "dark",
              title: "Icona per tema scuro",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error("L'alt è obbligatorio"),
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "🛠️ Skills" };
    },
  },
  ...previewField,
});

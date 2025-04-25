import { defineType, defineField } from "sanity";
// import type { Rule } from "sanity";
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
            }),
            defineField({
              name: "light",
              title: "Icona per tema chiaro",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                },
              ],
            }),
            defineField({
              name: "dark",
              title: "Icona per tema scuro",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                },
              ],
            }),
            defineField({
              name: "icon",
              title: "Icona base",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                },
              ],
            }),
            defineField({
              name: "iconClass",
              title: "Classe Icona (es. devicon-react-original)",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Skills" };
    },
  },
  ...previewField,
});

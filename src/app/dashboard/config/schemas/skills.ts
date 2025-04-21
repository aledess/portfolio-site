import { defineType, defineField } from "sanity";
// import type { Rule } from "sanity";
import { sectionTitle } from "./fields/sectionTitle";
import { language } from "./fields/language";

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
              name: "icon",
              title: "Classe Icona (es. devicon-react-original)",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Icona personalizzata (immagine)",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  description:
                    "Descrizione dell'immagine per SEO e accessibilità",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                },
              ],
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
});

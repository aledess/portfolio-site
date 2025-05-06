import { defineType, defineField } from "sanity";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    language,
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required().error("Il titolo è obbligatorio"),
    }),
    defineField({
      name: "subtitle",
      title: "Sottotitolo",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Il sottotitolo è obbligatorio"),
    }),
    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("L'immagine è obbligatoria"),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Testo alternativo (alt)",
          description: "Descrizione dell'immagine per SEO e accessibilità",
          validation: (Rule) =>
            Rule.required().error("Il testo alternativo è obbligatorio"),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "🚀 Hero",
      };
    },
  },
  ...previewField,
});

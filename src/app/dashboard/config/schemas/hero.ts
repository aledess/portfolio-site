import { defineType, defineField } from "sanity";
// import type { Rule } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Sottotitolo",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Testo alternativo (alt)",
          description: "Descrizione dell'immagine per SEO e accessibilità",
          validation: (Rule) =>
            Rule.required().error("Il testo alternativo è obbligatorio"),
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Hero",
      };
    },
  },
});

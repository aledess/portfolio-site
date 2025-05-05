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
      name: "steps",
      title: "Step narrativi",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "aboutStep",
          fields: [
            defineField({
              name: "title",
              title: "Titolo step",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "image",
              title: "Illustrazione",
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
          ],
        }),
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

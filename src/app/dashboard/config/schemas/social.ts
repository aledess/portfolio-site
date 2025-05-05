import { defineType, defineField } from "sanity";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    language,
    defineField({
      name: "items",
      title: "Elenco Social/Download",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialItem",
          fields: [
            defineField({
              name: "label",
              title: "Nome",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "light",
              title: "Icona per tema chiaro",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                }),
              ],
              validation: (Rule) =>
                Rule.required().error("L'icona per tema chiaro è obbligatoria"),
            }),
            defineField({
              name: "dark",
              title: "Icona per tema scuro",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Testo alternativo (alt)",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Il testo alternativo è obbligatorio",
                    ),
                }),
              ],
              validation: (Rule) =>
                Rule.required().error("L'icona per tema scuro è obbligatoria"),
            }),
            defineField({
              name: "url",
              title: "Link esterno (facoltativo)",
              type: "url",
              description:
                "Inserisci un link esterno, oppure carica un file da scaricare.",
            }),
            defineField({
              name: "file",
              title: "File da scaricare (facoltativo)",
              type: "file",
              description:
                "Carica un file se vuoi offrire un download diretto.",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Social / Download" };
    },
  },
  ...previewField,
});

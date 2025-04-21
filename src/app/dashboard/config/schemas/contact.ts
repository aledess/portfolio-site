import { defineType, defineField } from "sanity";
import { sectionTitle } from "./fields/sectionTitle";
import { language } from "./fields/language";
import { previewField } from "./fields/previewField";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    sectionTitle,
    language,
    defineField({
      name: "description",
      title: "Descrizione introduttiva",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.required().min(10).error("La descrizione è obbligatoria"),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact" };
    },
  },
  ...previewField,
});

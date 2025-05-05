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
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact" };
    },
  },
  ...previewField,
});

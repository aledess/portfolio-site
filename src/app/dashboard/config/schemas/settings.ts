import { defineType, defineField } from "sanity";

export default defineType({
  name: "settings",
  title: "Impostazioni Sito",
  type: "document",
  fields: [
    defineField({
      name: "maintenance",
      title: "Maintenance Mode",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "hideContactSection",
      title: "Nascondi sezione Contatti",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "analyticsId",
      title: "ID Google Analytics (opzionale)",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return { title: "🔧 Impostazioni Sito" };
    },
  },
});

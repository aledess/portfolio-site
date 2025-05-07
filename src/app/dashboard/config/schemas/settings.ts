import { defineType, defineField } from "sanity";

export default defineType({
  name: "settings",
  title: "Impostazioni Sito",
  type: "document",
  fields: [
    defineField({
      name: "logoLight",
      title: "Logo Light",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoDark",
      title: "Logo Dark",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: { hotspot: true },
    }),
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
      name: "defaultTheme",
      title: "Tema di default",
      type: "string",
      initialValue: "light",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
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

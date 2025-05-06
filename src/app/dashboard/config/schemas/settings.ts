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
      name: "visibleSections",
      title: "Sezioni visibili",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["hero", "about", "skills", "experience", "contact"],
      options: {
        list: [
          { title: "Hero", value: "hero" },
          { title: "About", value: "about" },
          { title: "Skills", value: "skills" },
          { title: "Experience", value: "Experience" },
          { title: "Works", value: "Works" },
          { title: "Contact", value: "contact" },
        ],
      },
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

import { defineField } from "sanity";

export const language = defineField({
  name: "language",
  title: "Lingua",
  type: "string",
  readOnly: true,
  hidden: true,
});

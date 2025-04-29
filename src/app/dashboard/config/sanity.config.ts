import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas";
import structure from "./structure";

export default defineConfig({
  name: "default",
  title: "Portfolio",
  projectId: "w4peuxk7",
  dataset: "db",
  basePath: "/dashboard",
  plugins: [
    structureTool({ structure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "it", title: "Italiano" },
        { id: "en", title: "English" },
      ],

      schemaTypes: [
        "hero",
        "skills",
        "experience",
        "works",
        "about",
        "contact",
        "social",
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

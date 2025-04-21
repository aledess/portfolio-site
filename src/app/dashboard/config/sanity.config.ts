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
    visionTool(),
    structureTool({ structure }),
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
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

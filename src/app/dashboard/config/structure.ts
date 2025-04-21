import { StructureBuilder } from "sanity/structure";
import { withPreviewView } from "../utils/withPreviewView";

const structure = (S: StructureBuilder) =>
  S.list()
    .title("Contenuti")
    .items([
      withPreviewView(S, "hero", "hero-single", "Hero"),
      withPreviewView(S, "skills", "skills-single", "Skills"),
      withPreviewView(S, "experience", "experience-single", "Experience"),
      withPreviewView(S, "works", "works-single", "Works"),
      withPreviewView(S, "about", "about-single", "About"),
      withPreviewView(S, "contact", "contact-single", "Contact"),

      S.listItem()
        .title("Translation metadata")
        .child(
          S.documentTypeList("translation.metadata").title(
            "Translation metadata",
          ),
        ),
    ]);

export default structure;

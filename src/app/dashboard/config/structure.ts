import { StructureBuilder } from "sanity/structure";

const structure = (S: StructureBuilder) =>
  S.list()
    .title("Contenuti")
    .items([
      S.listItem().title("Hero").child(
        S.document().schemaType("hero").documentId("hero-single"), // 👈 ID singleton Hero
      ),
      S.listItem().title("Skills").child(
        S.document().schemaType("skills").documentId("skills"), // 👈 ID singleton Skills
      ),
      // Filtra entrambi dalla lista generica in fondo
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return id && !["hero", "skills"].includes(id);
      }),
    ]);

export default structure;

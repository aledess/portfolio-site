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
      S.listItem()
        .title("Experience")
        .child(S.document().schemaType("experience").documentId("experience")),
      S.listItem()
        .title("Works")
        .child(S.document().schemaType("experience").documentId("works")),
      S.listItem()
        .title("About")
        .child(S.document().schemaType("about").documentId("about")),
      S.listItem()
        .title("Contact")
        .child(S.document().schemaType("contact").documentId("contact")),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return (
          id &&
          ![
            "hero",
            "skills",
            "experience",
            "works",
            "about",
            "contact",
          ].includes(id)
        );
      }),
    ]);

export default structure;

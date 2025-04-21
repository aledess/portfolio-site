import { StructureBuilder } from "sanity/structure";
import resolveProductionUrl from "./resolveProcuctionUrl";

export function withPreviewView(
  S: StructureBuilder,
  schemaType: string,
  documentId: string,
  title: string,
) {
  return S.listItem()
    .title(title)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(documentId)
        .views([
          S.view.form(),
          S.view
            .component(({}) => {
              const url = resolveProductionUrl();
              if (typeof window !== "undefined" && url) {
                window.open(url, "_blank");
              }
              return null;
            })
            .title("Preview"),
        ]),
    );
}

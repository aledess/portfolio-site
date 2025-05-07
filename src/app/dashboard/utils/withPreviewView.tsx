import { StructureBuilder } from "sanity/structure";
import { useEffect } from "react";
import { resolveProductionUrl } from "./resolveProcuctionUrl";

function PreviewRedirect({ url }: { url: string }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  }, [url]);

  return null;
}

export function withPreviewView(
  S: StructureBuilder,
  schemaType: string,
  documentId: string,
  title: string,
  slug: string = "/",
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
            .component(() => {
              const url = resolveProductionUrl({ slug });
              return <PreviewRedirect url={url} />;
            })
            .title("Preview"),
        ]),
    );
}

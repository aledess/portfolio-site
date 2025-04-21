import resolveProductionUrl from "@/app/dashboard/utils/resolveProcuctionUrl";

export const previewField = {
  __experimental_preview: {
    select: {},
    prepare: () => {
      return {
        title: "Preview",
        url: resolveProductionUrl(),
      };
    },
  },
};

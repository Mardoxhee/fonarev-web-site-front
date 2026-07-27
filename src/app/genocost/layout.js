import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "GENOCOST RDC | Mémoire des victimes et génocide pour des gains économiques",
  description:
    "Comprendre le GENOCOST, préserver la mémoire des victimes et suivre la commémoration nationale du génocide pour des gains économiques en RDC.",
  path: "/genocost",
  keywords: [
    "GENOCOST",
    "Génocide pour des gains économiques",
    "Mémoire du GENOCOST",
    "Commémoration GENOCOST",
    "Histoire du GENOCOST",
    "Victimes du GENOCOST",
    "Génocide économique RDC",
    "Préservation de la mémoire",
  ],
});

export default function GenocostLayout({ children }) {
  return children;
}

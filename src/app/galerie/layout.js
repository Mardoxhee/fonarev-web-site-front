import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Galerie FONAREV | Actions, mémoire et témoignages en images",
  description:
    "Découvrez en images les actions du FONAREV, l'accompagnement des victimes, la mémoire nationale et les initiatives de réhabilitation communautaire en RDC.",
  path: "/galerie",
  keywords: [
    "FONAREV RDC images",
    "Témoignages des victimes",
    "Mémoire nationale",
    "Réhabilitation communautaire",
  ],
});

export default function GalleryLayout({ children }) {
  return children;
}

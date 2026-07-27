import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Témoignages des victimes | Stories FONAREV RDC",
  description:
    "Écoutez des témoignages et récits autour des victimes des conflits, de l'accompagnement psychosocial et de la restauration de la dignité en RDC.",
  path: "/stories",
  keywords: [
    "Témoignages des victimes",
    "Victimes des conflits RDC",
    "Accompagnement psychosocial",
    "Réhabilitation des victimes",
  ],
});

export default function StoriesLayout({ children }) {
  return children;
}

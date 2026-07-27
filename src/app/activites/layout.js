import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Activités FONAREV | Accompagnement et réparation des victimes",
  description:
    "Retrouvez les activités du FONAREV consacrées à l'identification, l'accompagnement psychosocial, la protection et la réhabilitation des victimes en RDC.",
  path: "/activites",
  keywords: [
    "Activités FONAREV",
    "Accompagnement psychosocial",
    "Identification des victimes",
    "Réhabilitation des victimes",
    "Réhabilitation communautaire",
  ],
});

export default function ActivitiesLayout({ children }) {
  return children;
}

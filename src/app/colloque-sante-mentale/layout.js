import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Santé mentale des victimes | Colloque FONAREV RDC",
  description:
    "Colloque du FONAREV sur la santé mentale, l'accompagnement psychosocial et la prise en charge des victimes de violences liées aux conflits en RDC.",
  path: "/colloque-sante-mentale",
  keywords: [
    "Santé mentale des victimes",
    "Accompagnement psychosocial",
    "Violences sexuelles liées aux conflits",
    "Protection des victimes",
  ],
});

export default function MentalHealthLayout({ children }) {
  return children;
}

import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Appels d'offres FONAREV | Marchés publics et avis en RDC",
  description:
    "Consultez les appels d'offres, avis de marchés, consultations et documents de passation publiés par le FONAREV en République démocratique du Congo.",
  path: "/opportunites/appels",
  keywords: ["Appels d'offres FONAREV", "Marchés publics RDC", "Institution publique RDC", "Archives FONAREV"],
});

export default function TendersLayout({ children }) {
  return children;
}

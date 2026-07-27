import { createPageMetadata } from "../../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Archives des appels d'offres FONAREV",
  description:
    "Recherchez les anciens appels d'offres, avis de marchés et documents de passation archivés par le FONAREV en RDC.",
  path: "/opportunites/appels/archives",
  keywords: ["Archives FONAREV", "Appels d'offres FONAREV", "Marchés publics RDC"],
});

export default function TenderArchivesLayout({ children }) {
  return children;
}

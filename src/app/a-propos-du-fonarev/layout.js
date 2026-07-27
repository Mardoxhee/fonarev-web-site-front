import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "À propos du FONAREV RDC | Mission, cadre légal et gouvernance",
  description:
    "Découvrez la mission du FONAREV, son cadre légal fondé sur la Loi 22/065, sa gouvernance et sa politique de protection et de réparation des victimes en RDC.",
  path: "/a-propos-du-fonarev",
  keywords: [
    "Institution publique RDC",
    "Ministère des Droits humains",
    "Loi 22/065 RDC",
    "Décret FONAREV",
    "Politique de réparation",
    "Fonds de réparation",
    "Reconnaissance des victimes",
  ],
});

export default function AboutLayout({ children }) {
  return children;
}

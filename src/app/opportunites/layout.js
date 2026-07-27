import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Opportunités FONAREV | Emplois, marchés et contributions",
  description:
    "Consultez les offres d'emploi, appels d'offres, stages et appels à contribution publiés par le FONAREV en République démocratique du Congo.",
  path: "/opportunites",
  keywords: ["Opportunités FONAREV", "Offres d'emploi FONAREV", "Appels d'offres FONAREV", "Institution publique RDC"],
});

export default function OpportunitiesLayout({ children }) {
  return children;
}

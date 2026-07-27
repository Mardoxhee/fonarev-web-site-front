import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Offres d'emploi FONAREV RDC | Carrières et candidatures",
  description:
    "Consultez les offres d'emploi du FONAREV et les possibilités de candidature pour contribuer à la protection et à la réparation des victimes en RDC.",
  path: "/opportunites/offres-emploi",
  keywords: ["Offres d'emploi FONAREV", "Carrières FONAREV", "Institution publique RDC"],
});

export default function JobsLayout({ children }) {
  return children;
}

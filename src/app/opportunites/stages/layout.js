import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Stages au FONAREV RDC | Déposer une candidature",
  description:
    "Déposez une demande de stage auprès du FONAREV et découvrez l'institution publique chargée de la réparation des victimes en RDC.",
  path: "/opportunites/stages",
  keywords: ["Stage FONAREV", "Candidature FONAREV", "Institution publique RDC"],
});

export default function InternshipsLayout({ children }) {
  return children;
}

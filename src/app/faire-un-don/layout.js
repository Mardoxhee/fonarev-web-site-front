import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Soutenir le FONAREV | Fonds de réparation des victimes en RDC",
  description:
    "Découvrez comment soutenir les actions du FONAREV en faveur de l'accompagnement, de la protection et de la réparation des victimes en RDC.",
  path: "/faire-un-don",
  keywords: ["Fonds de réparation", "Accompagnement des victimes", "Réparation des préjudices", "Protection des victimes"],
});

export default function DonationLayout({ children }) {
  return children;
}

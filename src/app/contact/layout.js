import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Contacter le FONAREV RDC | Écoute, orientation et accès aux droits",
  description:
    "Contactez le FONAREV à Kinshasa pour une demande d'information, d'écoute ou d'orientation concernant la protection et la réparation des victimes en RDC.",
  path: "/contact",
  keywords: [
    "Contact FONAREV RDC",
    "Accompagnement des victimes",
    "Protection des victimes",
    "Accès à la justice",
    "Comment demander une réparation",
  ],
});

export default function ContactLayout({ children }) {
  return children;
}

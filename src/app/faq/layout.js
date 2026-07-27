import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ FONAREV | Comment obtenir une réparation en RDC ?",
  description:
    "Réponses aux questions sur le FONAREV, les bénéficiaires, l'identification des victimes, les types de réparations et l'accès à la justice en RDC.",
  path: "/faq",
  keywords: [
    "Qu'est-ce que le FONAREV",
    "Comment obtenir une réparation en RDC",
    "Qui peut bénéficier du FONAREV",
    "Comment demander une réparation",
    "Droits des victimes des conflits en RDC",
  ],
});

export default function FaqLayout({ children }) {
  return children;
}

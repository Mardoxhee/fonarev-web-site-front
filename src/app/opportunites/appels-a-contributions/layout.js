import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Appels à contribution FONAREV | Recherche sur le GENOCOST",
  description:
    "Consultez les appels à contribution du FONAREV destinés aux chercheurs et experts travaillant sur le GENOCOST, la mémoire et la justice en RDC.",
  path: "/opportunites/appels-a-contributions",
  keywords: ["Appels à contribution FONAREV", "Études FONAREV", "GENOCOST", "Justice transitionnelle RDC"],
});

export default function ContributionsLayout({ children }) {
  return children;
}

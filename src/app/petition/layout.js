import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Pétition GENOCOST | Reconnaissance et mémoire des victimes en RDC",
  description:
    "Soutenez la reconnaissance des génocides commis en République démocratique du Congo et la préservation de la mémoire des victimes du GENOCOST.",
  path: "/petition",
  keywords: [
    "Pétition GENOCOST",
    "Reconnaissance des victimes",
    "Mémoire des victimes",
    "Commémoration nationale",
    "Crimes contre l'humanité RDC",
  ],
});

export default function PetitionLayout({ children }) {
  return children;
}

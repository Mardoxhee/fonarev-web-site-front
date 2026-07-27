import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Actualités FONAREV | Justice, réparation et droits des victimes en RDC",
  description:
    "Suivez les actualités, communiqués et actions du FONAREV pour la réparation des victimes, l'accès à la justice, les droits humains et la mémoire en RDC.",
  path: "/actualites",
  keywords: [
    "Actualités FONAREV",
    "Communiqués FONAREV",
    "Justice et réparation",
    "Identification des victimes",
    "Victimes des conflits armés",
  ],
});

export default function NewsLayout({ children }) {
  return children;
}

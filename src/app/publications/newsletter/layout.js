import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Newsletter FONAREV | Actualités et publications institutionnelles",
  description:
    "Téléchargez les newsletters du FONAREV et suivez les actualités, activités institutionnelles et avancées en faveur des victimes en RDC.",
  path: "/publications/newsletter",
  keywords: ["Newsletter FONAREV", "Actualités FONAREV", "Publications FONAREV", "Communiqués FONAREV"],
});

export default function NewsletterLayout({ children }) {
  return children;
}

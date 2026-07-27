import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Publications FONAREV | Rapports, études et documentation",
  description:
    "Consultez les publications, rapports, études, newsletters, communiqués et archives documentaires du FONAREV en République démocratique du Congo.",
  path: "/publications",
  keywords: [
    "Publications FONAREV",
    "Rapports FONAREV",
    "Études FONAREV",
    "Documentation FONAREV",
    "Archives FONAREV",
  ],
});

export default function PublicationsLayout({ children }) {
  return children;
}

import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Rapports annuels FONAREV | Études et documentation sur les réparations",
  description:
    "Accédez aux rapports annuels, études et documents institutionnels du FONAREV sur la politique de réparation et la protection des victimes en RDC.",
  path: "/publications/rapports-annuels",
  keywords: ["Rapports FONAREV", "Études FONAREV", "Documentation FONAREV", "Politique de réparation"],
});

export default function ReportsLayout({ children }) {
  return children;
}

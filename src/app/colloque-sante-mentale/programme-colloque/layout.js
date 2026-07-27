import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Programme du colloque sur la santé mentale des victimes",
  description:
    "Consultez le programme du colloque FONAREV consacré à la santé mentale et à l'accompagnement psychosocial des victimes en RDC.",
  path: "/colloque-sante-mentale/programme-colloque",
  keywords: ["Programme colloque FONAREV", "Santé mentale des victimes", "Accompagnement psychosocial"],
});

export default function ColloquiumProgramLayout({ children }) {
  return children;
}

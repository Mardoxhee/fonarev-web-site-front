export default function manifest() {
  return {
    name: "FONAREV — Fonds National des Réparations des Victimes",
    short_name: "FONAREV",
    description:
      "Site officiel du Fonds National des Réparations des Victimes en République démocratique du Congo.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8e1f71",
    lang: "fr-CD",
    icons: [
      {
        src: "/logo-fonarev.png",
        sizes: "1632x504",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

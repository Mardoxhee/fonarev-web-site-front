import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import PageLoader from "../components/pageLoader";
import Providers from "./providers";
import { Poppins, Barlow_Condensed } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { createPageMetadata, SITE_URL } from "../lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "FONAREV",
  category: "Institution publique",
  creator: "FONAREV",
  publisher: "FONAREV",
  verification: {
    google: "Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-fonarev.png",
  },
  ...createPageMetadata({
    title: "FONAREV RDC | Fonds National des Réparations des Victimes",
    description:
      "Site officiel du FONAREV en RDC : identification, protection, accompagnement et réparation des victimes de violences liées aux conflits et de crimes graves.",
    path: "/",
    keywords: [
      "Accompagnement des victimes",
      "Réparations collectives",
      "Réparations individuelles",
      "Accès à la justice",
      "Justice réparatrice",
      "Crimes contre l'humanité RDC",
    ],
  }),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8e1f71",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "Fonds National des Réparations des Victimes",
  alternateName: "FONAREV",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-fonarev.png`,
  description:
    "Établissement public de la République démocratique du Congo chargé de l'identification, de l'accompagnement et de la réparation des victimes.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue Lukusa 26, Quartier Gare, Commune de la Gombe",
    addressLocality: "Kinshasa",
    addressCountry: "CD",
  },
  areaServed: {
    "@type": "Country",
    name: "République démocratique du Congo",
  },
  sameAs: [
    "https://www.facebook.com/people/Fonarev-RDC/100095091627231/",
    "https://www.instagram.com/fonarevrdc/",
    "https://www.linkedin.com/company/fonarev-rdc/",
    "https://x.com/fonarevrdc",
    "https://www.youtube.com/@FonarevRDC",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "FONAREV",
  inLanguage: "fr-CD",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CD">
      <body className={`${poppins.className} ${poppins.variable} ${barlowCondensed.variable}`}>
        <Providers>
          <PageLoader />
          <Header />
          {children}
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <GoogleAnalytics gaId="G-W41SHGX1J0" />
      </body>
    </html>
  );
}

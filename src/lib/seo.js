export const SITE_URL = "https://www.fonarev.cd";
export const SITE_NAME = "FONAREV";
export const DEFAULT_OG_IMAGE = "/og.png";
export const DEFAULT_LOGO_IMAGE = "/logo-fonarev.png";

export const resolveSiteUrl = (value = "/") => {
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return new URL("/", SITE_URL).toString();
  }
};

const coreKeywords = [
  "FONAREV",
  "Fonds National des Réparations des Victimes",
  "Réparation des victimes RDC",
  "Violences sexuelles liées aux conflits",
  "Justice transitionnelle RDC",
  "Protection des victimes",
  "Droits humains RDC",
  "République démocratique du Congo",
];

export const createPageMetadata = ({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}) => {
  const canonical = resolveSiteUrl(path);
  const resolvedTitle = title.includes("FONAREV") ? title : `${title} | FONAREV`;
  const resolvedImage = resolveSiteUrl(image || DEFAULT_OG_IMAGE);

  return {
    title: resolvedTitle,
    description,
    keywords: [...new Set([...coreKeywords, ...keywords])],
    alternates: {
      canonical,
      languages: {
        "fr-CD": canonical,
        "x-default": canonical,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: "fr_CD",
      url: canonical,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(type === "article" && authors ? { authors } : {}),
      images: [
        {
          url: resolvedImage,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt || `${resolvedTitle} — République démocratique du Congo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@fonarevrdc",
      creator: "@fonarevrdc",
      title: resolvedTitle,
      description,
      images: [resolvedImage],
    },
  };
};

export const staticPages = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/a-propos-du-fonarev", changeFrequency: "monthly", priority: 0.9 },
  { path: "/actualites", changeFrequency: "daily", priority: 0.9 },
  { path: "/activites", changeFrequency: "weekly", priority: 0.8 },
  { path: "/genocost", changeFrequency: "weekly", priority: 0.95 },
  { path: "/petition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/publications", changeFrequency: "monthly", priority: 0.8 },
  { path: "/publications/newsletter", changeFrequency: "monthly", priority: 0.75 },
  { path: "/publications/rapports-annuels", changeFrequency: "yearly", priority: 0.65 },
  { path: "/galerie", changeFrequency: "weekly", priority: 0.6 },
  { path: "/stories", changeFrequency: "weekly", priority: 0.65 },
  { path: "/opportunites", changeFrequency: "weekly", priority: 0.7 },
  { path: "/opportunites/offres-emploi", changeFrequency: "weekly", priority: 0.65 },
  { path: "/opportunites/appels", changeFrequency: "weekly", priority: 0.7 },
  { path: "/opportunites/appels/archives", changeFrequency: "monthly", priority: 0.55 },
  { path: "/opportunites/appels-a-contributions", changeFrequency: "monthly", priority: 0.6 },
  { path: "/opportunites/stages", changeFrequency: "monthly", priority: 0.5 },
  { path: "/colloque-sante-mentale", changeFrequency: "yearly", priority: 0.55 },
  { path: "/colloque-sante-mentale/programme-colloque", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.65 },
  { path: "/faire-un-don", changeFrequency: "yearly", priority: 0.45 },
];

import dynamic from "next/dynamic";
import { getFileLink } from "../../../lib/Requests.js";
import { createPageMetadata, SITE_URL } from "../../../lib/seo";

const ClientComponents = dynamic(() => import("../../../components/clientComponent.js"), { ssr: false });

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const fetchArticleDetails = async (articleId) => {
  if (!articleId) return null;

  try {
    const response = await fetch(`https://fonarev-api.onrender.com/articles/${articleId}`, {
      next: { revalidate: 900 },
    });

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
};

export async function generateMetadata({ searchParams }) {
  const articleId = searchParams?.articleId;
  const articleTitle = searchParams?.articleTitle;
  const result = await fetchArticleDetails(articleId);
  const article = result?.article;

  if (!article) {
    return createPageMetadata({
      title: "Actualité FONAREV",
      description: "Consultez les actualités du FONAREV en République démocratique du Congo.",
      path: "/actualites",
      keywords: ["Actualités FONAREV", "Communiqués FONAREV"],
    });
  }

  const description =
    stripHtml(article.contenu).slice(0, 160) ||
    "Actualité du FONAREV sur la justice, la mémoire et la réparation des victimes en RDC.";
  const query = new URLSearchParams({ articleId });
  if (articleTitle) query.set("articleTitle", articleTitle);
  const path = `/actualites/details?${query.toString()}`;
  let image;

  if (article.thumbanails) {
    try {
      image = await getFileLink(article.thumbanails);
    } catch {
      image = undefined;
    }
  }

  return createPageMetadata({
    title: `${article.titre} | Actualité FONAREV`,
    description,
    path,
    image: image || "/og.png",
    type: "article",
    keywords: [
      "Actualités FONAREV",
      "Réparation des victimes RDC",
      "Justice transitionnelle RDC",
      "Mémoire des victimes",
    ],
  });
}

export default async function DetailsPage({ searchParams }) {
  const articleId = searchParams?.articleId;
  const articleDetails = await fetchArticleDetails(articleId);
  const article = articleDetails?.article;
  const description = stripHtml(article?.contenu).slice(0, 160);
  const canonical = articleId
    ? `${SITE_URL}/actualites/details?articleId=${encodeURIComponent(articleId)}`
    : `${SITE_URL}/actualites`;

  const articleJsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.titre,
        description,
        datePublished: article.date,
        dateModified: article.updatedAt || article.date,
        mainEntityOfPage: canonical,
        author: {
          "@type": "Organization",
          name: "FONAREV",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "FONAREV",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo-fonarev.png`,
          },
        },
      }
    : null;

  return (
    <main className="mainCont">
      <ClientComponents initialArticleDetails={article} />
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
    </main>
  );
}

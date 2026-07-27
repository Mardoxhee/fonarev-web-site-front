import { genocostArticles } from "./genocost/articles";
import { SITE_URL, staticPages } from "../lib/seo";

const getNewsPages = async () => {
  try {
    const response = await fetch("https://fonarev-api.onrender.com/articles", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return (data?.article || []).map((article) => ({
      url: `${SITE_URL}/actualites/details?articleId=${encodeURIComponent(article._id)}`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch {
    return [];
  }
};

export default async function sitemap() {
  const lastModified = new Date();
  const pages = staticPages.map((page) => ({
    url: new URL(page.path, SITE_URL).toString(),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const genocostPages = genocostArticles.map((article) => ({
    url: new URL(article.href, SITE_URL).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
    images: [new URL(article.image, SITE_URL).toString()],
  }));

  const newsPages = await getNewsPages();

  return [...pages, ...genocostPages, ...newsPages];
}

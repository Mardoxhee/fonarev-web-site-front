import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { genocostArticles, getGenocostArticle } from "../articles"
import styles from "./article.module.scss"
import { createPageMetadata, SITE_URL } from "../../../lib/seo"

export const generateStaticParams = () => genocostArticles.map((article) => ({ slug: article.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const article = getGenocostArticle(slug)

  if (!article) {
    return createPageMetadata({
      title: "Article GENOCOST | FONAREV",
      description: "Dossier du FONAREV consacré au GENOCOST et à la mémoire des victimes en RDC.",
      path: "/genocost",
      keywords: ["GENOCOST", "Mémoire des victimes"],
    })
  }

  return createPageMetadata({
    title: `${article.title} | Genocost | FONAREV`,
    description: article.intro,
    path: article.href,
    image: article.image,
    type: "article",
    keywords: [
      "GENOCOST",
      "Génocide pour des gains économiques",
      "Mémoire du GENOCOST",
      "Victimes du GENOCOST",
      "Préservation de la mémoire",
    ],
  })
}

const GenocostArticle = async ({ params }) => {
  const { slug } = await params
  const article = getGenocostArticle(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = genocostArticles.filter((item) => item.slug !== article.slug)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.intro,
    image: `${SITE_URL}${article.image}`,
    mainEntityOfPage: `${SITE_URL}${article.href}`,
    inLanguage: "fr-CD",
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

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src={article.image} alt={article.title} fill priority sizes="100vw" />
        <div className={styles.heroContent}>
          <Link href="/genocost" className={styles.backLink}>
            ← Retour au Genocost
          </Link>
          <span>{article.tag}</span>
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
        </div>
      </section>

      <article className={styles.article}>
        <aside className={styles.metaPanel}>
          <div>
            <span>Date</span>
            <strong>{article.date}</strong>
          </div>
          <div>
            <span>Lieu</span>
            <strong>{article.location}</strong>
          </div>
          <div>
            <span>Dossier</span>
            <strong>Reconnaissance du Genocost</strong>
          </div>
        </aside>

        <div className={styles.articleBody}>
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className={styles.keyPoints}>
            <h2>Points clés</h2>
            <ul>
              {article.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <section className={styles.related}>
        <div className={styles.relatedHeader}>
          <span>Lire aussi</span>
          <h2>Autres articles du dossier Genocost</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedArticles.map((item) => (
            <Link href={item.href} key={item.slug}>
              <div>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 30vw" />
              </div>
              <small>{item.tag}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  )
}

export default GenocostArticle

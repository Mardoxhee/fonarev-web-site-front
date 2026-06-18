import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { genocostArticles, getGenocostArticle } from "../articles"
import styles from "./article.module.scss"

export const generateStaticParams = () => genocostArticles.map((article) => ({ slug: article.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const article = getGenocostArticle(slug)

  if (!article) {
    return {
      title: "Article Genocost | FONAREV",
    }
  }

  return {
    metadataBase: new URL("https://www.fonarev.cd"),
    title: `${article.title} | Genocost | FONAREV`,
    description: article.intro,
    openGraph: {
      title: article.title,
      description: article.intro,
      images: [{ url: article.image }],
    },
  }
}

const GenocostArticle = async ({ params }) => {
  const { slug } = await params
  const article = getGenocostArticle(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = genocostArticles.filter((item) => item.slug !== article.slug)

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
    </main>
  )
}

export default GenocostArticle

import styles from './style.module.scss'
import React from 'react'
import Image from 'next/image'

const newsletters = [
  {
    id: '2026-03',
    monthLabel: 'Mars',
    title: 'Newsletter FONAREV',
    description: "Découvrez les faits marquants, activités et actualités du mois.",
    href: '/api/newsletter/mars',
    imageSrc: '/reparation.jpg',
  },
  {
    id: '2026-02',
    monthLabel: 'Février',
    title: 'Newsletter FONAREV',
    description: "Découvrez les faits marquants, activités et actualités du mois.",
    href: '/api/newsletter/fevrier',
    imageSrc: '/reparation.jpg',
  },
  {
    id: '2026-01',
    monthLabel: 'Janvier',
    title: 'Newsletter FONAREV',
    description: "Découvrez les faits marquants, activités et actualités du mois.",
    href: '/api/newsletter/janvier',
    imageSrc: '/reparation.jpg',
  },
]

const Newsletter = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>Publications</div>
            <h1 className={styles.title}>Newsletters</h1>
            <p className={styles.subtitle}>
              Retrouvez nos brochures mensuelles à télécharger. Une lecture rapide et claire de nos activités, actualités et actions.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Dernières éditions</h2>
            <p className={styles.sectionSubtitle}>Téléchargement direct en PDF.</p>
          </div>

          <div className={styles.grid}>
            {newsletters.map((item) => (
              <article key={item.id} className={styles.landscapeCard}>
                <div className={styles.landscapeContent}>
                  <div className={styles.cardTop}>
                    <div className={styles.meta}>Édition {item.monthLabel}</div>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.description}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <a className={styles.cta} href={item.href}>
                      Télécharger (PDF)
                    </a>
                  </div>
                </div>

                <div className={styles.landscapeMedia}>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 575.98px) 100vw, 520px"
                    style={{ objectFit: 'cover' }}
                    priority={item.id === '2026-03'}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Newsletter

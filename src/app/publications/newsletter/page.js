"use client"

import styles from './style.module.scss'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const newsletters = [
  {
    id: '2026-03',
    monthLabel: 'Mars',
    period: 'Édition mensuelle',
    title: 'Newsletter FONAREV',
    description: "Les faits marquants du mois, les activités institutionnelles et les avancées portées auprès des victimes.",
    href: '/api/newsletter/mars',
    imageSrc: '/geneve-fonarev.png',
  },
  {
    id: '2026-02',
    monthLabel: 'Février',
    period: 'Édition mensuelle',
    title: 'Newsletter FONAREV',
    description: "Un regard synthétique sur les actions de réparation, la mobilisation et les temps forts du FONAREV.",
    href: '/api/newsletter/fevrier',
    imageSrc: '/reparation.jpg',
  },
  {
    id: '2026-01',
    monthLabel: 'Janvier',
    period: 'Édition mensuelle',
    title: 'Newsletter FONAREV',
    description: "Les premières nouvelles de l'année autour des missions, des activités et des publications institutionnelles.",
    href: '/api/newsletter/janvier',
    imageSrc: '/bg-actu.jpg',
  },
]

const Newsletter = () => {
  const featuredNewsletter = newsletters[0]

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image src="/bg-actu.jpg" alt="Publications et actualités du FONAREV" fill priority sizes="100vw" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div>
            <div className={styles.kicker}>Médiathèque</div>
            <h1 className={styles.title}>Newsletter FONAREV</h1>
            <p className={styles.subtitle}>
              Un format mensuel pour suivre les actions de réparation, les activités institutionnelles, les publications et les voix qui portent la mémoire des victimes.
            </p>
          </div>
          <a className={styles.heroCta} href={featuredNewsletter.href}>
            Télécharger la dernière édition
            <Icon icon="solar:download-minimalistic-bold" />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <article className={styles.featured}>
            <div className={styles.featuredMedia}>
              <Image
                src={featuredNewsletter.imageSrc}
                alt={`Newsletter FONAREV - ${featuredNewsletter.monthLabel}`}
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.featuredLabel}>Dernière parution</span>
              <h2>Édition {featuredNewsletter.monthLabel}</h2>
              <p>{featuredNewsletter.description}</p>
              <div className={styles.featuredActions}>
                <a href={featuredNewsletter.href}>
                  Télécharger le PDF
                  <Icon icon="solar:file-download-bold" />
                </a>
              </div>
            </div>
          </article>

          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.kickerDark}>Archives</span>
              <h2 className={styles.sectionTitle}>Toutes les éditions disponibles</h2>
            </div>
            <p className={styles.sectionSubtitle}>Accédez directement aux bulletins mensuels du FONAREV au format PDF.</p>
          </div>

          <div className={styles.list}>
            {newsletters.map((item) => (
              <article key={item.id} className={styles.newsletterItem}>
                <div className={styles.itemMedia}>
                  <Image
                    src={item.imageSrc}
                    alt={`${item.title} - ${item.monthLabel}`}
                    fill
                    sizes="(max-width: 575.98px) 100vw, 180px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.itemContent}>
                  <span>{item.period}</span>
                  <h3>Édition {item.monthLabel}</h3>
                  <p>{item.description}</p>
                </div>
                <a className={styles.itemCta} href={item.href} aria-label={`Télécharger la newsletter de ${item.monthLabel}`}>
                  <Icon icon="solar:download-minimalistic-bold" />
                  PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Newsletter

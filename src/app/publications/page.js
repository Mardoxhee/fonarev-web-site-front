"use client"

import styles from './style.module.scss'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded'

const heroImage = '/reparation.jpg'

const publications = [
  {
    id: 'argumentaire-genocides',
    category: 'Argumentaire',
    title: 'Argumentaire des génocides commis en RDC',
    description:
      "Un document de référence consacré à l'argumentaire sur les génocides commis en République démocratique du Congo.",
    href: '/api/publications/argumentaire-genocides',
  },
  {
    id: 'rapport-reparations',
    category: 'Rapport',
    title: 'Rapport de réparations 2024-2026',
    description:
      'Le rapport consacré aux réparations, couvrant les actions et perspectives institutionnelles sur la période 2024-2026.',
    href: '/api/publications/rapport-reparations',
  },
]

const Publications = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image src={heroImage} alt="Publications documentaires du FONAREV" fill priority sizes="100vw" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Médiathèque</span>
          <h1>Publications</h1>
          <p>
            Retrouvez les documents de référence du FONAREV sur la mémoire, la vérité, la justice et les réparations en République démocratique du Congo.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.kickerDark}>Documents disponibles</span>
              <h2>Bibliothèque institutionnelle</h2>
            </div>
            <p>Consultez ou téléchargez les publications officielles au format PDF.</p>
          </div>

          <div className={styles.publicationGrid}>
            {publications.map((publication) => (
              <article key={publication.id} className={styles.publicationCard}>
                <div className={styles.documentPreview} aria-hidden="true">
                  <PictureAsPdfRoundedIcon />
                </div>
                <div className={styles.publicationContent}>
                  <span>{publication.category}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                </div>
                <div className={styles.actions}>
                  <a href={publication.href} target="_blank" rel="noreferrer">
                    Consulter
                    <Icon icon="solar:eye-bold" />
                  </a>
                  <a href={publication.href} download={`${publication.id}.pdf`}>
                    Télécharger
                    <Icon icon="solar:download-minimalistic-bold" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Publications

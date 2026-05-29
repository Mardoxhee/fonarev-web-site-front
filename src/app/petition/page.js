"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import styles from './style.module.scss'
import HeroImage from './../../../public/aboutcover.JPG'
import EventOne from './../../../public/1.jpg'
import EventTwo from './../../../public/2.jpg'
import EventThree from './../../../public/3.jpg'
import EventFour from './../../../public/4.jpg'
import EventFive from './../../../public/5.jpg'
import EventSix from './../../../public/6.jpg'


import EventOneEn from './../../../public/1-en.jpeg'
import EventTwoEn from './../../../public/2-en.jpeg'
import EventThreeEn from './../../../public/3-en.jpeg'
import EventFourEn from './../../../public/4-en.jpeg'
import EventFiveEn from './../../../public/5-en.jpeg'
import EventSixEn from './../../../public/6-en.jpeg'

const images = [
  { src: EventOne, title: 'Visuel de mobilisation 1' },
  { src: EventTwo, title: 'Visuel de mobilisation 2' },
  { src: EventThree, title: 'Visuel de mobilisation 3' },
  { src: EventFour, title: 'Visuel de mobilisation 4' },
  { src: EventFive, title: 'Visuel de mobilisation 5' },
  { src: EventSix, title: 'Visuel de mobilisation 6' },
]

const imagesEn = [
  { src: EventOneEn, title: 'Visual of mobilisation 1' },
  { src: EventTwoEn, title: 'Visual of mobilisation 2' },
  { src: EventThreeEn, title: 'Visual of mobilisation 3' },
  { src: EventFourEn, title: 'Visual of mobilisation 4' },
  { src: EventFiveEn, title: 'Visual of mobilisation 5' },
  { src: EventSixEn, title: 'Visual of mobilisation 6' },
]

const petitionLink = 'https://c.org/zzWQJp6GSx'

const translations = {
  fr: {
    languageLabel: "Langue",
    heroBadge: "Pétition internationale",
    heroMeta: "Vérité · Mémoire · Justice",
    heroTitle: "Pour la reconnaissance des génocides commis en République démocratique du Congo",
    heroText:
      "Signez pour que les crimes subis par les populations congolaises soient regardés, nommés et reconnus à leur juste mesure.",
    petitionButton: "Signer la pétition",
    markers: ["Vérité", "Mémoire", "Justice"],
    appealEyebrow: "Notre demande",
    appealTitle: "Reconnaître les victimes, établir la vérité, préserver la mémoire",
    appealParagraphs: [
      "Depuis plus de trois décennies, la République démocratique du Congo traverse l’une des tragédies humaines les plus graves de l’histoire contemporaine. Des millions de Congolais ont perdu la vie, des communautés ont été décimées ou forcées au déplacement, des femmes ont subi des violences sexuelles massives, et des familles continuent de porter les séquelles profondes de ces crimes.",
      "De nombreux rapports nationaux et internationaux, dont le Rapport Mapping des Nations Unies publié en 2010, ont documenté des massacres à grande échelle, des violences systématiques et des attaques ciblées contre des populations civiles. Certains de ces faits soulèvent avec gravité la question de la reconnaissance des génocides commis sur le territoire congolais.",
      "La souffrance des victimes et la mémoire collective du peuple congolais appellent aujourd’hui une reconnaissance claire de ces crimes. Il est essentiel que cette réalité soit pleinement regardée, nommée et prise en compte à sa juste mesure par la communauté nationale et internationale.",
      "Par cette pétition, nous demandons aux institutions nationales, régionales et internationales, aux pays amis de la République démocratique du Congo, aux États de la région des Grands Lacs, aux instances africaines ainsi qu’à l’ensemble de la communauté internationale de reconnaître les génocides commis en République démocratique du Congo, d’en faire un sujet de vérité historique, de justice et de mémoire, et d’accompagner les efforts visant à établir les responsabilités, honorer les victimes et prévenir la répétition de tels crimes.",
      "Reconnaître ces génocides, c’est refuser l’oubli. C’est rendre justice à des millions de victimes. C’est faire avancer la vérité. C’est préserver la mémoire collective. Et c’est contribuer à construire un avenir de paix durable.",
    ],
    actionEyebrow: "Passer à l’action",
    actionTitle: "Signez cette pétition",
    actionText: [
      "Pour que les victimes soient reconnues.",
      "Pour que la vérité soit pleinement établie.",
      "Pour que les génocides commis en RDC ne soient ni oubliés, ni ignorés.",
    ],
    momentsEyebrow: "Moments de mobilisation",
    momentsTitle: "Une mémoire collective à faire vivre",
    momentsText:
      "Reconnaître les victimes, établir la vérité, préserver la mémoire collective et contribuer à un avenir de paix durable.",
    previous: "Précédent",
    next: "Suivant",
    cards: [
      "Pour que les victimes soient reconnues.",
      "Pour que la vérité soit pleinement établie.",
      "Pour que la mémoire collective soit préservée.",
      "Pour que justice soit rendue aux millions de victimes.",
      "Pour accompagner les efforts de responsabilité et de réparation.",
      "Pour construire un avenir de paix durable.",
    ],
  },
  en: {
    languageLabel: "Language",
    heroBadge: "International petition",
    heroMeta: "Truth · Memory · Justice",
    heroTitle: "For the recognition of genocides committed in the Democratic Republic of Congo",
    heroText:
      "Sign so that the crimes suffered by Congolese populations are seen, named and recognized in their full gravity.",
    petitionButton: "Sign the petition",
    markers: ["Truth", "Memory", "Justice"],
    appealEyebrow: "Our request",
    appealTitle: "Recognize victims, establish truth, preserve memory",
    appealParagraphs: [
      "For more than three decades, the Democratic Republic of Congo has endured one of the gravest human tragedies in contemporary history. Millions of Congolese people have lost their lives, communities have been devastated or forced into displacement, women have suffered mass sexual violence, and families continue to bear the deep consequences of these crimes.",
      "Numerous national and international reports, including the United Nations Mapping Report published in 2010, have documented large-scale massacres, systematic violence and targeted attacks against civilian populations. Some of these facts raise, with great seriousness, the question of recognizing genocides committed on Congolese territory.",
      "The suffering of victims and the collective memory of the Congolese people call today for clear recognition of these crimes. This reality must be fully seen, named and taken into account by the national and international community.",
      "Through this petition, we ask national, regional and international institutions, friends of the Democratic Republic of Congo, states of the Great Lakes region, African bodies and the wider international community to recognize the genocides committed in the Democratic Republic of Congo, make them a matter of historical truth, justice and memory, and support efforts to establish responsibility, honor victims and prevent the repetition of such crimes.",
      "Recognizing these genocides means refusing oblivion. It means rendering justice to millions of victims. It means advancing truth. It means preserving collective memory. And it means contributing to a future of lasting peace.",
    ],
    actionEyebrow: "Take action",
    actionTitle: "Sign this petition",
    actionText: [
      "So that victims are recognized.",
      "So that truth is fully established.",
      "So that the genocides committed in the DRC are neither forgotten nor ignored.",
    ],
    momentsEyebrow: "Moments of mobilisation",
    momentsTitle: "A collective memory to keep alive",
    momentsText:
      "These visuals support the public appeal: recognize victims, establish truth, preserve collective memory and contribute to a future of lasting peace.",
    previous: "Previous",
    next: "Next",
    cards: [
      "So that victims are recognized.",
      "So that truth is fully established.",
      "So that collective memory is preserved.",
      "So that justice is rendered to millions of victims.",
      "To support efforts of responsibility and reparation.",
      "To build a future of lasting peace.",
    ],
  },
}

const Petition = () => {
  const [language, setLanguage] = useState('fr')
  const [activeSlide, setActiveSlide] = useState(0)
  const carouselRef = useRef(null)
  const t = translations[language]

    // ✅ images dynamiques selon la langue
  const currentImages = language === 'en' ? imagesEn : images

  const handleSlide = (index) => {
    const safeIndex = (index + currentImages.length) % images.length
    setActiveSlide(safeIndex)
    const slide = carouselRef.current?.querySelector(`[data-slide="${safeIndex}"]`)
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src={HeroImage} alt="Mobilisation pour la reconnaissance des victimes en République démocratique du Congo" fill priority />
        <div className={styles.heroOverlay}></div>
        <div className={styles.languageSwitch} aria-label={t.languageLabel}>
          <span>{t.languageLabel}</span>
          <button type="button" className={language === 'fr' ? styles.activeLanguage : ''} onClick={() => setLanguage('fr')}>
            FR
          </button>
          <button type="button" className={language === 'en' ? styles.activeLanguage : ''} onClick={() => setLanguage('en')}>
            EN
          </button>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroKicker}>
            <span>{t.heroBadge}</span>
            <small>{t.heroMeta}</small>
          </div>
          <h1>{t.heroTitle}</h1>
          <div className={styles.heroBottom}>
            <p>{t.heroText}</p>
            <a href={petitionLink} className={styles.heroCta} target="_blank" rel="noopener noreferrer">
              <Icon icon="ph:pen-nib-bold" aria-hidden="true" />
              {t.petitionButton}
            </a>
          </div>
        </div>
        <div className={styles.heroMarkers}>
          <strong>01</strong>
          <span>{t.markers[0]}</span>
          <strong>02</strong>
          <span>{t.markers[1]}</span>
          <strong>03</strong>
          <span>{t.markers[2]}</span>
        </div>
      </section>

      <section id="petition" className={styles.petition}>
        <div className={styles.petitionHeader}>
          <span>{t.appealEyebrow}</span>
          <h2>{t.appealTitle}</h2>
          <a href={petitionLink} className={styles.appealCta} target="_blank" rel="noopener noreferrer">
            <Icon icon="ph:signature-bold" aria-hidden="true" />
            {t.petitionButton}
          </a>
        </div>
        <div className={styles.petitionContent}>
          {t.appealParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="signature" className={styles.signatureCta}>
        <div>
          <span>{t.actionEyebrow}</span>
          <h2>{t.actionTitle}</h2>
          {t.actionText.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <a href={petitionLink} target="_blank" rel="noopener noreferrer">
          <Icon icon="ph:pen-nib-bold" aria-hidden="true" />
          {t.petitionButton}
        </a>
      </section>

      <section className={styles.memory}>
        <div className={styles.memoryIntro}>
          <span>{t.momentsEyebrow}</span>
          <h2>{t.momentsTitle}</h2>
          <p>{t.momentsText}</p>
          <div className={styles.carouselActions}>
            <button type="button" onClick={() => handleSlide(activeSlide - 1)} aria-label={t.previous}>
              ‹
            </button>
            <button type="button" onClick={() => handleSlide(activeSlide + 1)} aria-label={t.next}>
              ›
            </button>
          </div>
        </div>
        <div className={styles.carouselViewport} ref={carouselRef}>
          {currentImages.map((image, index) => (
            <figure className={styles.card} key={image.title} data-slide={index}>
              <Image src={image.src} alt={image.title} />
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{t.cards[index]}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.carouselDots} aria-label="Navigation du carrousel">
          {currentImages.map((image, index) => (
            <button
              type="button"
              key={image.title}
              className={activeSlide === index ? styles.activeDot : ''}
              onClick={() => handleSlide(index)}
              aria-label={`${t.momentsEyebrow} ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Petition

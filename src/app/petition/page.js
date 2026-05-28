"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import HeroImage from './../../../public/aboutcover.JPG'
import EventOne from './../../../public/1.jpg'
import EventTwo from './../../../public/2.jpg'
import EventThree from './../../../public/3.jpg'
import EventFour from './../../../public/4.jpg'
import EventFive from './../../../public/5.jpg'
import EventSix from './../../../public/6.jpg'

const images = [
  { src: EventOne, title: 'Visuel de mobilisation 1' },
  { src: EventTwo, title: 'Visuel de mobilisation 2' },
  { src: EventThree, title: 'Visuel de mobilisation 3' },
  { src: EventFour, title: 'Visuel de mobilisation 4' },
  { src: EventFive, title: 'Visuel de mobilisation 5' },
  { src: EventSix, title: 'Visuel de mobilisation 6' },
]

const translations = {
  fr: {
    languageLabel: "Langue",
    heroBadge: "Pétition nationale",
    heroMeta: "Mémoire · Justice · Réparation",
    heroTitle: "Une voix collective pour que les victimes ne soient plus invisibles",
    heroText:
      "Soutenir cette pétition, c’est porter une exigence simple : reconnaître les souffrances, préserver la mémoire et renforcer les efforts de réparation en RDC.",
    petitionButton: "Signer la pétition",
    markers: ["Reconnaître", "Réparer", "Transmettre"],
    appealEyebrow: "Notre appel",
    appealTitle: "Une signature pour refuser l’oubli",
    appealParagraphs: [
      "Nous appelons toutes les personnes éprises de paix, de dignité humaine et de justice à soutenir cette démarche citoyenne en faveur des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l’humanité.",
      "À travers les rencontres, les actions de proximité et les moments de mobilisation, cette pétition rappelle l’urgence de préserver la mémoire, de reconnaître les souffrances subies et d’accompagner les efforts de réparation.",
      "Signer cette pétition, c’est contribuer à porter une exigence collective : que les victimes soient entendues, que leur dignité soit restaurée et que la mémoire de ces tragédies demeure vivante dans la conscience nationale.",
    ],
    actionEyebrow: "Passer à l’action",
    actionTitle: "Signez la pétition et portez la voix des victimes",
    actionText:
      "Le lien de signature sera activé prochainement. Cette page prépare déjà l’appel public à la mobilisation.",
    momentsEyebrow: "Moments de mobilisation",
    momentsTitle: "Une mémoire portée par les communautés",
    momentsText:
      "Parcourez les moments clés de mobilisation. Chaque carte résume le message porté auprès des communautés.",
    previous: "Précédent",
    next: "Suivant",
    cards: [
      "Mobilisation autour de la mémoire, de la justice et de la réparation.",
      "Un appel public pour rappeler que les victimes ne doivent plus être seules.",
      "Des communautés rassemblées pour porter la voix des survivantes et survivants.",
      "Des actions de proximité pour soutenir la reconnaissance des préjudices.",
      "Une campagne citoyenne pour transformer la mémoire en engagement.",
      "Un message collectif pour défendre la dignité des victimes.",
    ],
  },
  en: {
    languageLabel: "Language",
    heroBadge: "National petition",
    heroMeta: "Memory · Justice · Reparation",
    heroTitle: "A collective voice so victims are no longer invisible",
    heroText:
      "Supporting this petition means standing behind a simple demand: to recognize suffering, preserve memory and strengthen reparation efforts in the DRC.",
    petitionButton: "Sign the petition",
    markers: ["Recognize", "Repair", "Pass on"],
    appealEyebrow: "Our appeal",
    appealTitle: "One signature to refuse forgetting",
    appealParagraphs: [
      "We call on everyone committed to peace, human dignity and justice to support this civic initiative for victims of conflict-related sexual violence and victims of crimes against peace and the security of humanity.",
      "Through meetings, community outreach and moments of mobilisation, this petition recalls the urgent need to preserve memory, recognize the suffering endured and support reparation efforts.",
      "Signing this petition helps carry a collective demand: that victims be heard, that their dignity be restored and that the memory of these tragedies remain alive in the national conscience.",
    ],
    actionEyebrow: "Take action",
    actionTitle: "Sign the petition and carry the victims’ voices",
    actionText:
      "The signature link will be activated soon. This page is already preparing the public call for mobilisation.",
    momentsEyebrow: "Moments of mobilisation",
    momentsTitle: "A memory carried by communities",
    momentsText:
      "Browse the key mobilisation moments. Each card summarizes the message shared with communities.",
    previous: "Previous",
    next: "Next",
    cards: [
      "Mobilisation around memory, justice and reparation.",
      "A public appeal reminding everyone that victims must no longer be left alone.",
      "Communities coming together to carry the voices of survivors.",
      "Local outreach supporting the recognition of harm suffered.",
      "A civic campaign turning memory into commitment.",
      "A collective message defending victims’ dignity.",
    ],
  },
}

const Petition = () => {
  const [language, setLanguage] = useState('fr')
  const [activeSlide, setActiveSlide] = useState(0)
  const carouselRef = useRef(null)
  const t = translations[language]

  const handleSlide = (index) => {
    const safeIndex = (index + images.length) % images.length
    setActiveSlide(safeIndex)
    const slide = carouselRef.current?.querySelector(`[data-slide="${safeIndex}"]`)
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src={HeroImage} alt="Communautés accompagnées dans le cadre de la réparation" fill priority />
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
            <a href="#signature" className={styles.heroCta}>{t.petitionButton}</a>
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
          <a href="#signature" className={styles.appealCta}>{t.petitionButton}</a>
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
          <p>{t.actionText}</p>
        </div>
        <a href="#" aria-disabled="true">{t.petitionButton}</a>
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
          {images.map((image, index) => (
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
          {images.map((image, index) => (
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

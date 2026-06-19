"use client"

import React, { useEffect, useRef, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import styles from "./style.module.scss"
import EventOne from "./../../../public/1.jpg"
import EventTwo from "./../../../public/2.jpg"
import EventThree from "./../../../public/3.jpg"
import EventFour from "./../../../public/4.jpg"
import EventFive from "./../../../public/5.jpg"
import EventSix from "./../../../public/6.jpg"

const quotes = [
  {
    title: "Vérité",
    text: "Nommer le Genocost, c'est refuser de détourner le regard face à la destruction systématique de millions de vies.",
  },
  {
    title: "Mémoire",
    text: "Oublier, c'est accepter de devenir complice. La reconnaissance officielle est une exigence morale absolue.",
  },
  {
    title: "Réparation",
    text: "Transformer la douleur historique en quête inébranlable de justice, de vérité et de réparation pour chaque victime.",
  },
]

const memoryImages = [
  { src: EventOne, title: "Massacre de Tingi-Tingi" },
  { src: EventTwo, title: "Massacre de Mwenga" },
  { src: EventThree, title: "Massacre de Kamituga" },
  { src: EventFour, title: "Mémoire des victimes 4" },
  { src: EventFive, title: "Mémoire des victimes 5" },
  { src: EventSix, title: "Mémoire des victimes 6" },
]

const memoryCards = [
  "Pour que les victimes soient reconnues.",
  "Pour que la vérité soit pleinement établie.",
  "Pour que la mémoire collective soit préservée.",
  "Pour que justice soit rendue aux millions de victimes.",
  "Pour accompagner les efforts de responsabilité et de réparation.",
  "Pour construire un avenir de paix durable.",
]

const meaningParagraphs = [
  "Le terme « Geno-cost », contraction glaçante de « génocide » et de « coût », a été forgé pour nommer l'innommable : un génocide perpétré pour des gains économiques. Les conflits qui ravagent le territoire congolais ne relèvent pas d'une fatalité ; ils traduisent une équation macabre où la vie humaine est sacrifiée sur l'autel de la prédation financière.",
  "Nommer le Genocost, c'est refuser de détourner le regard face à la destruction systématique de millions de vies, fauchées pour l'accaparement illégal des ressources minérales. C'est poser l'acte fondateur d'une dignité retrouvée : la vérité, nue et implacable.",
  "Les tragédies actuelles, qui ont déjà coûté la vie à plus de six millions de compatriotes, s'inscrivent dans une continuité historique effroyable. Sous le règne colonial du roi Léopold II, entre 1885 et 1908, l'exploitation brutale du caoutchouc a entraîné la mort de 10 à 13 millions de Congolais.",
  "Plus d'un siècle plus tard, ce n'est plus le caoutchouc, mais l'or, le coltan et les minerais qui alimentent l'industrie électronique mondiale qui financent le sang congolais. La reconnaissance officielle de ces atrocités économiques est le premier pilier de la justice transitionnelle.",
]

const meaningStats = [
  {
    value: "1885-1908",
    label: "Mémoire coloniale",
  },
  {
    value: "10 à 13 M",
    label: "Congolais tués selon des historiens",
  },
  {
    value: "2023",
    label: "Institution de la commémoration nationale",
  },
  {
    value: "3 éditions",
    label: "Organisées en 2023, 2024 et 2025",
  },
]

const roadmap = [
  {
    date: "1885 - 1908",
    place: "Mémoire historique",
    title: "Caoutchouc, exploitation coloniale et violences de masse",
    text: "Sous le règne colonial du roi Léopold II, l'exploitation frénétique et brutale du caoutchouc a entraîné la mort de 10 à 13 millions de Congolais.",
  },
  {
    date: "Depuis 1993",
    place: "RDC",
    title: "Ressources minières, massacres et prédation",
    text: "Les conflits contemporains ont déjà coûté la vie à plus de six millions de compatriotes, dans un contexte marqué par l'accaparement illégal de l'or, du coltan et d'autres minerais.",
  },
  {
    date: "26 décembre 2022",
    place: "Cadre légal",
    title: "Loi n°22/065",
    text: "La journée nationale d'hommages aux victimes dénommée Genocost est prévue par l'article 28 de la loi n°22/065 fixant les principes de protection et de réparation des victimes.",
  },
  {
    date: "02 août 2023",
    place: "RDC et diaspora",
    title: "Institution de la commémoration nationale",
    text: "Le 2 août devient un moment de recueillement national, vibrant dans les villes, les villages et au-delà des frontières.",
  },
  {
    date: "2023 - 2025",
    place: "Nation congolaise",
    title: "Trois éditions déjà organisées",
    text: "Les éditions 2023, 2024 et 2025 témoignent de la volonté constante de perpétuer le devoir de mémoire et de faire entendre la voix des victimes à travers les générations.",
  },
]

const Genocost = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const carouselRef = useRef(null)
  const audioRef = useRef(null)

  const stopAmbientSound = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsSoundOn(false)
  }

  const startAmbientSound = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55
    audio.play()
      .then(() => setIsSoundOn(true))
      .catch(() => setIsSoundOn(false))
  }

  const toggleAmbientSound = () => {
    if (isSoundOn) {
      stopAmbientSound()
      return
    }

    startAmbientSound()
  }

  useEffect(() => {
    const revealElements = document.querySelectorAll(`[data-genocost-reveal]`)
    const startFromNavbarIntent = () => {
      const hasIntent = window.sessionStorage.getItem("genocost-sound-intent") === "1"

      if (!hasIntent) return

      window.sessionStorage.removeItem("genocost-sound-intent")
      window.requestAnimationFrame(() => startAmbientSound())
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    )

    revealElements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 320)}ms`)
      observer.observe(element)
    })

    startFromNavbarIntent()
    window.addEventListener("genocost-audio-start", startFromNavbarIntent)

    return () => {
      observer.disconnect()
      window.removeEventListener("genocost-audio-start", startFromNavbarIntent)
      stopAmbientSound()
    }
  }, [])

  const handleSlide = (index) => {
    const safeIndex = (index + memoryImages.length) % memoryImages.length
    setActiveSlide(safeIndex)
    const slide = carouselRef.current?.querySelector(`[data-slide="${safeIndex}"]`)
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }

  return (
    <>
      <Head>
        <title>FONAREV RDC | Genocost</title>
        <meta
          name="description"
          content="Page Genocost du FONAREV : mémoire des victimes, reconnaissance, plaidoyer, réparation et actions de commémoration."
        />
      </Head>

      <main className={styles.main}>
        {/* <audio ref={audioRef} src="/genocost-hope-lament.wav" loop preload="auto" /> */}

        <section className={styles.hero}>
          <Image src="/genocost-banner-fire.jpeg" alt="Commémoration Genocost portée par le FONAREV" fill priority sizes="100vw" />
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Mémoire nationale</span>
            <h1>Genocost</h1>
            <p>
              Génocide pour des gains économiques : une vérité que le silence ne peut plus étouffer, portée par la mémoire
              des victimes et l'exigence de justice, de vérité et de réparation.
            </p>
          </div>
        </section>

        <section className={styles.intro} data-genocost-reveal>
          <div className={styles.introText}>
            <span className={styles.eyebrow}>Génocide pour des gains économiques</span>
            <h2>Nommer l'innommable, refuser la prédation, restaurer la dignité.</h2>
            <p>
              Le terme « Geno-cost » nomme un génocide perpétré pour des gains économiques. Il rappelle que les violences qui
              ravagent le territoire congolais ne sont pas le fruit d'une fatalité ou de haines spontanées, mais le résultat
              d'une prédation financière qui sacrifie la vie humaine.
            </p>
            <p>
              Dire Genocost, c'est poser un acte de vérité. C'est honorer les morts, accompagner les survivants et faire de la
              mémoire un pilier de justice transitionnelle et de non-répétition.
            </p>
          </div>
          <aside className={styles.introPanel}>
            <small>Appel à la signature</small>
            <h3>Signez pour que ces crimes soient regardés, nommés et reconnus.</h3>
            <p>
              Par cette pétition, le FONAREV appelle à reconnaître les victimes, établir la vérité, préserver la mémoire
              collective et prévenir la répétition de tels crimes.
            </p>
            <Link href="/petition">
              Signer la pétition
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </aside>
        </section>

        <section className={styles.roadmap} data-genocost-reveal>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Histoire, origines et commémoration</span>
            <h2>Du caoutchouc aux minerais, une continuité historique à regarder en face</h2>
            <p>
              Comprendre le Genocost exige de relier le passé colonial, les conflits contemporains, le cadre légal de la
              commémoration et la mobilisation nationale du 2 août.
            </p>
          </div>
          <div className={styles.timeline}>
            {roadmap.map((item) => (
              <article key={`${item.date}-${item.title}`}>
                <div className={styles.timelineMeta}>
                  <strong>{item.date}</strong>
                  <span>
                    <Icon icon="solar:map-point-bold" />
                    {item.place}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.meaning} data-genocost-reveal>
          <div className={styles.meaningImages}>
            <div className={styles.meaningPrimaryImage}>
              <Image src="/hommes.jpg" alt="Mémoire et reconnaissance du Genocost" fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div className={styles.meaningSecondaryImage}>
              <Image src="/genocost-car.jpeg" alt="Commémoration du Genocost" fill sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
          </div>
          <div className={styles.meaningContent}>
            <span className={styles.eyebrow}>Comprendre le Genocost</span>
            <h2>Geno-cost : génocide, coût humain et prédation économique.</h2>
            <div className={styles.meaningLead}>
              <strong>Il est des vérités que le silence ne peut plus étouffer.</strong>
              <p>
                Les massacres systématiques et planifiés qui endeuillent la nation exigent d'être reconnus par le monde
                entier avec la plus grande fermeté.
              </p>
            </div>
            <div className={styles.meaningText}>
              {meaningParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.meaningStats}>
              {meaningStats.map((item) => (
                <article key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
            <blockquote>
              Le FONAREV porte ce devoir de mémoire comme un bouclier pour les générations futures : se souvenir, honorer,
              accompagner et garantir la non-répétition.
            </blockquote>
          </div>
        </section>

        <section className={styles.memory} data-genocost-reveal>
          <div className={styles.memoryIntro}>
            <div>
              <span className={styles.eyebrow}>Le devoir de mémoire</span>
              <h2>Oublier, c'est accepter de devenir complice.</h2>
              <p>
                La reconnaissance officielle des atrocités économiques n'est pas seulement un acte symbolique ; c'est une
                exigence morale absolue et le premier pilier de la justice transitionnelle.
              </p>
            </div>
            <div className={styles.carouselActions}>
              <button type="button" onClick={() => handleSlide(activeSlide - 1)} aria-label="Précédent">
                ‹
              </button>
              <button type="button" onClick={() => handleSlide(activeSlide + 1)} aria-label="Suivant">
                ›
              </button>
            </div>
          </div>

          <div className={styles.carouselViewport} ref={carouselRef}>
            {memoryImages.map((image, index) => (
              <figure className={styles.memoryCard} key={image.title} data-slide={index}>
                <Image className={styles.memoryVisual} src={image.src} alt={image.title} />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{memoryCards[index]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.carouselDots} aria-label="Navigation des visuels de mobilisation">
            {memoryImages.map((image, index) => (
              <button
                type="button"
                key={image.title}
                className={activeSlide === index ? styles.activeDot : ""}
                onClick={() => handleSlide(index)}
                aria-label={`Voir ${image.title}`}
              />
            ))}
          </div>
        </section>

        <section className={styles.speech} data-genocost-reveal>
          <Image src="/genocost-car.jpeg" alt="Moment de recueillement autour du Genocost" fill sizes="100vw" />
          <div className={styles.speechIntro}>
            <span className={styles.eyebrow}>Messages clés</span>
            <h2>Vérité, mémoire et réparation au cœur du Genocost</h2>
            <p>
              La nation congolaise transforme sa douleur historique en quête de justice pour chaque victime, dans les villes,
              les villages et au sein de la diaspora.
            </p>
          </div>
          <div className={styles.quoteGrid}>
            {quotes.map((quote) => (
              <article key={quote.title}>
                <Icon icon="solar:quote-up-bold" />
                <small>{quote.title}</small>
                <p>“{quote.text}”</p>
                <Link href="/petition">
                  Soutenir la pétition
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.efforts} data-genocost-reveal>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Espoir en action</span>
            <h2>Ce que le FONAREV porte pour la reconnaissance du Genocost</h2>
            <p>
              La reconnaissance se construit par la mémoire, la mobilisation citoyenne, la commémoration, la documentation et
              la voix des victimes portée à travers les générations.
            </p>
          </div>
          <div className={styles.effortFeature}>
            <div className={styles.effortFeatureImage}>
              <Image src="/genocost-documentaire.png" alt="Efforts du FONAREV auprès des victimes" fill sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
            <div className={styles.effortFeatureText}>
              <span>Documentaire - public averti (-18)</span>
              <h3>Le génocide silencieux en RD Congo</h3>
              <p>
                Ce documentaire met en lumière les guerres, les massacres et les silences qui ont coûté la vie à des millions
                de Congolais depuis les années 1990. À travers les voix des survivants, des chercheurs et des acteurs engagés,
                il rappelle que le Genocost porte une exigence claire : vérité, justice, réparation et mémoire contre l'oubli.
              </p>
              <a href="https://www.youtube.com/watch?v=rzVntclLTdM&t=6s" target="_blank" rel="noreferrer">
                Suivre le documentaire
                <Icon icon="solar:play-circle-bold" />
              </a>
            </div>
          </div>
        </section>

        {/* <section className={styles.finalCta} data-genocost-reveal>
          <div>
            <span className={styles.eyebrow}>Appel à contributions</span>
            <h2>Étudiants, chercheurs, porteurs de projets : proposez une recherche sur le Genocost.</h2>
            <p>
              Le FONAREV encourage les initiatives scientifiques et mémorielles pour renforcer la documentation, la
              reconnaissance et la transmission.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/opportunites/appels-a-contributions">
              Soumettre un projet
              <Icon icon="solar:arrow-right-linear" />
            </Link>
            <Link href="/contact">
              Demander des informations
              <Icon icon="solar:letter-linear" />
            </Link>
          </div>
        </section> */}

      </main>
    </>
  )
}

export default Genocost

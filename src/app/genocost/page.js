"use client"

import React, { useEffect, useRef, useState } from "react"
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

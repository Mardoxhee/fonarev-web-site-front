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

const focusCards = [
  {
    icon: "solar:calendar-mark-bold",
    label: "Date de commémoration",
    value: "02 août",
    text: "Une journée pour nommer les crimes, honorer les victimes et porter la mémoire collective.",
  },
  {
    icon: "solar:map-point-wave-bold",
    label: "Rayonnement",
    value: "RDC, Genève, New York",
    text: "Le plaidoyer relie les communautés touchées aux espaces nationaux et internationaux.",
  },
]

const quotes = [
  {
    title: "Extrait 1",
    text: "Nous nous engageons à honorer la mémoire, à reconnaître la douleur et à soutenir la dignité des victimes.",
  },
  {
    title: "Extrait 2",
    text: "La reconnaissance est un pas essentiel vers la justice, la réparation et la non-répétition.",
  },
  {
    title: "Extrait 3",
    text: "Notre responsabilité collective est de préserver la mémoire et de transformer la commémoration en action.",
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
  "Le terme « Geno-cost » signifie « génocide pour des gains économiques ». Il associe les mots « génocide » et « coût » pour rappeler la nature économique des violences de masse en République démocratique du Congo.",
  "Dans l'histoire du génocide en RDC, les conflits actuels, qui ont coûté la vie à plus de six millions de personnes, ne sont pas les premiers du genre. Des historiens comme Adam Hochschild et Isidore Ndaywel è Nziem rappellent que, pendant le règne colonial du roi Léopold II (1885-1908), environ 10 à 13 millions de Congolais ont été tués en raison de l'exploitation brutale du caoutchouc et d'autres ressources naturelles.",
  "Plus d'un siècle plus tard, l'histoire se répète : des millions de Congolais paient encore de leur vie à cause de l'exploitation du coltan, de l'or et d'autres ressources naturelles. Reconnaître le Genocost, c'est refuser l'oubli, honorer les victimes et soutenir les actions de réparation et de non-répétition.",
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
    label: "Première commémoration nationale",
  },
]

const roadmap = [
  {
    date: "1885 - 1908",
    place: "Mémoire historique",
    title: "Exploitation coloniale et violences de masse",
    text: "La mémoire du Genocost replace les tragédies actuelles dans une longue histoire de violences liées aux ressources.",
  },
  {
    date: "Depuis 1993",
    place: "RDC",
    title: "Massacres, déplacements et violences systématiques",
    text: "Les communautés touchées portent les conséquences humaines, sociales et territoriales de cycles de violence prolongés.",
  },
  {
    date: "2010",
    place: "Nations Unies",
    title: "Rapport Mapping",
    text: "La documentation des crimes graves renforce l'exigence de vérité, de justice et de reconnaissance internationale.",
  },
  {
    date: "02 août",
    place: "RDC et diaspora",
    title: "Commémoration du Genocost",
    text: "La journée de mémoire rassemble les victimes, les institutions et les partenaires autour de la reconnaissance.",
  },
  {
    date: "2026",
    place: "RDC - Genève - New York",
    title: "Plaidoyer, capitalisation et prochaines étapes",
    text: "Le FONAREV consolide les acquis, documente les résultats et prépare les nouvelles séquences de plaidoyer.",
  },
]

const efforts = [
  {
    image: "/geneve-fonarev.png",
    tag: "Plaidoyer",
    title: "Porter la reconnaissance dans les espaces publics",
    text: "Actions de mobilisation, rencontres et messages institutionnels pour faire connaître le Genocost.",
  },
  {
    image: "/genocost1.jpg",
    tag: "Commémoration",
    title: "Faire vivre la mémoire des victimes",
    text: "Cérémonies, recueillement et espaces de parole pour que les victimes ne soient pas réduites au silence.",
  },
  {
    image: "/senat-internationl-fonarec.jpeg",
    tag: "Reconnaissance",
    title: "Relier mémoire, vérité et réparation",
    text: "Un plaidoyer international qui transforme la commémoration en engagement concret pour la justice et la non-répétition.",
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
              Une page dédiée à la reconnaissance des génocides congolais et aux actions portées par le FONAREV pour honorer
              les victimes, soutenir la vérité et transformer la mémoire en réparation.
            </p>
          </div>
        </section>

        <section className={styles.intro} data-genocost-reveal>
          <div className={styles.introText}>
            <span className={styles.eyebrow}>Reconnaissance, mémoire et réparation</span>
            <h2>Nommer la tragédie, protéger la mémoire, ouvrir un chemin d'espoir.</h2>
            <p>
              Le Genocost rappelle les millions de vies brisées par les violences de masse, les déplacements forcés, les
              violences sexuelles liées aux conflits et les crimes commis contre les populations civiles en République
              démocratique du Congo.
            </p>
            <p>
              Cette mémoire n'est pas seulement un regard vers le passé. Elle porte une exigence de justice, de réparation et
              de non-répétition, afin que la douleur des victimes devienne une responsabilité nationale et internationale.
            </p>
          </div>
          <aside className={styles.introPanel}>
            <small>Point clé</small>
            <h3>Autour du 02 août, le FONAREV intensifie la mobilisation.</h3>
            <p>
              Campagnes, plaidoyer, side events et activités de commémoration contribuent à porter la mémoire des victimes et
              à renforcer la reconnaissance.
            </p>
            <Link href="/petition">
              Signer la pétition
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </aside>
        </section>

        <section className={styles.focusGrid} data-genocost-reveal>
          {focusCards.map((item) => (
            <article key={item.label}>
              <Icon icon={item.icon} />
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.meaning} data-genocost-reveal>
          <div className={styles.meaningImages}>
            <div className={styles.meaningPrimaryImage}>
              <Image src="/genocost2.jpg" alt="Mémoire et reconnaissance du Genocost" fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div className={styles.meaningSecondaryImage}>
              <Image src="/genocost-car.jpeg" alt="Commémoration du Genocost" fill sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
          </div>
          <div className={styles.meaningContent}>
            <span className={styles.eyebrow}>Comprendre le Genocost</span>
            <h2>Geno-cost : le coût humain d'une économie de prédation.</h2>
            <div className={styles.meaningLead}>
              <strong>Nommer, c'est déjà refuser l'effacement.</strong>
              <p>
                Cette page porte une mémoire douloureuse : celle des victimes congolaises dont les vies ont été brisées par
                l'exploitation, les massacres, les déplacements forcés et les violences liées aux conflits.
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
              La reconnaissance officielle et les actions de réparation sont des étapes essentielles pour honorer les millions
              de victimes et empêcher la répétition de ces tragédies.
            </blockquote>
          </div>
        </section>

        <section className={styles.memory} data-genocost-reveal>
          <div className={styles.memoryIntro}>
            <div>
              <span className={styles.eyebrow}>Moments de mobilisation</span>
              <h2>Une mémoire collective à faire vivre</h2>
              <p>
                Ces visuels rappellent des lieux, des périodes et des douleurs qui doivent rester dans la conscience
                collective. Les intégrer à la page Genocost donne un visage plus direct à la reconnaissance demandée.
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
            <span className={styles.eyebrow}>Discours</span>
            <h2>Extraits des discours du Chef de l'État</h2>
            <p>
              Des paroles pour rappeler l'engagement institutionnel et l'importance de la mémoire, de la reconnaissance et de
              la justice.
            </p>
          </div>
          <div className={styles.quoteGrid}>
            {quotes.map((quote) => (
              <article key={quote.title}>
                <Icon icon="solar:quote-up-bold" />
                <small>{quote.title}</small>
                <p>“{quote.text}”</p>
                <Link href="/actualites">
                  Lire le discours
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.roadmap} data-genocost-reveal>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Périodes et cartographies</span>
            <h2>Une mémoire située, de l'histoire aux espaces de plaidoyer</h2>
            <p>
              Ces repères structurent la lecture du Genocost : les périodes de violence, les territoires touchés et les lieux
              où la reconnaissance doit continuer à avancer.
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

        <section className={styles.efforts} data-genocost-reveal>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Espoir en action</span>
            <h2>Ce que le FONAREV porte pour la reconnaissance du Genocost</h2>
            <p>
              La reconnaissance se construit aussi par des présences visibles : mobilisation, commémoration, documentation,
              plaidoyer et dialogue avec les communautés.
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
          <div className={styles.effortGrid}>
            {efforts.map((effort) => (
              <article key={effort.title}>
                <div>
                  <Image src={effort.image} alt={effort.title} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <small>{effort.tag}</small>
                <h3>{effort.title}</h3>
                <p>{effort.text}</p>
              </article>
            ))}
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

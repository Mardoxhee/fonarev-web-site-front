"use client"

import { useEffect, useMemo, useState } from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Faq from "./../components/faq";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Modal from "react-modal";
import Head from "next/head";
import ActuCard from "./../components/actuCard";

const heroSlides = [
  {
    eyebrow: "Justice, dignité, réparation",
    title: "Identifier les victimes et ouvrir un chemin de réparation",
    highlight: "Identifier les victimes",
    text: "Le FONAREV accompagne les survivantes et survivants des violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de l'humanité.",
    background: "/reparation.jpg",
  },
  {
    eyebrow: "Réparer pour reconstruire",
    title: "Allouer des réparations qui replacent les victimes au centre",
    highlight: "Allouer des réparations",
    text: "Chaque action vise un bénéfice concret pour les victimes, dans l'écoute, la protection, l'accompagnement et la restauration de la dignité.",
    background: "/Idevic2.JPG",
  },
  {
    eyebrow: "Mémoire et accès aux droits",
    title: "Aider les victimes à accéder à la justice",
    highlight: "accéder à la justice",
    text: "Le FONAREV agit avec les institutions, les partenaires et les communautés pour faire avancer la justice réparatrice en RDC.",
    background: "/idvic3.jpg",
  },
];

const repairSteps = [
  {
    icon: "solar:users-group-rounded-bold",
    title: "Identifier",
    text: "Reconnaissance des victimes, documentation des besoins et orientation vers les mécanismes adaptés.",
  },
  {
    icon: "solar:heart-pulse-bold",
    title: "Accompagner",
    text: "Soutien psychosocial, médico-sanitaire, juridique et communautaire dans un cadre humain.",
  },
  {
    icon: "solar:hand-heart-bold",
    title: "Réparer",
    text: "Mise en œuvre de réparations individuelles et collectives, selon les préjudices subis.",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Prévenir",
    text: "Mémoire, sensibilisation et plaidoyer pour rompre le cycle des violences et de l'impunité.",
  },
];

const territorialItems = [
  "Écoute au plus près des communautés touchées",
  "Reconstruction de la dignité et du lien social",
  "Mémoire vivante des territoires meurtris",
];

const voiceItems = [
  {
    background: "/prime.png",
    url: "https://youtube.com/embed/N32PEyFcl0w?si=BK4RGLC8tddRC577",
  },
  {
    background: "/feza.png",
    url: "https://youtube.com/embed/4qFKKnT1VmY?si=74UPoHIsFX0h-YsX",
  },
  {
    background: "/amina.png",
    url: "https://youtube.com/embed/WCWX68oE1WU?si=QhmCI-mWryroi_pZ",
  },
  {
    background: "/kanya.png",
    url: "https://youtube.com/embed/89zfhUkgom0?si=eRW9AecA8Qr6ErPY",
  },
  {
    background: "/zola.png",
    url: "https://youtube.com/embed/YFwENKZKnDI?si=Vm0_MkXlAhsWF0ZP",
  },
  {
    background: "/aicha.png",
    url: "https://youtube.com/embed/wz9Ce-jj0Ok?si=-VHd0O-imGoz2RYM",
  },
  {
    background: "/nsimba.png",
    url: "https://youtube.com/embed/CvbOlmYcIFY?si=CFK_2uhWWbKpdYr8",
  },
];

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(11, 18, 32, .72)",
    zIndex: 200,
    backdropFilter: "blur(8px)",
  },
  content: {
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
    width: "min(920px, 92vw)",
    height: "auto",
    border: "none",
    borderRadius: "18px",
    padding: "0",
    overflow: "hidden",
  },
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [lastFourArticles, setLastFourArticles] = useState([]);

  const currentSlide = heroSlides[currentIndex];

  const featuredArticles = useMemo(() => {
    return [...lastFourArticles].slice(0, 4).reverse();
  }, [lastFourArticles]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleGetArticles = async () => {
      try {
        const response = await fetch("https://fonarev-api.onrender.com/articles");
        const articles = await response.json();
        setLastFourArticles(articles.article.slice(-4));
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    handleGetArticles();
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      "main > section:not(:first-child), [class*='repairCard'], [class*='voiceCard'], [class*='cardWrapper'], [class*='faqItem']"
    );

    revealElements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 90, 360)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isClient, lastFourArticles]);

  const formatTitre = (titre) => {
    const titreFormate = titre?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return titreFormate?.replace(/\s+/g, "-");
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1));
  };

  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      <Head>
        <title key="title">FONAREV RDC - Fonds national des réparations</title>
        <meta key="keywords" name="keywords" content="FONAREV, Fonds national des réparations, victimes, RDC" />
        <meta key="og-title" property="og:title" content="Fonarev RDC" />
        <meta
          key="description"
          name="description"
          content="Découvrez le FONAREV, Fonds national des réparations des victimes des violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité."
        />
        <meta property="og:image" content="/logo-fonarev.png" />
        <meta key="og-url" property="og:url" content="https://fonarev.cd/" />
        <meta key="og-type" property="og:type" content="website" />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroMedia}>
            <Image src={currentSlide.background} alt="" fill priority sizes="100vw" />
          </div>
          <div className={styles.heroOverlay} />

          <button className={`${styles.heroArrow} ${styles.prevButton}`} onClick={handlePrev} aria-label="Slide précédent">
            <Icon icon="solar:alt-arrow-left-linear" />
          </button>
          <button className={`${styles.heroArrow} ${styles.nextButton}`} onClick={handleNext} aria-label="Slide suivant">
            <Icon icon="solar:alt-arrow-right-linear" />
          </button>

          <div className={styles.heroContent}>
            <div className={styles.heroKicker}>
              <span />
              {currentSlide.eyebrow}
            </div>
            <h1>
              {currentSlide.title.split(currentSlide.highlight)[0]}
              <mark>{currentSlide.highlight}</mark>
              {currentSlide.title.split(currentSlide.highlight)[1]}
            </h1>
            <p>{currentSlide.text}</p>
            <div className={styles.heroActions}>
              <Link href="/petition">
                Signer la pétition
                <Icon icon="solar:pen-new-square-linear" />
              </Link>
              <Link href="/a-propos-du-fonarev">
                Découvrir le FONAREV
                <Icon icon="solar:arrow-right-up-linear" />
              </Link>
            </div>
          </div>

          <div className={styles.heroDots} aria-label="Navigation du carrousel">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === currentIndex ? styles.activeDot : ""}
                onClick={() => goToSlide(index)}
                aria-label={`Afficher : ${slide.eyebrow}`}
              />
            ))}
          </div>
        </section>

        <section className={styles.introBand}>
          <div>
            <span className={styles.sectionEyebrow}>Une institution centrée victimes</span>
            <h2>Réparer les vies brisées, restaurer la dignité, faire avancer la mémoire.</h2>
          </div>
          <p>
            Le FONAREV porte une mission nationale sensible : transformer la reconnaissance des préjudices en actions concrètes,
            avec des réparations pensées pour les victimes, les familles et les communautés touchées.
          </p>
        </section>

        <section className={styles.videoSection}>
          <div className={styles.videoText}>
            <span className={styles.sectionEyebrow}>Parole aux victimes</span>
            <h2>Écouter avant d'agir.</h2>
            <p>
              Les témoignages rappellent que la réparation est d'abord une rencontre humaine : entendre, protéger, accompagner,
              puis reconstruire avec patience.
            </p>
            <Link href="https://www.youtube.com/@FonarevRDC/videos" target="_blank">
              Voir la médiathèque
              <Icon icon="solar:play-circle-linear" />
            </Link>
          </div>
          <div className={styles.tvWrapper}>
            <Image src="/tv-frame.png" alt="" fill sizes="(max-width: 900px) 100vw, 54vw" className={styles.tvImage} />
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/Xi0031x3W-A?si=_0PjlzBdS0WrRErc"
                title="Parole aux victimes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutImage}>
            <Image src="/pr-fatshi13.jpg" alt="Rencontre institutionnelle du FONAREV" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
          <div className={styles.aboutText}>
            <span className={styles.sectionEyebrow}>Qui sommes-nous ?</span>
            <h2>Le Fonds national des réparations des victimes.</h2>
            <p>
              Depuis plusieurs décennies, la République démocratique du Congo est marquée par des conflits armés qui engendrent de
              graves violations des droits de l'homme, y compris des actes de violences sexuelles. Les victimes, souvent laissées dans
              l'anonymat et la marginalisation, se heurtent à l'absence de mécanismes adéquats pour accéder à la justice et obtenir
              réparation.
            </p>
            <p>
              Créé en décembre 2022, le FONAREV est une institution publique placée sous la tutelle du ministère des Droits humains,
              en faveur des victimes des violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité
              de l'humanité.
            </p>
            <Link href="/a-propos-du-fonarev" className={styles.textCta}>
              En savoir plus
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </section>

        <section className={styles.repairSection}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Chemin de réparation</span>
            <h2>De l'identification à la reconstruction.</h2>
          </div>
          <div className={styles.repairGrid}>
            {repairSteps.map((step) => (
              <article key={step.title} className={styles.repairCard}>
                <Icon icon={step.icon} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.genocostSection}>
          <div className={styles.genocostText}>
            <span className={styles.sectionEyebrow}>GENOCOST</span>
            <h2>Nommer l'histoire pour mieux réparer.</h2>
            <p>
              « Geno-cost » signifie génocide pour des gains économiques. Cette thématique rappelle la nature économique des violences
              subies en RDC et l'urgence de faire vivre la mémoire, la justice et la réparation.
            </p>
            <Link href="/a-propos-du-fonarev/#genocost" className={styles.textCta}>
              Voir plus
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
          <div className={styles.genocostImage}>
            <Image src="/genocost-car.jpeg" alt="Visuel Genocost" fill sizes="(max-width: 900px) 100vw, 44vw" />
          </div>
        </section>

        <section className={styles.territorySection}>
          <div className={styles.territoryImages}>
            <div>
              <Image src="/pluie.jpg" alt="Paysage congolais sous la pluie" fill sizes="(max-width: 900px) 50vw, 24vw" />
            </div>
            <div>
              <Image src="/kits.jpeg" alt="Kits d'accompagnement communautaire" fill sizes="(max-width: 900px) 50vw, 24vw" />
            </div>
          </div>
          <div className={styles.territoryText}>
            <span className={styles.sectionEyebrow}>Territoires et nature</span>
            <h2>La réparation prend racine dans les communautés.</h2>
            <p>
              Derrière chaque territoire, il y a des familles, des terres, des souvenirs et des liens à reconstruire. Le FONAREV agit
              pour que la réparation ne soit pas seulement un dispositif, mais un retour progressif à la dignité et à la confiance.
            </p>
            <ul>
              {territorialItems.map((item) => (
                <li key={item}>
                  <Icon icon="solar:check-circle-bold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.voicesSection}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Nos voix pour elles</span>
            <h2>Des femmes influentes portent les histoires des survivantes.</h2>
          </div>
          <div className={styles.carouselGuide}>
            <span>
              <Icon icon="solar:play-circle-bold" />
              Cliquez sur une carte pour regarder le témoignage
            </span>
            <span>
              <Icon icon="solar:alt-arrow-right-linear" />
              Faites défiler pour voir plus de voix
            </span>
          </div>
          {isClient && (
            <div className={styles.carouselContainer}>
              <AliceCarousel
                mouseTracking
                items={voiceItems.map((item, index) => (
                  <button key={item.url} className={styles.voiceCard} onClick={() => openModal(item.url)}>
                    <Image src={item.background} alt={`Témoignage ${index + 1}`} fill sizes="(max-width: 600px) 82vw, 20vw" />
                    <small>Témoignage vidéo</small>
                    <span>
                      <Icon icon="solar:play-bold" />
                    </span>
                  </button>
                ))}
                responsive={{
                  0: { items: 1 },
                  650: { items: 2 },
                  1024: { items: 4 },
                }}
                controlsStrategy="alternate"
                infinite
                autoPlay
                autoPlayInterval={3200}
                animationDuration={900}
                renderPrevButton={() => <button className={styles.arrowLeft} aria-label="Precedent">‹</button>}
                renderNextButton={() => <button className={styles.arrowRight} aria-label="Suivant">›</button>}
              />
            </div>
          )}
        </section>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles} contentLabel="Video Modal" ariaHideApp={false}>
          <button onClick={closeModal} className={styles.closeButton} aria-label="Fermer la video">
            <Icon icon="solar:close-circle-bold" />
          </button>
          <div className={styles.videoContainer}>
            {videoUrl && (
              <iframe
                src={videoUrl}
                title="Vidéo témoignage"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </Modal>

        <section className={styles.partnerSection}>
          <Image src="/hommes.jpg" alt="Partenaires de l'écosystème FONAREV" fill sizes="100vw" />
          <div className={styles.partnerText}>
            <span className={styles.sectionEyebrow}>Écosystème FONAREV</span>
            <h2>Ensemble pour redonner espoir aux victimes.</h2>
            <p>L'enregistrement des structures de l'écosystème du FONAREV est en cours.</p>
            <a href="https://front.ecosys.fonasite.app/" target="_blank" rel="noreferrer">
              Enregistrer une structure
              <Icon icon="solar:arrow-right-up-linear" />
            </a>
          </div>
        </section>

        <section className={styles.newsSection}>
          <div className={styles.newsHeader}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>Actualités</span>
              <h2>Les dernieres nouvelles du FONAREV.</h2>
            </div>
            <Link href="/actualites" className={styles.newsTopCta}>
              Toutes les actualités
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
          <div className={styles.cardContainer}>
            {featuredArticles.map((article, index) => (
              <Link key={article._id || index} href={`/actualites/details?articleId=${article._id}?articleTitle=${formatTitre(article.titre)}`}>
                <ActuCard title={article.titre} date={article.date} category={article.category} bg={article.thumbanails} />
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>FAQ</span>
            <h2>Foire aux questions.</h2>
          </div>
          <div className={styles.faqContainer}>
            <Faq />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

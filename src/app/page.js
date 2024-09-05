"use client"
import { useState, useEffect } from "react";
import styles from "./home.module.scss";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Actucard from './../components/actuCard'
import HeadActu from './../components/headActu'
import Link from 'next/link';
import Faq from './../components/faq'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Modal from "react-modal";
import Head from 'next/head'; 


const carouselItems = [
  {
    text: (
      <>
        <span className={styles.highlight}>
          Identifier les victimes
        </span> 
        des violences sexuelles liées aux conflits et les victimes des crimes contre la paix et la sécurité de l’humanité depuis 1993
      </>
    ),
    background: "/ident.jpg"
  },
  {
    text: (
      <>
        Aider les victimes des violences sexuelles liées aux conflits et les victimes des crimes contre la paix et la sécurité de l’humanité à 
        <span className={styles.highlight}>avoir accès à la justice</span>
      </>
    ),
    background: "/carou-bg.jpg"
  },
  {
    text: (
      <>
        <span className={styles.highlight}>
          Allouer des réparations aux victimes
        </span>  
        des violences sexuelles liées aux conflits et les victimes des crimes contre la paix et la sécurité de l’humanité à avoir accès à la justice
      </>
    ),
    background: "/fonarev-about.jpg"
  }
];

const quoteItems = [
  {
    quote: "Nous ne pouvons espérer un Congo nouveau sans réparer les dommages causés à celles qui, par leur sagesse, bâtissent la nation et par leur force, engendrent et éduquent nos héros. La violence sexuelle en temps de conflit est un problème global, c’est une affaire de tous !",
    author: "Kevin NGUNGA MAKIEDI",
    title: "DG ai FONAREV",
    background: "/kv.jpg"
  },
  {
    quote: "Le Fonds National des Réparations des Victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l’humanité. ",
    author: "Denise NYAKERU TSHISEKEDI",
    title: "Première dame de la RDC",
    background: "/denise.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum volutpat.",
    author: "Felix Antoine TSHISEKEDI TSHILOMBO",
    title: "Président de la RDC",
    background: "/ft.jpg"
  }
];


const sliderItems = [
  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/prime.png",
    url : "https://youtube.com/embed/N32PEyFcl0w?si=BK4RGLC8tddRC577"
  },
  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/feza.png",
    url:"https://youtube.com/embed/4qFKKnT1VmY?si=74UPoHIsFX0h-YsX"
  },

  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/amina.png",
    url: "https://youtube.com/embed/WCWX68oE1WU?si=QhmCI-mWryroi_pZ"
  },
  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/kanya.png",
    url : "https://youtube.com/embed/89zfhUkgom0?si=eRW9AecA8Qr6ErPY"
  },
  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/zola.png",
    url :"https://youtube.com/embed/YFwENKZKnDI?si=Vm0_MkXlAhsWF0ZP"
  },
  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/aicha.png",
    url :"https://youtube.com/embed/wz9Ce-jj0Ok?si=-VHd0O-imGoz2RYM"

  },
  {
    title: "Témoignage de Amina jeune femme violée ",
    description: "dezezz",
    background: "/nsimba.png",
    url:"https://youtube.com/embed/CvbOlmYcIFY?si=CFK_2uhWWbKpdYr8"
  },

];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    marginTop:"80px",
    height: "70%",
  },
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const visibleSlides = 5; // Number of visible slides
  const handleNextSlide = () => {
    if (currentSlide < sliderItems.length - 4) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };
  

  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };
  

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl(""); // Reset video URL when modal is closed
  };

  const handleNextQuote = () => {
    setFade(true);
    setTimeout(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quoteItems.length);
      setFade(false);
    }, 500);
  };

  const handlePrevQuote = () => {
    setFade(true);
    setTimeout(() => {
      setQuoteIndex((prevIndex) => 
        prevIndex === 0 ? quoteItems.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNextQuote, 5000); // Change quote every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      setFade(false);
    }, 500);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <Head>
          <meta property="og:title" content="Fonarev RDC - A propos du FONAREV" />
    <meta property="og:description" content="Découvrez le FONAREV, le Fonds National des Réparations des Victimes des Violences Sexuelles liées aux Conflits et des Victimes des Crimes contre la paix et la sécurité de l'humanité." />
    <meta property="og:image" content="/logo-fonarev.png" />
    <meta property="og:url" content="https://fonarev.cd/a-propos-du-fonarev" />
    <meta property="og:type" content="website" />
    </Head>
    <main className={styles.mainContainer}>
      <section className={styles.bannerContainer}>
        <div
          className={`${styles.carouselContainer} ${fade ? styles.fade : ""}`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${carouselItems[currentIndex].background})`
          }}
        >
          <button className={styles.prevButton} onClick={handlePrev}>
            &#10094;
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            &#10095;
          </button>
          <div className={styles.carouselText}>
            <p>{carouselItems[currentIndex].text}</p>
          </div>
        </div>

        <div className={styles.actuContainer}>
          <HeadActu  title="Information 1" date="12 mai 2024" category="Urgence" bg="/kv.jpg" />
          <HeadActu  title="Information 1" date="12 mai 2024" category="Urgence" bg="/kv.jpg" />
          <HeadActu  title="Information 1" date="12 mai 2024" category="Urgence" bg="/kv.jpg" />
           {/* <Actucard title="Information 1" date="12 mai 2024" category="Urgence" bg="/kv.jpg" />
           <Actucard title="Information 1" date="12 mai 2024" category="Urgence" bg="/kv.jpg" />
           <Actucard title="Information 1" date="12 mai 2024" category="Urgence" bg="/kv.jpg" /> */}
        </div>
      </section>

      <section className={styles.aboutUs}>
        <div 
          className={`${styles.citationContainer} ${fade ? styles.fade : ""} ${styles.aboutCitation}`}
        >
          <Image
            src={quoteItems[quoteIndex].background}
            alt="Background image"
            layout="fill"
            objectFit="cover"
            className={styles.backgroundImage}
          />
          <div className={styles.quoteContainer}>
            <div className={styles.quoteIcon}>“</div>
            <p className={styles.quoteText}>{quoteItems[quoteIndex].quote}</p>
            <p className={styles.authorName}>{quoteItems[quoteIndex].author}</p>
            <p className={styles.authorTitle}>{quoteItems[quoteIndex].title}</p>
          </div>
        </div>
        <div className={styles.aboutText}>
          <h2>QUI SOMMES NOUS</h2>
          <h1>Le Fonds National des Réparations des Victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité.</h1>
          <p>
          Depuis plusieurs décennies, la République Démocratique du Congo est marquée par des conflits armés qui engendrent de graves violations des droits de l'homme, y compris des actes de violences sexuelles. Les victimes, souvent laissées dans l'anonymat et la marginalisation, se heurtent à l'absence de mécanismes adéquats pour accéder à la justice et obtenir réparation.
Dans ce contexte alarmant, et grâce à un processus de plaidoyer mené par la Distinguée Première Dame Denise Nyakeru Tshisekedi, la République Démocratique du Congo a adopté, le 26 décembre 2022, une loi créant le <strong>Fonds National des Réparations des Victimes des Violences Sexuelles liées aux Conflits et des Victimes des Crimes contre la paix et la sécurité de l'humanité</strong>, communément appelé FONAREV.
Le FONAREV est une institution à caractère publique en faveur de la réparation des victimes des violences sexuelles liés aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité sous la tutelle du Ministère des droits humains.

          </p>
          <Link href ="/a-propos-du-fonarev" >
            <button> 
              En savoir plus <Icon icon="solar:arrow-right-broken" className={styles.icone} /> 
            </button>
          </Link>
        </div>
      </section>

      <section className={styles.genocostContainer}>
            <div className={styles.textContainer}>
              <h2>GENOCOST</h2>
              <h3>"Geno-cost" signifie « génocide pour des gains économiques ». C'est une combinaison des mots </h3>
              <p>"génocide" et "coût", expliquant ainsi la nature économique du génocide en RDC. Dans l'histoire du génocide en République Démocratique du Congo, les conflits actuels, qui ont coûté la vie à plus de six millions de personnes, ne sont pas les premiers du genre. Selon des historiens comme Adam Hochschild et Isidore Ndaywel è Nziem, pendant le règne colonial du roi Léopold Il (1885-1908), environ 10 à 13 millions de Congolais ont été tués en raison de l'exploitation brutale du caoutchouc et d'autres ressources naturelles.
                 Ce nombre de morts représentait environ la moitié de la population indigène du Congo.</p>
              <Link href="/a-propos-du-fonarev/#genocost">
              <button>Voir plus <Icon icon="solar:arrow-right-broken" className={styles.icone} /></button>
              </Link>
            
            </div>
            <div className={styles.flyerContainer}>
              <Image src="/geno.jpg" alt="Genocost flyer" layout="fill" objectFit="cover"  />
            </div>
      </section>
      {/* <section className={styles.slider}>
          <h2>ELLES PRETENT LEURS VOIX</h2>
          <h3>Témoiganges de nos survivantes, interprêtées par quelques personnalités influentes du pays</h3>
          <div className={styles.carousselContainer}>
          <div className={styles.carouselInner} style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}>
              {sliderItems.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                <Image src={item.background} alt={item.title} layout="fill" objectFit="cover" />
                <div className={styles.itemContent}>
                  <h3>{item.date}</h3>
                  <h4>{item.title}</h4>
                  <p className="">{item.description}</p>
                </div>
                <div className={styles.hoverText}>
                  <p>Texte supplémentaire affiché lors du hover</p>
                </div>
              </div>
              ))}
            </div>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrevSlide}>
              &#10094;
            </button>
            {currentSlide < sliderItems.length - 4 && (
                <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextSlide}>
                  &#10095;
                </button>
              )}

          </div>
        </section> */}
      <section className={styles.slider}>
        <h2>NOS VOIX POUR ELLES</h2>
        <h3>Lorem ipsum dei gloriam lorem ipsum dei gloriam lorem ipsum dei gloriam</h3>
        {isClient && (
          <div className={styles.carousselContainer}>
            <AliceCarousel
              mouseTracking
              items={sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={styles.carouselItem}
                  onClick={() => openModal(item.url)} // Open modal on click
                >

                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.background}
                      alt={item.description}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.itemContent}>
                  <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p></p>
                  </div>
                </div>
              ))}
              responsive={{
                0: { items: 1 },
                600: { items: 2 },
                1024: { items: 5 },
              }}
              controlsStrategy="alternate"
              infinite
              autoPlay
              autoPlayInterval={3000}
              animationDuration={1000}
              renderPrevButton={() => <button className={styles.arrowLeft}>‹</button>}
              renderNextButton={() => <button className={styles.arrowRight}>›</button>}
            />
          </div>
        )}
      </section>

<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Video Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal} className={styles.closeButton}>
          X
        </button>
        <div className={styles.videoContainer}>
          {videoUrl && (
            <iframe
              width="100%"
              height="500px"
              src={videoUrl}
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          )}
        </div>
      </Modal>
        <section className={styles.jumb}>
              <div className={styles.bgCover}>
            
              </div>
              <div className={styles.giftText}>
                <h2>Vous pouvez aussi soutenir les victimes</h2>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                <Link href ="/faire-un-don" >
                  <button>FAIRE UN DON</button>
                </Link>
              </div>
        </section>

        <section className={styles.actualites}>
            <h2>NOS DERNIERES ACTUALITES </h2>
            <h3>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</h3>
            <div className={styles.cardContainer}>
                <Actucard title="Titre de lactualite" date="12 mai 2024" category="Actualités" />
                <Actucard title="Titre de lactualite" date="12 mai 2024" category="Actualités" />
                <Actucard title="Titre de lactualite" date="12 mai 2024" category="Actualités" />
                <Actucard title="Titre de lactualite" date="12 mai 2024" category="Actualités" />
            </div>
        </section>
        <section className={styles.faq}>
            <h2>FAQ </h2>
            <h3>Foire Aux Questions</h3>
            <div className={styles.faqContainer}>
              <Faq/>
            </div>
            <Link href="/faq">
              <button>VOIR PLUS</button>
            </Link>
        </section>

    </main></>

  );
};

export default Home;

"use client"
import { useState, useEffect } from "react";
import styles from "./home.module.scss";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Actucard from './../components/actuCard'
import HeadActu from './../components/headActu'
import Link from 'next/link';

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
    date: "Août 2024",
    title: "Commémoration du génocide congolais (Genocost)",
    description: "Lorem ipsum dei gloriam lorem ipsum dei gloriam batum candum rabum cabicusorem ipsum dei gloriam batum candum",
    background: "/kv.jpg"
  },
  {
    date: "Juillet 2024",
    title: "Événement national important",
    description: "Lorem ipsum dei gloriam lorem ipsum dei gloriam batum candum rabum cabicusorem ipsum dei gloriam batum candum",
    background: "/ft.jpg"
  },
  {
    date: "Juin 2024",
    title: "Autre événement",
    description: "Lorem ipsum dei gloriam lorem ipsum dei gloriam batum candum rabum cabicusorem ipsum dei gloriam batum candum",
    background: "/denise.jpg"
  },
  {
    date: "Juin 2024",
    title: "Autre événement",
    description: "Lorem ipsum dei gloriam lorem ipsum dei gloriam batum candum rabum cabicusorem ipsum dei gloriam batum candum",
    background: "/denise.jpg"
  },
  {
    date: "Juillet 2024",
    title: "Événement national important",
    description: "Lorem ipsum dei gloriam lorem ipsum dei gloriam batum candum rabum cabicusorem ipsum dei gloriam batum candum",
    background: "/ft.jpg"
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
          <h1>Le Fonds National des Réparations des Victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l’humanité.</h1>
          <p>FONAREV en sigle, nous sommes un établissement public institué par la loi n°22/65 du 26 décembre 2022 portant principes fondamentaux relatifs à la protection et à la réparation des victimes de violences sexuelles liées aux conflits et des victimes de crimes contre la paix et la sécurité de l’humanité et le décret n°22/38 du 06 décembre 2022 fixant les statuts d’un établissement public dénommé Fonds National des Réparations des Victimes de violences sexuelles liées aux conflits et de crimes contre la paix et la sécurité de l’humanité. Il a son siège social à Kinshasa et exerce ses activités sur toute l’étendue du territoire national.</p>
          <button> En savoir plus <Icon icon="solar:arrow-right-broken" className={styles.icone} /> </button>
        </div>
      </section>

      <section className={styles.genocostContainer}>
            <div className={styles.textContainer}>
              <h2>GENOCOST</h2>
              <h3>Lorem ipsum dei lorem ipsum ipsum dei lorem ipsumipsum dei lorem ipsum </h3>
              <p>Genocost veut dire Genocide pour des gains économiques, ce terme a été institué par le legislateur qui a ... </p>
              <button>Lancer vidéo <Icon icon="solar:arrow-right-broken" className={styles.icone} /></button>
            </div>
            <div className={styles.flyerContainer}>
              <Image src="/geno.jpg" alt="Genocost flyer" layout="fill" objectFit="cover"  />
            </div>
      </section>
      <section className={styles.slider}>
          <h2>FONAREV DANS LE TEMPS</h2>
          <h3>Lorem ipsum dei gloriam lorem ipsum dei gloriam lorem ipsum dei gloriam lorem ipsum dei gloriam lorem ipsum dei gloriam lorem ipsum dei gloriam</h3>
          <div className={styles.carousselContainer}>
            <div className={styles.carouselInner} style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
              {sliderItems.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                  <Image src={item.background} alt={item.title} layout="fill" objectFit="cover" />
                  <div className={styles.itemContent}>
                    <h3>{item.date}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrevSlide}>
              &#10094;
            </button>
            {currentSlide < sliderItems.length - 1 && (
              <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextSlide}>
                &#10095;
              </button>
            )}
          </div>
        </section>

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

    </main>
  );
};

export default Home;

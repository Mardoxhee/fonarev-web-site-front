"use client"
import styles from "./home.module.scss";
import Head from 'next/head'; 
import Image from "next/image";
import AboutImage from './../app/../../public/qui-sommes-ns.jpg'
import ActuCard from "@/components/actuCard";
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect} from 'react';
import AOS from 'aos';
import {useGetAllArticlesQuery} from './store/slices/actualite'
import 'aos/dist/aos.css';
import Skeleton from './../components/skeleton'


export default function Home() {
  const { data, error, isLoading } = useGetAllArticlesQuery("");


  const [bannerIndex, setBannerIndex] = useState(0);
  const [articles, setArticles] = useState([]);


  // const handleArticleList = async () => {
  //   try {
  //     const response = await fetch('https://fonarev-api.onrender.com/articles');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch articles');
  //     }
  //     const data = await response.json();
     
  //     console.log("data: " + data.article)
  //     setArticles(data.article);
  //   } catch (error) {
  //     console.error('Error fetching articles:', error);
  //   }
  // };

 

  useEffect(() => {
    // handleArticleList();
    AOS.init();
  }, [])

 

  const handleBannerChange = (currentIndex) => {
    setBannerIndex(currentIndex);
  };

  return (
    <>
   <Head> <title>Fonarev rdc | Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
   <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
   </Head>
      <main className={styles.main}>
        <section className={styles.slider}>
        <AliceCarousel
            items={[
              <div className={styles.bannerContainer}  key="1">
              <div>
                <h2>Actualité</h2>
                <h1>Commemoration du genocide congolais à kinshasa et dans le monde</h1>
                <p>Le mercredi 14 août 2023, le président de la République Démocratique 
                  du Congo, Felix-Antoine Tshisekedi, a lancé la première commémoration 
                  officielle du génocide congolais ...
                </p>     
                  <button>En savoir plus</button>          
                </div>
          </div>,
          <div className={styles.bannerContainer2}  key="2">
              <div>
                <h2>Actualité</h2>
                <h1>Commemoration du genocide congolais à kinshasa et dans le monde</h1>
                <p>Le mercredi 14 août 2023, le président de la République Démocratique 
                  du Congo, Felix-Antoine Tshisekedi, a lancé la première commémoration 
                  officielle du génocide congolais ...
                </p>     
                  <button>En savoir plus</button>          
                </div>
          </div>
              // Add more banner items as necessary
            ]}
            mouseTracking="false"
            autoPlay
            autoPlayInterval={3000} 
            slideToIndex={bannerIndex}
            infinite={true}
            onSlideChanged={handleBannerChange}
            animationType="fadeout"
            controlsStrategy="alternate"
            keyboardNavigation = {true}
            animationDuration = {500}
          />
        
          </section>

              <section className = {styles.about}>
                <div className={styles.imgContainer}    data-aos="fade-right" > 
                  {/* <Image src={AboutImage} alt = ""/> */}
                </div>
                  <div className={styles.textSide} data-aos="fade-left" >
                    <h2>
                      A propos de nous
                    </h2>
                    <p>
                      Le Fonds National des Réparations des Victimes de violences sexuelles 
                      liées aux conflits et d'autres crimes contre la paix et la sécurité de 
                      l'humanité. FONAREV en sigle est un établissement public institué par 
                      la loi n°22/65 du 26 décembre 2022 portant principes fondamentaux 
                      relatifs à la protection et à la réparation des victimes de violences 
                      sexuelles liées aux conflits et des victimes de crimes contre la paix 
                      et la sécurité de l'humanité et le décret n°22/38 du 06 décembre 2022 
                      fixant les statuts d'un établissement public dénommé Fonds National des 
                      Réparations des Victimes de violences sexuelles liées aux conflits et 
                      d'autres crimes contre la paix et la sécurité de l'humanité. il a son 
                      siège social à Kinshasa et exerce ses activités sur toute l'étendue du 
                      territoire national. le FONAREV est placé sous tutelle du ministère ayant 
                      les droits humains dans ses attributions.
                    </p>
                    <Link href="/about">
                      <button>En savoir plus</button>
                    </Link>
                  </div>
              </section>

              <section className={styles.actu} data-aos="zoom-in">
                <div className={styles.topSide}>
                  <h2>Nos dernières nouvelles</h2>
                  <Link href="/actualites">
                    <button>Toutes nos actualités</button>
                  </Link>
                </div>
                <div className={styles.cardContainer}>
                {isLoading ?  <Skeleton/> : data.article.map((article) => (
                    <Link href={`/actualites/${article._id}`}>
                      <ActuCard
                        key={article._id}
                        date={article.date}
                        category="Actualité"
                        bg={article.thumbanails}
                        title={article.titre}
                      />
                    </Link>
                    ))}
                    {/* <ActuCard date="" category="Actualité" bg="" title="" />
                    <ActuCard date="" category="Actualité"bg="" title="" />
                    <ActuCard date="" category="Actualité" bg="" title="" />
                    <ActuCard date="" category="Actualité" bg="" title="" />  */}
                </div> 
              </section>
        
      </main>
    </>
  );
}

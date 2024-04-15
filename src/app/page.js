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
import { Icon } from '@iconify/react';
import {useRouter} from 'next/navigation'

// import VideoUrl from './../../public/logo-fonarev.mp4'


export default function Home() {
const router = useRouter()

  const { data, error, isLoading } = useGetAllArticlesQuery("");
  const articles = data?.article ? [...data.article] : [];


  const [bannerIndex, setBannerIndex] = useState(0);
  function formatDate(dateString) {
    // Assuming your dateString is in a format like "YYYY-MM-DD"
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Adjust options as needed
    return date.toLocaleDateString('fr-FR', options); // Customize locale and options
  }


  const formatTitre = (titre) => {
    // Convertir en minuscules et enlever les accents
    const titreFormate = titre?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Remplacer les espaces par des tirets
    return titreFormate?.replace(/\s+/g, '-');
  };

  useEffect(() => {
    // handleArticleList();
    AOS.init();
  }, [])

  const handleBannerChange = (currentIndex) => {
    setBannerIndex(currentIndex);
  };


  const handleRedirect = () => {
    router.push('/colloque-sante-mentale')
  }

  return (
    <>
   <Head> 
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-W41SHGX1J0"></script>
    <script
       dangerouslySetInnerHTML={{
         __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments)}
           gtag('js', new Date());
           gtag('config', 'G-W41SHGX1J0');
         `,
       }}
      />

   <title>Fonarev rdc | Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
   <  meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
    <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
    
   </Head>
    <main className={styles.main}>
      <section className={styles.slider}>
          {/* {isLoading ? (
           <div className={styles.bannerContainerLoad}>
                <span className={styles.loader} ></span>
           </div>
          ) : (
            <AliceCarousel
              items={articles.reverse().slice(0, 3).map((article, index) => (
                <div
                  className={index % 2 === 0 ? styles.bannerContainer : styles.bannerContainer2}
                  key={article._id}
                  style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7030461842940301) 0%, rgba(7,7,8,0.29968483975621496) 40%, rgba(0,212,255,0) 100%),url(${article.thumbanails})`,
                  backgroundPosition: 'center', // Default to center
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <div>
                    <h2>Actualité</h2>
                    <h1>{article.titre}</h1>
                    <p dangerouslySetInnerHTML={{__html : article.contenu.substr(0, 250) + "..." }}></p>
                    
                    <Link key={article._id} href={`/actualites/details?articleId=${article._id}?articleTitle=${formatTitre(article.titre)}`}>
                      <button>En savoir plus</button>
                    </Link>
                  </div>
                </div>
              ))}
              mouseTracking="false"
              autoPlay
              autoPlayInterval={6000}
              slideToIndex={bannerIndex}
              infinite={true}
              onSlideChanged={handleBannerChange}
              animationType="fadeout"
              controlsStrategy="alternate"
              keyboardNavigation={true}
              animationDuration={500}
            />
          )} */}

          <div className= {styles.aliceContainer}>
                <div className={styles.item}>
                <AliceCarousel
                    items={
                      [
                        <div className={styles.victimPicture}>
                        <div className={styles.logoContainer}>

                        </div>
                        <div className={styles.description}>
                            <p>
                              RIEN SANS LES VICTIMES <span>!</span>
                            </p>
                        </div>

                    </div>,
                       <div className={styles.victimPicture2}>
                       <div className={styles.logoContainer}>

                       </div>
                       <div className={styles.description}>
                           <p>
                           RIEN SANS LES VICTIMES <span>!</span>
                           </p>
                       </div>

                   </div>,
                      <div className={styles.victimPicture3}>Ò
                      <div className={styles.logoContainer}>
          
                      </div>
                      <div className={styles.description}>
                          <p>
                              RIEN SANS LES VICTIMES <span>!</span>
                          </p>
                      </div>

                  </div>
                       ]
                    }
                      mouseTracking="false"
                      autoPlay
                      autoPlayInterval={6000}
                      slideToIndex={bannerIndex}
                      infinite={true}
                      disableButtonsControls={true}
                      disableSwipe={true}
                      onSlideChanged={handleBannerChange}
                      animationType="fadeout"
                      controlsStrategy="alternate"
                      keyboardNavigation={true}
                      animationDuration={1000}
                    />
                 

                    <div className={styles.rightSide}>

                    <AliceCarousel
                    items={
                      [  

                        <div className={styles.quoteContainer}>
                        <Icon icon="icomoon-free:quotes-right" className={styles.icone} />
                        <p className={styles.quotation}>  
                        Pour apaiser la douleur des femmes victimes de violences liées 
                        aux conflits et tenter de réparer les préjudices qui leur ont été 
                        infligés, mon pays a mis en place des mécanismes institutionnels 
                        spécifiques, notamment le Fonds National des Réparations des Victimes 
                        de violences sexuelles liées aux conflits et des victimes des crimes 
                        contre la paix et la sécurité de l'humanité (FONAREV), créé en décembre 2022
  
                        </p>
                        <div className={styles.authorFlexer}>
                        <div className={styles.avatar2}>
  
                        </div>
                          <h3 className={styles.author}>
                            Felix TSHISEKEDI TSHILOMBO
                            <span>
                                Président de la République Démocratique du Congo
                            </span>
                          </h3>
                        
                        </div>
                    </div>,
                        <div className={styles.quoteContainer}>
                            <Icon icon="icomoon-free:quotes-right" className={styles.icone} />
                            <p className={styles.quotation}>  
                            Nous ne pouvons espérer un congo nouveau sans réparer les dommages 
                            causés à celles qui, par leur sagesse, bâtissent la nation et par 
                            leur force, engendrent et éduquent nos héros. La violence sexuelle 
                            en temps de conflit est un problème global, c’est une affaire de tous !
  
                            </p>
                            <div className={styles.authorFlexer}>
                            <div className={styles.avatar}>
  
                            </div>
                              <h3 className={styles.author}>
                                Denise NYAKERU TSHISEKEDI
                                <span>
                                    Première dame de la République Démocratique du Congo
                                </span>
                              </h3>
                            
                            </div>
                        </div>,
                               
                    <div className={styles.quoteContainer}>
                    <Icon icon="icomoon-free:quotes-right" className={styles.icone} />
                    <p className={styles.quotation}>  
                      Nous voulons regarder les victimes comme des êtres humains 
                      dont il faut prendre soin. Elles sont là, ils sont là.
                      Ce sont nos mères, nos soeurs, nos pères, nos frères, 
                      nos petites-filles et nos petits-fils.

                    </p>
                    <div className={styles.authorFlexer}>
                    <div className={styles.avatar3}>

                    </div>
                      <h3 className={styles.author}>
                        Lucien LUNDULA LOLATUI
                        <span>
                        Directeur Général du Fonarev
                        </span>
                      </h3>
                    
                    </div>
                </div>
                       ]
                    }
                    mouseTracking="false"
                    autoPlay
                    autoPlayInterval={6000}
                    slideToIndex={bannerIndex}
                    infinite={true}
                    disableButtonsControls={true}
                    disableSwipe={true}
                    onSlideChanged={handleBannerChange}
                    animationType="fadeout"
                    controlsStrategy="alternate"
                    keyboardNavigation={true}
                    animationDuration={1000}
                    />
               
                    </div>
                </div>
          </div>
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
                        Le Fonds National des Réparations des Victimes de violences sexuelles liées aux 
                        conflits et des victimes des crimes contre la paix et la sécurité de l’humanité, 
                        FONAREV en sigle, est un établissement public institué par la loi n°22/65 du 26 
                        décembre 2022 portant principes fondamentaux relatifs à la protection et à la 
                        réparation des victimes de violences sexuelles liées aux conflits et des victimes 
                        de crimes contre la paix et la sécurité de l’humanité et le décret n°22/38 du 06 
                        décembre 2022 fixant les statuts d’un établissement public dénommé Fonds National des 
                        Réparations des Victimes de violences sexuelles liées aux conflits et de crimes contre la paix  
                        et la sécurité de l’humanité. Il a son siège social à Kinshasa et exerce ses activités 
                        sur toute l’étendue du territoire national.
                    </p>
                    <Link href="/a-propos-du-fonarev">
                      <button>En savoir plus</button>
                    </Link>
                  </div>
              </section>


              <section  className={styles.colloque}>
                        <div className={styles.visuel}></div>
                        <div className={styles.content}>
                            <h2>Colloque sur la santé mentale des victimes </h2>
                            <p>Remplir le formulaire pour réserver votre place</p>
                            <button onClick={handleRedirect}>SE PRéENREGISTRER</button>
                        </div>
              </section>

              <section className={styles.actu} data-aos="zoom-in">
                <div className={styles.topSide}>
                  <h2>Nos dernières activités</h2>
                  <Link href="/activites">
                    <button>Toutes nos activités</button>
                  </Link>
                </div>
                <div className={styles.cardContainer}>
                {isLoading ?  <Skeleton/> : articles.reverse().slice(4, 8).map((article) => (
                    <Link key={article._id} href={`/actualites/details?articleId=${article._id}?articleTitle=${formatTitre(article.titre)}`}>
                      <ActuCard
                        key={article._id}
                        date={article.date ? formatDate(article.date) : ""} // Use the formatted date
                        category="Activité"
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

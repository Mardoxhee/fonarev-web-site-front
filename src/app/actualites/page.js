"use client"
import styles from './style.module.scss'
import React, { useState, useEffect } from 'react';
import MiniCard from './../../components/miniCard'
import ArchiveCard from './../../components/archiveCard'
import Link from 'next/link'
import { useGetAllArticlesQuery } from '../store/slices/actualite'
import { Icon } from '@iconify/react';
import Head from 'next/head'; 
import { Script } from 'next/script';
import { getFileLink } from './../../lib/Requests';
import Image from 'next/image'
import GenocostImage from './../../../public/banieregenocost.jpg'

const Actualite = () => {
  const [imageUrl, setImageUrl] = useState("");
const {data, isLoading, error} = useGetAllArticlesQuery("")
const articles = data?.article ? [...data.article] : [];

function formatDate(dateString) {
  // Assuming your dateString is in a format like "YYYY-MM-DD"
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Adjust options as needed
  return date.toLocaleDateString('fr-FR', options); // Customize locale and options
}


const lastArticle = data?.article?.length > 0 ? data.article[data.article.length - 1] : null;

  const fetchImage = async () => {
    if (lastArticle?.thumbanails) {
      try {
        const link = await getFileLink(lastArticle?.thumbanails);
        if (link ) {
          console.log("link test", link)
          setImageUrl(link);
        } else {
          console.error("No src found in link object", link);
          setImageUrl("default-fallback-image-url.png"); // Provide a fallback image URL
        }
      } catch (error) {
        console.error("Error fetching image link:", error);
        setImageUrl("default-fallback-image-url.png"); // Provide a fallback image URL
      }
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      if (lastArticle?.thumbanails) {
        try {
          const link = await getFileLink(lastArticle?.thumbanails);
          if (link) {
            console.log("Image link:", link); // Check that link is correct
            setImageUrl(link);
          } else {
            console.error("No src found in link object", link);
            setImageUrl("default-fallback-image-url.png");
          }
        } catch (error) {
          console.error("Error fetching image link:", error);
          setImageUrl("default-fallback-image-url.png");
        }
      }
    };
  
    fetchImage(); // Call the fetch function
  }, [lastArticle]); // Add lastArticle as a dependency
  

const formatTitre = (titre) => {
  // Convertir en minuscules et enlever les accents
  const titreFormate = titre?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Remplacer les espaces par des tirets
  return titreFormate?.replace(/\s+/g, '-');
};

  return (
    <>
    <Head> 

    <title>Fonarev rdc | Actualités du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
     
    </Head>
    <main>
        <section className={styles.sectionWrapper}>
        <Link key={ lastArticle?._id} href={`/actualites/details?articleId=${ lastArticle?._id}&articleTitle=${formatTitre( lastArticle?.titre)}`}>
          <div className={styles.mainActu}>
          <div className={styles.imgConatainer} style={{ backgroundImage: lastArticle?.thumbanails ? `url(${imageUrl})` : 'none' }}>
              <h4>Actualite</h4>
          </div>
            {lastArticle && (
              <>
                <h3>{lastArticle.titre}</h3>
                {/* Render other details of the last article here */}
              </>
            )}
          </div>
        </Link>
        <div className={styles.minicardWrapper}>
          {articles.reverse().slice(1, 5).map((article) => (
         <Link key={article._id} href={`/actualites/details?articleId=${article._id}?articleTitle=${formatTitre(article.titre)}`}>
              <MiniCard titre={article.titre} backgroundImage={article.thumbanails} />
          </Link>
          ))}
        </div>
        </section>

        {/* <section className = {styles.bannerContainer}>
        <Image src={GenocostImage} height={240} width="100%" alt="baniere genocost"/>
      
        </section> */}

        <section className={styles.archiveContainer}>
        <h2>Archives</h2>
        <div className={styles.containerFlexer}>
          <div className={styles.cardsWrappa}>
            {articles.reverse().map((article) => (
               <Link key={article._id} href={`/actualites/details?articleId=${article._id}?articleTitle=${formatTitre(article.titre)}`}>
                <ArchiveCard key={article.id} titre={article.titre} backgroundImage={article.thumbanails} />
              </Link>
            ))}
          </div>
          <div className={styles.verticalBanner}>
            <h5>322.828 x 1214</h5>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Actualite
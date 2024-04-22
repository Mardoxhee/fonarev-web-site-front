"use client"
import styles from './id.module.scss'
import React from 'react'
import Image from 'next/image'
import Thumbnails from './../../../../public/bg-actu.jpg'
import ImgContent from './../../../../public/img-content.jpg'
import { Icon } from '@iconify/react';
import ArchiveCard from '@/components/sideCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGetAllArticlesQuery } from '../../store/slices/actualite'
import Head from 'next/head';
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
import { usePathname } from 'next/navigation'
import { Script } from 'next/script';



const Details = () => {
    const formatTitre = (titre) => {
        // Convertir en minuscules et enlever les accents
        const titreFormate = titre?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Remplacer les espaces par des tirets
        return titreFormate?.replace(/\s+/g, '-');
      };

    const searchParams = useSearchParams()
    const {data, isLoading, error} = useGetAllArticlesQuery("")
    const articles = data?.article ? [...data.article] : [];
    console.log("data", data)

    const lastArticle = data?.article?.length > 0 ? data.article[data.article.length - 1] : null;
    
    const [articleDetails, setArticleDetails] = useState(null);
    const [articlePhotos, setArticlePhotos] = useState([]);


    const router = useRouter();
    const pathname = window.location.href
 
    const lastPart = searchParams.get('articleId')


    console.log("lurlpath", window.location.href)
  


    const shareOnFacebook = () => {
        const facebookUrl = `https://www.facebook.com/share.php?u=https://www.fonarev.cd/actualites/details?articleId=65fc5dfa098d8fe43d68e323?articleTitle=rencontre-entre-le-dg-du-fonarev-et-le-president-de-la-cndh-:-vers-une-collaboration-pour-la-justice-et-la-reparation`;
        console.log("url", facebookUrl);
        window.open(facebookUrl, '_blank');
       
      };
    
      const shareOnTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent("https://www.fonarev.cd/actualites/65f01ac9428b7de1c503ca45")}`;
        window.open(twitterUrl, '_blank');

      };
    
      const shareOnLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?url=http://localhost:3000/actualites/65f01ac9428b7de1c503ca45`;
        console.log("url", linkedInUrl);
        window.open(linkedInUrl, '_blank');
      };
    


    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = articlePhotos.map((photoUrl, index) => (
        <div key={index}>
            <Image src={photoUrl} alt={`Photo ${index + 1}`} />
        </div>
    ));


    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await fetch(`https://fonarev-api.onrender.com/articles/${lastPart}`);
                const data = await response.json();
                setArticleDetails(data.article);
                setArticlePhotos(data.article.photos)
                console.log('details photos', data.article)
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l\'article :', error);
            }
        };

        fetchArticleDetails();
        console.log("lurlpath", router.asPath)
      
    }, [lastPart]); 

    const formatDate = (dateString) => {
        if (!dateString) return ''; // Vérifie si la date est fournie
      
        // Crée un objet Date à partir de la chaîne de date
        const date = new Date(dateString);
      
        // Obtient les différentes parties de la date
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
      
        // Ajoute un zéro devant les chiffres de l'heure et des minutes si nécessaire
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        // Retourne la date formatée
        return `${day} ${month} ${year} ${hours}:${minutes}`;
      }; 


  return (
    <>

            <Head>
                <title>{articleDetails?.titre || 'Article Details'}</title>
                <meta property="og:title" content={articleDetails?.titre || 'Article Details'} />
                <meta property="og:description" content={articleDetails?.contenu || 'Description of the article'} />
                <meta property="og:image" content={articleDetails?.thumbanails || 'URL to the article thumbnail'} />
                {/* <meta property="og:url" content={url} /> */}
                <meta property="og:type" content="article" />
            </Head>
            <main className={styles.mainCont}>
        <section className={styles.postDetails}> 
        <h1> {articleDetails ? articleDetails.titre : ""} </h1>
            <div className={styles.thumbnails}
                    style={{
                        backgroundImage: `url(${articleDetails ? articleDetails.thumbanails : ""})`,
                        backgroundSize: "cover", // Nouvelle propriété
                        backgroundPosition: "center", // Nouvelle propriété
                    }}>
                        
            </div>
            <div className={styles.shareContainer}>
                <p className={styles.metadata}>Par le Fonarev</p>
                <p className={styles.metadata}>Publié le {formatDate(articleDetails ? articleDetails.date : "")}</p>
            <div className={styles.ctaContainer}>
                <p>Partager l'article sur</p>
                <ul className={styles.socialMedia} >
                    <li >
                            <Icon icon="logos:facebook" className={styles.icone} onClick={shareOnFacebook}/>
                    </li>
                    <li onClick={shareOnTwitter}>
                            <Icon icon="logos:twitter" className={styles.icone} />
                    </li>
                    <li onClick={shareOnLinkedIn}>
                            <Icon icon="devicon:linkedin" className={styles.icone} />
                    </li>
                    <li>
                            <Icon icon="skill-icons:instagram" className={styles.icone} />
                    </li>
                    <li>
                            <Icon icon="logos:tiktok-icon" className={styles.icone} />
                    </li>
                </ul>
            </div>
            </div>
     
                    {articleDetails?.contenu
                        ? <article dangerouslySetInnerHTML={{__html : articleDetails.contenu }} className={styles.textContent}  ></article>// Replace period followed by optional spaces with a line break and trim
                        : 'Chargement de l\'article...'} 
     
                
                <div className={styles.imgCaroussel} id="imgCaroussel">
                    {articlePhotos.map((photoUrl, index) => (
                        <div className={styles.imgPhotos} key={index} style={{ backgroundImage: `url(${photoUrl})` }}>
                            {/* Ici, la propriété 'style' est utilisée pour définir l'image de fond */}
                        </div>
                    ))}
                </div>

        </section>
        <section className={styles.sideBar}> 
            <div className={styles.pub}></div>
            <div className={styles.cardContainer}>
            <h2>A la une</h2>
            {/* Display the three latest articles using ArchiveCard */}
            {articles.reverse().slice(1, 3).map((article) => (
            <Link key={article?._id} href={`/actualites/details?articleId=${article?._id}&articleTitle=${formatTitre( article?.titre)}`}>
                <ArchiveCard titre={article.titre} backgroundImageSrc={article.thumbanails} category="ACTUALITE" />
            </Link>
            ))}
          </div>
            <div className={styles.pub}></div>
        </section>
    </main>
    </>
    
  )
}

export default Details
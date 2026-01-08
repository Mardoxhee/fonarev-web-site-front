"use client"
import styles from './client.module.scss'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import ArchiveCard from '@/components/sideCard'
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRouter } from 'next/navigation';
import { useGetAllArticlesQuery } from './../app/store/slices/actualite'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
import { Barlow_Condensed } from 'next/font/google';
import {getFileLink} from './../lib/Requests'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'], 
  weight: ['300', '400', '700'],
});


const Details = ({initialArticleDetails}) => {


    const [imageUrl, setImageUrl] = useState("");
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
    
    const [articleDetails, setArticleDetails] = useState(null);
    const [articlePhotos, setArticlePhotos] = useState([]);
    const [imageLinks, setImageLinks] = useState([]);


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
    
      const fetchImage = async () => {
        if (articleDetails?.thumbanails) {
          try {
            console.log("Fetching image link for bg:", articleDetails?.thumbanails);
            const link = await getFileLink(articleDetails?.thumbanails);
            console.log("Fetched link:", link);
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
        fetchImage();
      }, [articleDetails]);

 

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


      const insertImageAfterThirdParagraph = (content) => {
        const paragraphs = content.split(/<\/p>/); // Split by closing </p> tags
        if (paragraphs.length < 4) {
            return content; // No image to insert if less than four paragraphs
        }
    
        // Utiliser la première image du tableau imageLinks si elle existe
        const imageUrl = imageLinks.length > 0 ? imageLinks[0] : ""; // First image from imageLinks
    
        const formattedParagraphs = paragraphs.map(paragraph => paragraph + '</p>');
        const modifiedContent = [
            ...formattedParagraphs.slice(0, 3), 
            imageUrl ? `<img src="${imageUrl}" alt="Description of image" class="${styles.myInsertedImage}" style="max-width: 100%; height: 400px; object-fit: cover; position: left;" />` : "",

            ...formattedParagraphs.slice(3) 
        ].join(''); 
        return modifiedContent;
    };

            useEffect(() => {
              const fetchImageLinks = async () => {
                  const links = await Promise.all(articlePhotos.map(photoUrl => getFileLink(photoUrl)));
                  console.log("links", links)
                  setImageLinks(links);
              };
      
              fetchImageLinks();
          }, [articlePhotos]);

  return (
    <>
        <main className={styles.mainCont}>
        <section className={styles.postDetails}> 
        <h1 className={barlowCondensed.className} style={{ fontFamily: "'Barlow Condensed', sans-serif !important" }}>
                {articleDetails ? articleDetails.titre : ""}
        </h1>
            <div className={styles.thumbnails}
                    style={{
                        backgroundImage: `url(${articleDetails ? imageUrl : ""})`,
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
                        ?<article 
                        dangerouslySetInnerHTML={{ __html: insertImageAfterThirdParagraph(articleDetails.contenu) }} 
                        className={styles.textContent}  
                    ></article>
                        : 'Chargement de l\'article...'} 
                
            <div className={styles.imgCaroussel} id="imgCaroussel">
                    {imageLinks.map((fileLink, index) => (
                        <div 
                            className={styles.imgPhotos} 
                            key={index} 
                            style={{ backgroundImage: `url(${fileLink})` }} 
                        >
                        </div>
                    ))}
                </div>



        </section>
        <section className={styles.sideBar}> 
            <div className={styles.pub}></div>
            <div className={styles.mobilePub}></div>
            <div className={styles.cardContainer}>
            <h2>A la une</h2>
            {articles.reverse().slice(1, 3).map((article) => (
            <Link key={article?._id} href={`/actualites/details?articleId=${article?._id}&articleTitle=${formatTitre( article?.titre)}`}>
                <ArchiveCard titre={article.titre} backgroundImageSrc={article.thumbanails} category="ACTUALITE" />
            </Link>
            ))}
          </div>

        </section>
    </main>
    </>
    
  )
}

export default Details
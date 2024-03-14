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



const Details = () => {
    const {data, isLoading, error} = useGetAllArticlesQuery("")
    console.log("data", data)

    const lastArticle = data?.article?.length > 0 ? data.article[data.article.length - 1] : null;
    
    const [articleDetails, setArticleDetails] = useState(null);


    const router = useRouter();
    let url= window.location.href
 
    const lastPart = url.split('/').pop();
    console.log("last part", lastPart)
  

    const shareOnFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
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

    const items = [
        <Image src={ImgContent} alt= "image illustratif"/>,
        <Image src={ImgContent} alt= "image illustratif"/>,
        <Image src={Thumbnails} alt= "image illustratif"/>
    ];


    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await fetch(`https://fonarev-api.onrender.com/articles/${lastPart}`);
                const data = await response.json();
                setArticleDetails(data.article);
                console.log('details', data.article.titre)
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l\'article :', error);
            }
        };

        fetchArticleDetails();
      
    }, [lastPart]); 

    


  return (
    <>

            <Head>
                <title>{articleDetails?.titre || 'Article Details'}</title>
                <meta property="og:title" content={articleDetails?.titre || 'Article Details'} />
                <meta property="og:description" content={articleDetails?.contenu || 'Description of the article'} />
                <meta property="og:image" content={articleDetails?.thumbanails || 'URL to the article thumbnail'} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />
            </Head>
            <main className={styles.main}>
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
                <p className={styles.metadata}>Publié le 14 Février 2024 - 10h 30</p>
            <div className={styles.ctaContainer}>
                <p>Partager l'article sur  : </p>
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
     
                <h2
                className={styles.postDetailsTitle}
                >
                {articleDetails?.titre // Use optional chaining for safer access
                    ? articleDetails.titre
                    // Split, capitalize, and join the title with line breaks
                    .split(/\s+/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ')
                    : (
                    // Display a loading indicator or default text while fetching
                    <span style={{ color: 'gray', fontStyle: 'italic' }}>Chargement du titre...</span>
                    )}
                </h2>
                <p 
                    className={styles.textContent} 
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    {articleDetails?.contenu
                        ? <article dangerouslySetInnerHTML={{__html : articleDetails.contenu }}></article>// Replace period followed by optional spaces with a line break and trim
                        : 'Chargement de l\'article...'} 
                </p>
                
            <div className={styles.imgCaroussel} id = "imgCaroussel">
            {/* <AliceCarousel
                mouseTracking
                items={items}
                responsive={{
                    0: { items: 1 },
                    568: { items: 2 },
                    1024: { items: 3 }, // Show 3 items on screens wider than 1024 pixels
                  }}
                  autoWidth
                  animationType="slide"
                  autoPlay
                  autoPlayInterval={3000} 
                  controlsStrategy="alternate"
                  keyboardNavigation = {true}
            /> */}
                    </div>
 
            {/* <p className= {styles.textContent} >
                Cependant Plusieurs députés émettent des réserves sur l’adoption 
                par les couples de même sexe. En Grèce, des manifestations ont 
                eu lieu pour protester contre le mariage des couples de même sexe.
                Pour Lina Papadopoulou, professeure de droit constitutionnel à 
                l'université Aristote de Thessalonique, cette loi est une avancée 
                pour les enfants, jusque-là ignorés par l'Etat.<br/>

                "Beaucoup d'enfants grandissent avec deux pères ou deux mères. Ces enfants,
                à la maison, lorsqu'ils sortent se promener, lorsqu'ils jouent au basket-ball, 
                lorsqu'ils vont à l'hôpital, ont leurs deux mères à leurs côtés. Pourtant, l'État 
                vient leur enlever leur mère, les prive d'elle, la retire de leurs documents et 
                leur dit qu'ils n'ont pas de deuxième mère. Pourtant, les enfants savent qu'ils ont 
                une deuxième mère. L'important, c'est qu'à partir de maintenant, les enfants ne 
                soient plus privés de leur deuxième parent à cause de la politique de l'État".<br/>

                Néanmoins, cette loi divise la société grecque, les partis d'extrême droite et l'église 
                orthodoxe y sont fermement opposés.
            </p> */}
            <div className={styles.ctaContainer}>
                <button>Partager l'article</button>
                <button>Laisser un commentaire</button>
            </div>
        </section>
        <section className={styles.sideBar}> 
            <div className={styles.pub}></div>
            <div className={styles.cardContainer}>
            <h2>A la une</h2>
            {/* Display the three latest articles using ArchiveCard */}
            {data?.article?.slice(0, 3).map((article) => (
            <Link key={article._id} href={`/actualites/${article._id}`}>
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
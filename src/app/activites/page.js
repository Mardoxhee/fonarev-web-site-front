"use client"
import React from 'react'
import styles from './activites.module.scss'
import ActuCard from '@/components/actuCard'
import {useGetAllArticlesQuery} from '../store/slices/actualite'
import Skeleton from '@/components/skeleton'
import Link from 'next/link'
import Banner from '@/components/banner'
import Head from 'next/head'; 
import { Script } from 'next/script';

const Activites = () => {
    const { data, error, isLoading } = useGetAllArticlesQuery("");
    const articles = data?.article ? [...data.article] : [];
    const articlesInReverseOrder = articles.reverse();
    function formatDate(dateString) {
        // Assuming your dateString is in a format like "YYYY-MM-DD"
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Adjust options as needed
        return date.toLocaleDateString('fr-FR', options); // Customize locale and options
      }

  return (
    <>
    <Head> 
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W41SHGX1J0"/>
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());
                        gtag('config', 'G-W41SHGX1J0');
                        `,
                    }}
                    />
    <title>Fonarev rdc | Activités du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
     
    </Head>
    <main className={styles.main}>
     <Banner pageTitle="Les activités du Fonarev" background = "/dga.jpg"/>
        <section className = {styles.grouper}>
            <h3>2024 <span>mars</span></h3>
            <div className={styles.cardWrapper}>
            {isLoading ? <Skeleton /> : articlesInReverseOrder.slice(0, 4).map((article) => (
                    <Link href={`/actualites/${article._id}`}>
                      <ActuCard
                        key={article._id}
                        date={article.date ? formatDate(article.date) : ""} // Use the formatted date
                        category="Activité"
                        bg={article.thumbanails}
                        title={article.titre}
                      />
                    </Link>
                    ))}
            </div>
        </section>

        <section className = {styles.grouper}>
            <h3>2024 <span>février</span></h3>
            <div className={styles.cardWrapper}>
            {isLoading ? <Skeleton /> : articlesInReverseOrder.slice(5, 9).map((article) => (
                    <Link href={`/actualites/${article._id}`}>
                      <ActuCard
                        key={article._id}
                        date={article.date ? formatDate(article.date) : ""} // Use the formatted date
                        category="Activité"
                        bg={article.thumbanails}
                        title={article.titre}
                      />
                    </Link>
                    ))}
            </div>
        </section>
    </main>
    </>
  )
}

export default Activites
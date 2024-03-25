"use client"
import React from 'react'
import styles from './activites.module.scss'
import ActuCard from '@/components/actuCard'
import {useGetAllArticlesQuery} from '../store/slices/actualite'
import Skeleton from '@/components/skeleton'
import Link from 'next/link'
import Banner from '@/components/banner'

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
    <main className={styles.main}>
     <Banner pageTitle="Les activité du Fonarev" background = "/dga.jpg"/>
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
  )
}

export default Activites
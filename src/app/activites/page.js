"use client"
import React from 'react'
import styles from './activites.module.scss'
import ActuCard from '@/components/actuCard'
import {useGetAllArticlesQuery} from '../store/slices/actualite'
import Skeleton from '@/components/skeleton'
import Link from 'next/link'

const Activites = () => {
    const { data, error, isLoading } = useGetAllArticlesQuery("");
    const articles = data?.article ? [...data.article] : [];
    function formatDate(dateString) {
        // Assuming your dateString is in a format like "YYYY-MM-DD"
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Adjust options as needed
        return date.toLocaleDateString('fr-FR', options); // Customize locale and options
      }

  return (
    <main className={styles.main}>
        <section className={styles.bannerContainer}>
                <h2>Les activités du FONAREV</h2>
        </section>
        <section className = {styles.grouper}>
            <h3>2024 <span>mars</span></h3>
            <div className={styles.cardWrapper}>
                {isLoading ?  <Skeleton/> : articles.reverse().slice(4, 8).map((article) => (
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
                {isLoading ?  <Skeleton/> : articles.reverse().slice(4, 8).map((article) => (
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
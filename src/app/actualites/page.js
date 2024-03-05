"use client"
import styles from './style.module.scss'
import React from 'react'
import MiniCard from './../../components/miniCard'
import ArchiveCard from './../../components/archiveCard'
import Link from 'next/link'
import { useGetAllArticlesQuery } from '../store/slices/actualite'

const Actualite = () => {
    
const {data, isLoading, error} = useGetAllArticlesQuery("")
console.log("data", data)

const lastArticle = data?.article?.length > 0 ? data.article[data.article.length - 1] : null;

  return (
    <main>
        <section className={styles.sectionWrapper}>
        <div className={styles.mainActu}>
        <div className={styles.imgConatainer} style={{ backgroundImage: lastArticle?.thumbanails ? `url(${lastArticle.thumbanails})` : 'none' }}>
            <h4>Actualite</h4>
          </div>
          {lastArticle && (
            <>
              <h3>{lastArticle.titre}</h3>
              {/* Render other details of the last article here */}
            </>
          )}
        </div>
        <div className={styles.minicardWrapper}>
          {data?.article?.map((article) => (
            <Link key={article._id} href={`/actualites/${article._id}`}>
              <MiniCard titre={article.titre} backgroundImage={article.thumbanails} />
            </Link>
          ))}
        </div>
        </section>

        <section className = {styles.bannerContainer}>
            <div></div>
        </section>

        {/* <section className= {styles.inlineSection} >
            <h2>Itinérances</h2>
            <div className={styles.cardContainer}>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                 
            </div>
        </section> */}

        <section className={styles.archiveContainer}>
        <h2>Archives</h2>
        <div className={styles.containerFlexer}>
          <div className={styles.cardsWrappa}>
            {data?.article?.map((article) => (
              <ArchiveCard key={article.id} titre={article.titre} backgroundImage={article.thumbanails} />
            ))}
          </div>
          <div className={styles.verticalBanner}></div>
        </div>
      </section>
    </main>
  )
}

export default Actualite
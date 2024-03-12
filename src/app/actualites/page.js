"use client"
import styles from './style.module.scss'
import React from 'react'
import MiniCard from './../../components/miniCard'
import ArchiveCard from './../../components/archiveCard'
import Link from 'next/link'
import { useGetAllArticlesQuery } from '../store/slices/actualite'
import { Icon } from '@iconify/react';

const Actualite = () => {
    
const {data, isLoading, error} = useGetAllArticlesQuery("")
const articles = data?.article ? [...data.article] : [];

function formatDate(dateString) {
  // Assuming your dateString is in a format like "YYYY-MM-DD"
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Adjust options as needed
  return date.toLocaleDateString('fr-FR', options); // Customize locale and options
}


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
          {articles.reverse().slice(0, 4).map((article) => (
            <Link key={article._id} href={`/actualites/${article._id}`}>
              <MiniCard titre={article.titre} backgroundImage={article.thumbanails} />
            </Link>
          ))}
        </div>
        </section>

        <section className = {styles.bannerContainer}>
            <div>
              <h5>240 X  1214</h5>
            </div>
        </section>

        <section className={styles.videos}>
            <div className={styles.videosContainer}>
            <div className={styles.mainVideos} style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(7,7,8,0.29968483975621496) 100%, rgba(0,212,255,0) 100%), url('/img-content.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}>
                <div>
                  <Icon icon="line-md:play-twotone" className={styles.icone} />
                </div>
             
              </div>
              <div className={styles.miniatureContainer}>
                <div  
                className={styles.miniC}
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(7,7,8,0.29968483975621496) 100%, rgba(0,212,255,0) 100%), url('/img-content.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}>
                <div >
                  <Icon icon="line-md:play-twotone" className={styles.icone} />
                </div>
                </div>
                <div  
                className={styles.miniC}
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(7,7,8,0.29968483975621496) 100%, rgba(0,212,255,0) 100%), url('/img-content.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}>
                <div>
                  <Icon icon="line-md:play-twotone" className={styles.icone} />
                </div>
                </div>
               <div  
               className={styles.miniC}
               style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(7,7,8,0.29968483975621496) 100%, rgba(0,212,255,0) 100%), url('/img-content.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}>
                <div>
                  <Icon icon="line-md:play-twotone" className={styles.icone} />
                </div>
                </div>
              </div>
              </div>
              <div className={styles.articleContainer}>
                {data?.article?.slice(0, 2).map((article, index) => (
                  <Link key={article._id} href={`/actualites/${article._id}`}>
                    <MiniCard titre={article.titre} backgroundImage={article.thumbanails} />
                  </Link>
                ))}
              </div>
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
              <Link key={article._id} href={`/actualites/${article._id}`}>
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
  )
}

export default Actualite
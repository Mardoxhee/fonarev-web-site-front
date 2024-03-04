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

  return (
    <main>
        <section className={styles.sectionWrapper}>
            <div className={styles.mainActu}  >
                <div className={styles.imgConatainer}  >
                    <h4>Actualite</h4>
                </div>
                <h3>DISTRIBUTION DES KITS DE SURVI AUX DEPLACES DE KANYARUCHINYA</h3>
            </div>
            <div className={styles.minicardWrapper}>
                <Link href="/actualites/1">
                    <MiniCard />
                </Link>
                <Link href="/actualites/1">
                    <MiniCard />
                </Link>
                <Link href="/actualites/1">
                    <MiniCard />
                </Link>
                <Link href="/actualites/1">
                    <MiniCard />
                </Link>
            </div>
        </section>

        <section className = {styles.bannerContainer}>
            <div></div>
        </section>

        <section className= {styles.inlineSection} >
            <h2>Itinérances</h2>
            <div className={styles.cardContainer}>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    {/* <MiniCard/> */}
            </div>
        </section>

        <section className={styles.archiveContainer}>
            <h2>Archives</h2>
            <div className={styles.containerFlexer}>
                <div className={styles.cardsWrappa}>
                    <ArchiveCard />
                    <ArchiveCard />
                    <ArchiveCard/>
                    <ArchiveCard/>
                    <ArchiveCard/>
                </div>
                <div className={styles.verticalBanner}>
                     
                </div>
            </div>
        </section>
    </main>
  )
}

export default Actualite
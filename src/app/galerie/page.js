import React from 'react'
import styles from './style.module.scss'
import Banner from './../../components/banner'
import GaleryMasonry from './../../components/GaleryMasonry'

const Galerie = () => {


  return (
    <main className={styles.main}>
      <Banner pageTitle="La galerie du Fonarev"  background="/carou-bg.jpg"/>
      <section className={styles.textContainer}>
            <h2>Lorem ipsumipsum ipsum ipsumipsum ipsum ipsum</h2>
            <p>Details details details</p>
      </section>
      <section className={styles.masonContainer}>
        <GaleryMasonry/>
      </section>
    </main>
  )
}

export default Galerie
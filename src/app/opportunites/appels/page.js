import React from 'react'
import styles from "./style.module.scss"
import AppelCard from './../../../components/appelCard'

const Appel = () => {
  return (
        <main className={styles.main}>
          <section className={styles.bannerContainer}>
              <h1>
                  Appels d' offre
              </h1>
              <p>
                Retrouvez tous les appels d'offre disponibles au FONAREV.
              </p>
          </section>
          <section className={styles.subtitle}>
            <div className={styles.titleContainer}>
                <h2> Appels d'offre</h2>
                <button>Voir plus</button>
            </div>

            <div className={styles.cardContainer}>
                <AppelCard/>
                <AppelCard/>
                <AppelCard/>
                <AppelCard/>
                
            </div>
          </section>


         
        </main>
  )
}

export default Appel
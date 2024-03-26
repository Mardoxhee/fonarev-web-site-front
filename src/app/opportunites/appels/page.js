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
                <AppelCard link = "/Fonarev-AMI.pdf" titre = "AVIS GÉNÉRAL DE PASSATION DES MARCHÉS" expiration = "--" reference = "--"/>
                <AppelCard  link = "/FONAREV - Avis d'appel à manifestation d'intérêts - MAKOBOLA.pdf" reference = "AMI N° 001/ DG FONAREV/ CPM/ DML/ 03- 2024" expiration = "9 Avril 2024 " titre= "Sélection et recrutement des Consultants 'Bureaux d'études techniques - Bureaux de contrôle et ed surveil lance', chargés des Études techniques et architecturales; de l'évaluation environnementale et sociale préliminaires,et du contrôle et de la surveillance des travaux de réhabilitation / construction d'infrastructures hospitalières, scolaires et professionnelles et de commodités, d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans la localité de MAKOBOLA."/>
                <AppelCard link="/FONAREV- Avis d'appel à manifestion d'intérêts - BET all sites.pdf" reference = "AMI N° 002/ DG FONAREV/ CPM/ DML/ 03- 2024" expiration = "9 Avril 2024"  titre = "Selection et recrutement des Consultants 'Bureaux d'étude techniques - Bureaux de controle et de surveillance', chargés des études techniques et architecturales de l'évaluation environnementale et sociale préliminaires, et du contrôle et de la surveillance des travaux de réhabilitation / construction d'infrastructures hospitalières, scolaires et professionnelles et de commodité d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans l'Ituri, le Nord Kivu, le Sud Kivu, le Haut Katanga, le Tanganyika, le Kongo Central, le Kasaï, le Sud Ubangi, et Kinshasa." />


            </div>
          </section>


         
        </main>
  )
}

export default Appel
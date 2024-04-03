import React from 'react'
import styles from "./style.module.scss"
import AppelCard from './../../../components/appelCard'

const Appel = () => {
  return (
        <main className={styles.main}>
          <section className={styles.bannerContainer}>
              <h1>
                  Appels d'offres 
              </h1>
              <p>
                Retrouvez tous les appels d'offres disponibles au FONAREV.
              </p>
          </section>
          <section className={styles.subtitle}>
            <div className={styles.titleContainer}>
                <h2> Appels d'<span>offres</span></h2>
                <button>Voir plus</button>
            </div>

            <div className={styles.cardContainer}>
                <AppelCard isAvis = {true} bigTitle = "Appel à Manifestation d'Intérêts publié le Mardi, le 2 Avril 2024" link = "/FONAREV-AMI-BET-All-sites-2024.pdf" titre = "Sélection et recrutement des Consultants 'Bureaux d'études techniques - Bureaux de contrôle et de surveillance', chargés des Études techniques et architecturales; de l'évaluation environnementale et sociale préliminaires, etdu contrôle et de la surveillance des travaux de réhabilitation/constructiond'infrastructures hospitalières, scolaires et professionnelles et de commodité, d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans l'Ituri, le Nord Kivu, le Sud Kivu, le Haut Katanga, le Tanganyika, le Kongo Central, le Kasaï, le Sud Ubangi, et Kinshasa." expiration = "Mardi, le 16 Avril 2024" reference = "AMI N° 002/ DG FONAREV/ CPM/ DML/ 04- 2024"/>
                <AppelCard  bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link = "/FONAREV-PPM -SERVICES-NON-INTELLECTUELS-2024.pdf" reference = "--" expiration = "Du 1° janvier au 31 décembre - Exercice budgétaire: 2024" titre= "MARCHE DE SERVICES (NON INTELLECTUELS)"/>
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link="/FONAREV-PPM-FOURNITURES-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024"  titre = "MARCHE DE FOURNITURES" />
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link="/FONAREV-PPM-PRESTATIONS-INTELLECTUELLES-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024"  titre = "MARCHE DE PRESTATIONS INTELLECTUELLES" />
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link="/FONAREV-PPM-TRAVAUX-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024"  titre = "MARCHE DE TRAVAUX" />


            </div>
          </section>


         
        </main>
  )
}

export default Appel
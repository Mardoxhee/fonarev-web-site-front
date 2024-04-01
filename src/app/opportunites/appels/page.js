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
                <AppelCard isAvis = {true} bigTitle = "AVIS GÉNÉRAL DE PASSATION DES MARCHÉS"link = "/FONAREV-Avis-General-de-Passation-des-MarchEs.pdf" titre = "Le Fonds National des Réparations des Victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité, 'FONAREV' en sigle, a obtenu du Gouvernement Congolais un financement conséquent pour engager ses activités, et se propose d'utiliser les fonds pour régler des acquisitions en fournitures et services non intellectuels (services physiques), en travaux et prestations intellectuelles devant être acquis dans sa mise en œuvre. Le FONAREV est principalement financé par le Gouvernement Congolais. Les projets d'acquisitions envisagés s'articulent sur les natures citées dans la pièce jointe" expiration = "Mardi, le 26 Mars 2024" reference = "--"/>
                <AppelCard  bigTitle = "Appels d'offre" link = "/FONAREV-AMI-MAKOBOLA.pdf" reference = "AMI N° 001/ DG FONAREV/ CPM/ DML/ 03- 2024" expiration = "9 Avril 2024 " titre= "Sélection et recrutement des Consultants 'Bureaux d'études techniques - Bureaux de contrôle et ed surveil lance', chargés des Études techniques et architecturales; de l'évaluation environnementale et sociale préliminaires,et du contrôle et de la surveillance des travaux de réhabilitation / construction d'infrastructures hospitalières, scolaires et professionnelles et de commodités, d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans la localité de MAKOBOLA."/>
                <AppelCard bigTitle = "Appels d'offre" link="/FONAREV-Avis-appel-a-manifestion-BET-all-sites.pdf" reference = "AMI N° 002/ DG FONAREV/ CPM/ DML/ 03- 2024" expiration = "9 Avril 2024"  titre = "Selection et recrutement des Consultants 'Bureaux d'étude techniques - Bureaux de controle et de surveillance', chargés des études techniques et architecturales de l'évaluation environnementale et sociale préliminaires, et du contrôle et de la surveillance des travaux de réhabilitation / construction d'infrastructures hospitalières, scolaires et professionnelles et de commodité d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans l'Ituri, le Nord Kivu, le Sud Kivu, le Haut Katanga, le Tanganyika, le Kongo Central, le Kasaï, le Sud Ubangi, et Kinshasa." />


            </div>
          </section>


         
        </main>
  )
}

export default Appel
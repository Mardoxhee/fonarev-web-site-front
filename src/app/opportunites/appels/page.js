import React, { Suspense } from 'react';
import styles from "./style.module.scss"
const AppelCard = React.lazy(() => import('./../../../components/appelCard'));
import Head from 'next/head'; 
import { Script } from 'next/script';

const Appel = () => {
  return (
    <>
    <Head> 
    <title>Fonarev rdc | Actualités du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
     
    </Head>
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
            {/* <Suspense fallback={<div>Chargement...</div>}>
              <AppelCard isAvis={false} bigTitle="..." />
            </Suspense> */}

            <AppelCard isAvis = {false}  bigTitle = "Avis d'Appel d'Offres International  publié le Marcredi 12 Juin 2024" link="/avis-d-appel-offre-internationale.pdf" reference = "AOI N° 002- F/ DG FONAREV/ CPM/ DMIL/ 06- 2024" expiration = "Jusqu'au 12 juillet 2024 à 14h00'" titre = "MARCHE DE FOURNITURES" />

                <AppelCard isAvis = {false}  bigTitle = "Avis d'appel d'offres national  publié le Jeudi 09 Mai 2024" link="/FONAREV-AON-mai-2024.pdf" reference = "AON N° 01- F/ DG FONAREV/ CPM/ DML/ 04- 2024" expiration = "Du 13 mai 2024 au 12 juin 2024" titre = "MARCHE DE FOURNITURES" />
                <AppelCard isAvis = {true}  bigTitle = "APPEL à MANIFESTATION d'Intérêts publié le Lundi 13 Mai 2024" link="/FONAREV-AMI-mai-2024.pdf" reference = "AMI N° 001/ DG FONAREV/ CPM/ DML/ 04- 2024" expiration = "Le 27 mai 2024" titre = "Sélection et recrutement d'un Consultant 'Bureau d'études techniques - Bureau de contrôle et de surveillance', chargé des Études techniques et architecturales; de l'évaluation environnementale et sociale préliminaires, et du contrôle et de la surveillance des travaux de réhabilitation/construction d'infrastructures hospitalières, scolaires et professionnelles et de commodités, d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans la localité de MAKOBOLA."  />
                <AppelCard isAvis = {true} bigTitle = "Appel à Manifestation d'Intérêts publié le Mardi, le 2 Avril 2024" link = "/FONAREV-AMI-BET-All-sites-2024.pdf" titre = "Sélection et recrutement des Consultants 'Bureaux d'études techniques - Bureaux de contrôle et de surveillance', chargés des Études techniques et architecturales; de l'évaluation environnementale et sociale préliminaires, etdu contrôle et de la surveillance des travaux de réhabilitation/constructiond'infrastructures hospitalières, scolaires et professionnelles et de commodité, d'ouvrages d'art à entreprendre et à ériger par le FONAREV dans l'Ituri, le Nord Kivu, le Sud Kivu, le Haut Katanga, le Tanganyika, le Kongo Central, le Kasaï, le Sud Ubangi, et Kinshasa." expiration = "Mardi, le 16 Avril 2024" reference = "AMI N° 002/ DG FONAREV/ CPM/ DML/ 04- 2024"/>
                <AppelCard  bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link = "/FONAREV-PPM -SERVICES-NON-INTELLECTUELS-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024" titre= "MARCHE DE SERVICES (NON INTELLECTUELS)"/>
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link="/FONAREV-PPM-FOURNITURES-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024"  titre = "MARCHE DE FOURNITURES" />
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link="/FONAREV-PPM-PRESTATIONS-INTELLECTUELLES-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024"  titre = "MARCHE DE PRESTATIONS INTELLECTUELLES" />
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le Mardi 2 Avril 2024" link="/FONAREV-PPM-TRAVAUX-2024.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2024"  titre = "MARCHE DE TRAVAUX" />



            </div>
          </section>  
        </main>
        </>
  )
}

export default Appel
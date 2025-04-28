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
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES NATIONAL SANS PRE-QUALIFICATION  publié le mardi 18 Avril 2025" link="/fonarev-aaon-fichama.pdf" reference = "AAON N°03-T/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 19 mai 2025" titre = "MARCHE DES TRAVAUX DE CONSTRUCTION ET EQUIPEMENT,EN LOT UNIQUE,D'UN CENTRE DE SANTE DE REFERENCE A FICHAMA DANS LE TERRITOIRE DE DJUGU, PROVINCE DE L'ITURI" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL A MANIFESTATION D'INTERETS  publié le mardi 08 Avril 2025" link="/AMI-consulting.pdf" reference = "AMI N°07-PI/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 22 avril 2025" titre = "Recrutement d'un consultant chargé de la réalisation d'une étude de modélisation du recouvrement relatif au système de crédit carbone par le FONAREV" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL A MANIFESTATION D'INTERETS  publié le vendredi 13 Mars 2025" link="/Fonarev-AMI-3-2025.pdf" reference = "AMI N°03-PI/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 27 mars 2025" titre = "Recrutement d'un consultant (Cabinet) chargé d'une mission d'assistance fiscale au FONAREV" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL A MANIFESTATION D'INTERETS publié le vendredi 13 Mars 2025" link="/Fonarev-AMI-6-2025.pdf" reference = "AMI N°06-PI/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 28 mars 2025" titre = "Recrutement d'un consultant individuel pour la réalisation des études sur les projets d'investissement du FONAREV"  />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL A MANIFESTATION D'INTERETS publié le vendredi 13 Mars 2025" link="/FONAREV-AMI-CHARGE-AUDIT-DES-ETATS.pdf" reference = "AMI N°02-PI/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 28 mars 2025" titre = "Recrutement d'un Auditeur Externe (Cabinet) chargé de réaliser l'audit des états financiers du FONAREV"  />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES NATIONAL SANS PREQUALIFICATION publié le vendredi 18 Mars 2025" link="/FONAREV-AON-CALL-CENTER.pdf" reference = "AAON N°04-S/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 21 Avril 2025" titre = "Sélection d'une agence chargée de la gestion du centre d'appel (call center) externalisé du FONAREV et du numéro vert dédié"  />
                <AppelCard  bigTitle = "PLAN DE PASSATION DES MARCHES publié le vendredi 13 Mars 2025" link = "/FONAREV-PPM-PREQUALIF-2025.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2025" titre= "MARCHE DES FOURNITURES SANS PREQUALIFICATION"/>
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le vendredi 13 Mars 2025" link="/FONAREV-PPM_PRESTATIONS-INTELLECTUELLES-2025.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2025"  titre = "MARCHE DE PRESTATIONS INTELLECTUELLES" />
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le vendredi 13 Mars 2025" link="/FONAREV-PPM-TRAVAUX-2025.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2025"  titre = "MARCHE DES TRAVAUX SANS PREQUALIFICATION" />
                <AppelCard bigTitle = "PLAN DE PASSATION DES MARCHES publié le vendredi 13 Mars 2025" link="/FONAREV-PPM-SERVICES-2025.pdf" reference = "--" expiration = "Du 1er janvier au 31 décembre - Exercice budgétaire: 2025"  titre = "MARCHE DES SERVICES SANS PREQUALIFICATION" />



            </div>
          </section>  
        </main>
        </>
  )
}

export default Appel
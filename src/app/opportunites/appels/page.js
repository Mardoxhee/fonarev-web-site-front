import React, { Suspense } from 'react';
import styles from "./style.module.scss"
const AppelCard = React.lazy(() => import('./../../../components/appelCard'));
import Head from 'next/head'; 
import { Script } from 'next/script';
import Link from 'next/link';

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
                <Link className={styles.archiveBtn} href="/opportunites/appels/archives">Voir plus</Link>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.listColumn}>
                <div className={styles.cardContainer}>
                {/* <Suspense fallback={<div>Chargement...</div>}>
                  <AppelCard isAvis={false} bigTitle="..." />
                </Suspense> */}
                  <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 27 janvier 2026" link="/AMI-CAUSES-PROFONDES-DES-CONFLITS-ARMES-ET-NON-ARMES.pdf" reference = "AMI N°05-PI/DG FONAREV/CGPMP/PF/01-2026" expiration = "Le 26 février 2026" titre = "RECRUTEMENT DES CONSULTANTS INDIVIDUELS CHARGES D E L'ETUDE SUR LES CAUSES PROFONDES DES CONFLITS ARMES ET NON ARMES EN REPUBLIQUE DEMOCRATIQUE DU CONGO" />
                  <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 27 janvier 2026" link="/AMI-FORMALISATION-DEL-ACCOMPAGNEMENT-ADMINISTRATIF.pdf" reference = "AMI N°06-PI/DG FONAREV/CGPMP/PF/01-2026" expiration = "Le 26 février 2026" titre = "RECRUTEMENT D'UN CONSULTANT CABINET CHARGE DE LA FORMALISATION, D E L'ACCOMPAGNEMENT ADMINISTRATIF, TECHNIQUE ET LOGISTIQUE DES ASSOCIATIONS DES VICTIMES DANS LES PROVINCES DE KINSHASA, DU KONGO CENTRAL, DU KASAI ET DU KASAI ORIENTAL" />

                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 08 janvier 2026" link="/AVIS%20D%27APPEL%20D%27OFFRES%20-%20RECRUTEMENT%20DES%20AGENCES%20DE%20VOYAGES.pdf" reference = "AAOI N° 01- S/DG FONAREV/CGPMP/PF/12-2025" expiration = "Le 09 février 2026" titre = "MARCHE DE RECRUTEMENT DES AGENCES DE VOYAGE POUR L’ORGANISATION DES DEPLACEMENTS PROFESSIONNELS DES AGENTS DU FONAREV" />

                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 14 janvier 2026" link="/AMI-CABINET-DAVOCATS.pdf" reference = "AMI N°02-PI/DG FONAREV/CGPMP/PF/01-2026" expiration = "Le 13 février 2026" titre = "RECRUTEMENT D'UN CABINET D'AVOCATS CONSEIL POUR LE FONAREV" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 14 janvier 2026" link="/AAO-CONTRUCTION-D-UN-CENTRE-DES-VICTIMES-TSHOPO.pdf" reference = "AAON N°16-T/DG FONAREV/CGPMP/PF/ 01-2026" expiration = "Le 13 février 2026" titre = "MARCHE DES TRAVAUX DE CONSTRUCTION D'UN CENTRE DES VICTIMES DANS LA PROVINCE DE LA TSHOPO" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 14 janvier 2026" link="/Avis-d-appel-d-offres-CS-FICHAMA.pdf" reference = "AON N° 02-T/DG FONAREV/CGPMP/PF/01-2026" expiration = "Le 13 février 2026" titre = "MARCHE DES TRAVAUX DE CONSTRUCTION D'UN CENTRE DE SANTE A FICHAMA, A BUNIA DANS LA PROVINCE DE L'ITURI" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 14 janvier 2026" link="/AAO-CONTRUCTION-D-UN-CENTRE-DES-VICTIMES-A-KONGA-KONGA.pdf" reference = "AAON N° 06-T/DG FONAREV/CGPMP/PF/01-2026" expiration = "Le 13 février 2026" titre = "MARCHE DE TRAVAUX DE CONSTRUCTION D'UN ETABLISSEMENT SCOLAIRE ET PROFESSIONNEL(EP KASONGA)-FICHAMA DANS LA PROVINCE DE L'ITURI" />

                </div>
              </div>

              <aside className={styles.sidebar}>
                <div className={styles.ppm2026Sticky}>
                  <div className={styles.ppm2026Header}>
                    <h3>
                      Plan de passation des marchés
                      <span className={styles.ppmBadge}>2026</span>
                    </h3>
                    <p>
                      PPM décliné en 4 documents (téléchargement PDF).
                    </p>
                  </div>
                  <div className={styles.ppm2026Cards}>
                    <AppelCard variant="ppm" bigTitle="PLAN DE PASSATION DES MARCHES - Exercice budgétaire 2026" link="/PPM%202026%20ARMP%20-%20FOURNITURES.pdf" reference="--" expiration="Du 1er janvier au 31 décembre - Exercice budgétaire: 2026" titre="MARCHES DES FOURNITURES SANS PREQUALIFICATION" />
                    <AppelCard variant="ppm" bigTitle="PLAN DE PASSATION DES MARCHES - Exercice budgétaire 2026" link="/PPM%202026%20ARMP%20-%20PRESTATIONS%20INTELLECTUELLES.pdf" reference="--" expiration="Du 1er janvier au 31 décembre - Exercice budgétaire: 2026" titre="MARCHES DE PRESTATIONS INTELLECTUELLES" />
                    <AppelCard variant="ppm" bigTitle="PLAN DE PASSATION DES MARCHES - Exercice budgétaire 2026" link="/PPM%202026%20ARMP%20-%20TRAVAUX.pdf" reference="--" expiration="Du 1er janvier au 31 décembre - Exercice budgétaire: 2026" titre="TRAVAUX SANS PREQUALIFICATION" />
                    <AppelCard variant="ppm" bigTitle="PLAN DE PASSATION DES MARCHES - Exercice budgétaire 2026" link="/PPM%202026%20ARMP-%20SERVICES.pdf" reference="--" expiration="Du 1er janvier au 31 décembre - Exercice budgétaire: 2026" titre="SERVICES SANS PREQUALIFICATION" />
                  </div>
                </div>
              </aside>
            </div>
          </section>  
        </main>
        </>
  )
}

export default Appel
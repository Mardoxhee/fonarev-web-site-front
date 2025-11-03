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

                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À CANDIDATURE  publié le mardi 03 Novembre 2025" link="/AAOI-Recrutement-audiovisuels.pdf" reference = "AOI N°04-S/DG FONAREV/CGPMP/PF/10-2025" expiration = "Le 03 Décembre 2025" titre = "MARCHE DE RECRUTEMENT D'UN PRESTATAIRE CHARGÉ DE LA PRODUCTION DES SUPPORTS AUDIOVISUELS"/>
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À CANDIDATURE  publié le mardi 31 Octobre 2025" link="/AMI-Recrutementdeconsultantinfra-kaC.pdf" reference = "AMI N°30-PI/DG FONAREV/CGPMP/PF/10-2025" expiration = "Le 01 Décembre 2025" titre = "RECRUTEMENT D'UN CONSULTANT FIRME EN CHARGE DES ÉTUDES, DU CONTRÔLE ET DE LA SURVEILLANCE DES TRAVAUX DE CONSTRUCTION D'INFRASTRUCTURES DE BASE DANS LA PROVINCE DU KASAÏ CENTRAL"/>
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À CANDIDATURE  publié le mardi 20 Mai 2025" link="/archi-appel.pdf" reference = "AMI N°11-PI/DG FONAREV/CGPMP/PF/05-2025" expiration = "Le 04 juin 2025" titre = "CONCOURS POUR LA CONCEPTION ARCHITECTURALE ET ARTISTIQUE DES ESPACES MÉMORIELS EN SOUVENIR DE LA RESILIENCE DES VICTIMES DES VIOLENCES SEXUELLES LIEES AUX CONFLITS ET DES CRIMES CONTRE LA PAIX ET LA SECURITE DE L'HUMANITE EN REPUBLIQUE DEMOCRATIQUE DU CONGO" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS DE REPORT DE DEPOT D'OFFRES. DAte initiale : Le 19 Mai, Date reportée  au  04 juin 2025" link="/avis_repport.pdf" reference = "AAON N° 03-T/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 04 juin 2025" titre = "MARCHE DES TRAVAUX DE CONSTRUCTION ET EQUIPEMENT, EN LOT UNIQUE, D'UN CENTRE DE SANTE DE REFERENCE A FICHAMA DANS LE TERRITOIRE DE DJUGU, PROVINCE DE L'ITURI" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 mai 2025" link="/ami_erp.pdf" reference = "AMI N°08-PI/DG FONAREV/CGPMP/PF/05-2025" expiration = "21 mai 2025" titre = "Recrutement d'un consultant spécialisé dans l'implémentation d'ERP" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025" link="/ami_audit_numerique.pdf" reference = "AMI N°21-PI/DG FONAREV/CGPMP/PF/05-2025" expiration = "Le 09 juin 2025" titre = "Recrutement d'un cabinet consultant externe chargé de réaliser un audit du système d'information duFONAREV (Audit du numérique)" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025" link="/ami_temple_matadi.pdf" reference = "AMI N°19-3-PI/DG FONAREV/CGPMP/PF/05-2025" expiration = "Le 09 juin 2025" titre = "Recrutement d'un consultant firme chargée des études, contrôle et surveillance des travaux de construction des temples comme lieux de prières à Kanzi dans le territoire de Moanda et dans la ville de Matadi, dans la province du Kongo Central" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025" link="/ami_songololo.pdf" reference = "AMI N°19-2-PI/DG FONAREV/CGPMP/PF/05-2025" expiration = "Le 09 juin 2025" titre = "Recrutement d'un consultant firme chargée des études, contrôle et surveillance des travaux d'aménagement d'un espace mémoriel au cimetière des victimes Bundu-Dia-Kongo à Matadi et Songololo, dans la province du Kongo Central" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025" link="/ami-consult.pdf" reference = "AMI N°19-1-PI/DG FONAREV/CGPMP/PF/05-2025" expiration = "Le 09 juin 2025" titre = "Recrutement d'un consultant firme chargée des études, contrôle et surveillance des travaux de construction d'un établissement d'enseignement primaire et professionnel à Songololo en faveur des enfants des victimes" />

                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025" link="/ami-pool-medical.pdf" reference = "AMI N°26-PI/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 05 juin 2025" titre = "Recrutement des consultants pour l'appui technique au pool des médecins du FONAREV" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025" link="/ami-pdo.pdf" reference = "AMI N°15-PI/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 05 juin 2025" titre = "Recrutement des consultants individuels pour les études, la surveillance et le contrôle des travaux de construction (délégués à pied d'œuvre) d'infrastructures sociales de base et de systèmes d'eau potable à ériger sur l'ensemble de la République démocratique du Congo" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025" link="/ami-luc.pdf" reference = "AMI N°22-PI/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 05 juin 2025" titre = "Recrutement d'un cabinet consultant chargé de l'audit de certification de la liste unique consolidée des victimes (LUC) pour le FONAREV" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025" link="/ami-duediligence.pdf" reference = "AMI N°23-PI/DG FONAREVICGPMP/PF/04-2025" expiration = "Le 05 juin 2025" titre = "Recrutement des cabinets chargés de l'identification et de la due diligence des organisations éligibles à l'écosystème du FONAREV en vue d'un partenariat" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025" link="/ami-bet-ituri.pdf" reference = "AMI N°18-PI/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 05 juin 2025" titre = "Recrutement d'un consultant firme chargée de la réalisation des études, du contrôle et de la surveillance des travaux de construction d'infrastructures scolaires et professionnelles et de systèmes d'eau potable à ériger dans la ville BUNIA et son hinterland dans la province d'ITURI" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES NATIONAL SANS PRE-QUALIFICATION  publié le mardi 18 Avril 2025" link="/fonarev-aaon-fichama.pdf" reference = "AAON N°03-T/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 19 mai 2025" titre = "MARCHE DES TRAVAUX DE CONSTRUCTION ET EQUIPEMENT,EN LOT UNIQUE,D'UN CENTRE DE SANTE DE REFERENCE A FICHAMA DANS LE TERRITOIRE DE DJUGU, PROVINCE DE L'ITURI" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 08 Avril 2025" link="/AMI-consulting.pdf" reference = "AMI N°07-PI/DG FONAREV/CGPMP/PF/04-2025" expiration = "Le 22 avril 2025" titre = "Recrutement d'un consultant chargé de la réalisation d'une étude de modélisation du recouvrement relatif au système de crédit carbone par le FONAREV" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 13 Mars 2025" link="/Fonarev-AMI-3-2025.pdf" reference = "AMI N°03-PI/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 27 mars 2025" titre = "Recrutement d'un consultant (Cabinet) chargé d'une mission d'assistance fiscale au FONAREV" />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS publié le vendredi 13 Mars 2025" link="/Fonarev-AMI-6-2025.pdf" reference = "AMI N°06-PI/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 28 mars 2025" titre = "Recrutement d'un consultant individuel pour la réalisation des études sur les projets d'investissement du FONAREV"  />
                <AppelCard isAvis = {true}  bigTitle = "AVIS D'APPEL À MANIFESTATION D'INTERETS publié le vendredi 13 Mars 2025" link="/FONAREV-AMI-CHARGE-AUDIT-DES-ETATS.pdf" reference = "AMI N°02-PI/DG FONAREV/CGPMP/PF/03-2025" expiration = "Le 28 mars 2025" titre = "Recrutement d'un Auditeur Externe (Cabinet) chargé de réaliser l'audit des états financiers du FONAREV"  />
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
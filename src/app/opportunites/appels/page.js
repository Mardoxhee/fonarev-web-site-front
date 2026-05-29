import React from 'react';
import styles from "./style.module.scss"
import AppelCard from './../../../components/appelCard';
import Link from 'next/link';

const Appel = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Opportunités</span>
          <h1>Appels d'offres</h1>
          <p>
            Retrouvez les appels d'offres, avis de marchés et documents de passation publiés par le FONAREV.
          </p>
        </div>
      </section>

      <section className={styles.sectionShell}>
            <div className={styles.titleContainer}>
                <div>
                  <span className={styles.eyebrow}>Marchés publics</span>
                  <h2>Appels d'offres</h2>
                </div>
                <Link className={styles.archiveBtn} href="/opportunites/appels/archives">Voir les archives</Link>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.listColumn}>
                <div className={styles.cardContainer}>
                {/* <Suspense fallback={<div>Chargement...</div>}>
                  <AppelCard isAvis={false} bigTitle="..." />
                </Suspense> */}
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 11 février 2026" link="/AMI EXPERT-CHARGES-DU-REPERTOIRE.pdf" reference = "AMI N°03-PI/DG FONAREV/CGPMP/PF/02-2026" expiration = "Le 13 mars 2026" titre = "RECRUTEMENT DES EXPERTS CHARGES DE LA REDACTION DU REPERTOIRE DES INCIDENTS COLLECTES DANS LES PROVINCES DE KASAÏ, KASAÏ ORIENTAL, KWANGO, KWILU, MAI NDOMBE, TSHOPO, HAUT UELE, BAS UELE, HAUT LOMAMI, ET LUALABA" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 13 février 2026" link="/AAO-CONTRUCTION-MEMORIEL-CIMETIERE-KIMBAGUISTE.pdf" reference = "AAON N°09-T/DG FONAREV/CGPMP/PF/ 02-2026" expiration = "Le 17 mars 2026" titre = "MARCHE DES TRAVAUX D'AMÉNAGEMENT D'UN SITE MÉMORIEL AU CIMETIÈRE KIMBANGUISTE A KENGE DANS LA PROVINCE DE LA KWANGO" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 13 février 2026" link="/AAO-CONTRUCTION MEMORIEL-FEMME-PLEUREUSE.pdf" reference = "AAON N°10-T/DG FONAREV/CGPMP/PF/ 02-2026" expiration = "Le 17 mars 2026" titre = "MARCHE DES TRAVAUX D'AMENAGEMENT D'UN SITE MÉMORIEL AU ROND-POINT DE LA PLACE DE LA FEMME PLEUREUSE A KENGE DANS LA PROVINCE DE LA KWANGO" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 11 février 2026" link="/AAO_ACQUISITION-DES-MATERIELS-INFORMATIQUES ET-ACCESSOIRES.pdf" reference = "AAOI N°01-F/DG FONAREV/CGPMP/PF/01-2026" expiration = "Le 13 mars 2026" titre = "L'ACQUISITION DES MATERIELS INFORMATIQUES ET ACCESSOIRES AU BENEFICE DU FONAREV" />
                <AppelCard variant="compact" isAvis = {true}  bigTitle = "AVIS D'APPEL D'OFFRES publié le 13 février 2026" link="/AMI-RECRUTEMENT-D-UN-CABINETPOUR-LA-FORMATION[23].pdf" reference = "AMI N°07-PI/DG FONAREV/CGPMP/PF/02-2026" expiration = "Le 16 mars 2026" titre = "RECRUTEMENT DES CONSULTANTS CABINETS CHARGES DU RENFORCEMENT DES CAPACITES TECHNIQUES ET FINANCIERES DES ASSOCIATIONS DES VICTIMES" />






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
  )
}

export default Appel

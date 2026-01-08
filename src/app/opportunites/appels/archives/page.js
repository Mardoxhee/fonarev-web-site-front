import React, { Suspense } from 'react';
import styles from "./style.module.scss";
const AppelCard = React.lazy(() => import('./../../../../components/appelCard'));
import Head from 'next/head';
import Link from 'next/link';

const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const frMonthToIndex = {
  janvier: 0,
  février: 1,
  fevrier: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  aout: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
  decembre: 11,
};

const parseFrenchDate = (raw) => {
  if (!raw) return null;
  const value = String(raw)
    .toLowerCase()
    .replace(/\./g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const cleaned = value.replace(/^le\s+/, "");
  const match = cleaned.match(/^(\d{1,2})\s+([a-zéûôîàç]+)\s+(\d{4})/i);
  if (!match) return null;

  const day = Number(match[1]);
  const monthName = match[2];
  const year = Number(match[3]);
  const month = frMonthToIndex[monthName];
  if (Number.isNaN(day) || Number.isNaN(year) || month === undefined) return null;

  const date = new Date(Date.UTC(year, month, day));
  if (Number.isNaN(date.getTime())) return null;
  return date;
};

const appels = [
  {
    id: "2026-01-09-agences-voyage",
    publishDate: "2026-01-09",
    isAvis: true,
    bigTitle: "AVIS D'APPEL D'OFFRES publié le 09 janvier 2026",
    link: "/AVIS%20D%27APPEL%20D%27OFFRES%20-%20RECRUTEMENT%20DES%20AGENCES%20DE%20VOYAGES.pdf",
    reference: "AAOI N° 01- S/DG FONAREV/CGPMP/PF/12-2025",
    expiration: "Le 09 février 2026",
    titre:
      "MARCHE DE RECRUTEMENT DES AGENCES DE VOYAGE POUR L’ORGANISATION DES DEPLACEMENTS PROFESSIONNELS DES AGENTS DU FONAREV",
  },
  {
    id: "2025-05-20-archi",
    publishDate: "2025-05-20",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À CANDIDATURE  publié le mardi 20 Mai 2025",
    link: "/archi-appel.pdf",
    reference: "AMI N°11-PI/DG FONAREV/CGPMP/PF/05-2025",
    expiration: "Le 04 juin 2025",
    titre:
      "CONCOURS POUR LA CONCEPTION ARCHITECTURALE ET ARTISTIQUE DES ESPACES MÉMORIELS EN SOUVENIR DE LA RESILIENCE DES VICTIMES DES VIOLENCES SEXUELLES LIEES AUX CONFLITS ET DES CRIMES CONTRE LA PAIX ET LA SECURITE DE L'HUMANITE EN REPUBLIQUE DEMOCRATIQUE DU CONGO",
  },
  {
    id: "2025-05-20-report",
    publishDate: "2025-05-20",
    isAvis: true,
    bigTitle:
      "AVIS DE REPORT DE DEPOT D'OFFRES. DAte initiale : Le 19 Mai, Date reportée  au  04 juin 2025",
    link: "/avis_repport.pdf",
    reference: "AAON N° 03-T/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 04 juin 2025",
    titre:
      "MARCHE DES TRAVAUX DE CONSTRUCTION ET EQUIPEMENT, EN LOT UNIQUE, D'UN CENTRE DE SANTE DE REFERENCE A FICHAMA DANS LE TERRITOIRE DE DJUGU, PROVINCE DE L'ITURI",
  },
  {
    id: "2025-05-06-erp",
    publishDate: "2025-05-06",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 mai 2025",
    link: "/ami_erp.pdf",
    reference: "AMI N°08-PI/DG FONAREV/CGPMP/PF/05-2025",
    expiration: "21 mai 2025",
    titre: "Recrutement d'un consultant spécialisé dans l'implémentation d'ERP",
  },
  {
    id: "2025-05-09-audit-num",
    publishDate: "2025-05-09",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025",
    link: "/ami_audit_numerique.pdf",
    reference: "AMI N°21-PI/DG FONAREV/CGPMP/PF/05-2025",
    expiration: "Le 09 juin 2025",
    titre:
      "Recrutement d'un cabinet consultant externe chargé de réaliser un audit du système d'information duFONAREV (Audit du numérique)",
  },
  {
    id: "2025-05-09-temple",
    publishDate: "2025-05-09",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025",
    link: "/ami_temple_matadi.pdf",
    reference: "AMI N°19-3-PI/DG FONAREV/CGPMP/PF/05-2025",
    expiration: "Le 09 juin 2025",
    titre:
      "Recrutement d'un consultant firme chargée des études, contrôle et surveillance des travaux de construction des temples comme lieux de prières à Kanzi dans le territoire de Moanda et dans la ville de Matadi, dans la province du Kongo Central",
  },
  {
    id: "2025-05-09-songololo",
    publishDate: "2025-05-09",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025",
    link: "/ami_songololo.pdf",
    reference: "AMI N°19-2-PI/DG FONAREV/CGPMP/PF/05-2025",
    expiration: "Le 09 juin 2025",
    titre:
      "Recrutement d'un consultant firme chargée des études, contrôle et surveillance des travaux d'aménagement d'un espace mémoriel au cimetière des victimes Bundu-Dia-Kongo à Matadi et Songololo, dans la province du Kongo Central",
  },
  {
    id: "2025-05-09-consult",
    publishDate: "2025-05-09",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 09 Mai 2025",
    link: "/ami-consult.pdf",
    reference: "AMI N°19-1-PI/DG FONAREV/CGPMP/PF/05-2025",
    expiration: "Le 09 juin 2025",
    titre:
      "Recrutement d'un consultant firme chargée des études, contrôle et surveillance des travaux de construction d'un établissement d'enseignement primaire et professionnel à Songololo en faveur des enfants des victimes",
  },
  {
    id: "2025-05-06-pool",
    publishDate: "2025-05-06",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025",
    link: "/ami-pool-medical.pdf",
    reference: "AMI N°26-PI/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 05 juin 2025",
    titre: "Recrutement des consultants pour l'appui technique au pool des médecins du FONAREV",
  },
  {
    id: "2025-05-06-pdo",
    publishDate: "2025-05-06",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025",
    link: "/ami-pdo.pdf",
    reference: "AMI N°15-PI/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 05 juin 2025",
    titre:
      "Recrutement des consultants individuels pour les études, la surveillance et le contrôle des travaux de construction (délégués à pied d'œuvre) d'infrastructures sociales de base et de systèmes d'eau potable à ériger sur l'ensemble de la République démocratique du Congo",
  },
  {
    id: "2025-05-06-luc",
    publishDate: "2025-05-06",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025",
    link: "/ami-luc.pdf",
    reference: "AMI N°22-PI/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 05 juin 2025",
    titre:
      "Recrutement d'un cabinet consultant chargé de l'audit de certification de la liste unique consolidée des victimes (LUC) pour le FONAREV",
  },
  {
    id: "2025-05-06-duediligence",
    publishDate: "2025-05-06",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025",
    link: "/ami-duediligence.pdf",
    reference: "AMI N°23-PI/DG FONAREVICGPMP/PF/04-2025",
    expiration: "Le 05 juin 2025",
    titre:
      "Recrutement des cabinets chargés de l'identification et de la due diligence des organisations éligibles à l'écosystème du FONAREV en vue d'un partenariat",
  },
  {
    id: "2025-05-06-bet-ituri",
    publishDate: "2025-05-06",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 06 Mai 2025",
    link: "/ami-bet-ituri.pdf",
    reference: "AMI N°18-PI/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 05 juin 2025",
    titre:
      "Recrutement d'un consultant firme chargée de la réalisation des études, du contrôle et de la surveillance des travaux de construction d'infrastructures scolaires et professionnelles et de systèmes d'eau potable à ériger dans la ville BUNIA et son hinterland dans la province d'ITURI",
  },
  {
    id: "2025-04-18-aaon-fichama",
    publishDate: "2025-04-18",
    isAvis: true,
    bigTitle:
      "AVIS D'APPEL D'OFFRES NATIONAL SANS PRE-QUALIFICATION  publié le mardi 18 Avril 2025",
    link: "/fonarev-aaon-fichama.pdf",
    reference: "AAON N°03-T/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 19 mai 2025",
    titre:
      "MARCHE DES TRAVAUX DE CONSTRUCTION ET EQUIPEMENT,EN LOT UNIQUE,D'UN CENTRE DE SANTE DE REFERENCE A FICHAMA DANS LE TERRITOIRE DE DJUGU, PROVINCE DE L'ITURI",
  },
  {
    id: "2025-04-08-consulting-carbon",
    publishDate: "2025-04-08",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le mardi 08 Avril 2025",
    link: "/AMI-consulting.pdf",
    reference: "AMI N°07-PI/DG FONAREV/CGPMP/PF/04-2025",
    expiration: "Le 22 avril 2025",
    titre:
      "Recrutement d'un consultant chargé de la réalisation d'une étude de modélisation du recouvrement relatif au système de crédit carbone par le FONAREV",
  },
  {
    id: "2025-03-13-ami-fiscal",
    publishDate: "2025-03-13",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS  publié le vendredi 13 Mars 2025",
    link: "/Fonarev-AMI-3-2025.pdf",
    reference: "AMI N°03-PI/DG FONAREV/CGPMP/PF/03-2025",
    expiration: "Le 27 mars 2025",
    titre: "Recrutement d'un consultant (Cabinet) chargé d'une mission d'assistance fiscale au FONAREV",
  },
  {
    id: "2025-03-13-ami-etudes",
    publishDate: "2025-03-13",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS publié le vendredi 13 Mars 2025",
    link: "/Fonarev-AMI-6-2025.pdf",
    reference: "AMI N°06-PI/DG FONAREV/CGPMP/PF/03-2025",
    expiration: "Le 28 mars 2025",
    titre:
      "Recrutement d'un consultant individuel pour la réalisation des études sur les projets d'investissement du FONAREV",
  },
  {
    id: "2025-03-13-audit-etats",
    publishDate: "2025-03-13",
    isAvis: true,
    bigTitle: "AVIS D'APPEL À MANIFESTATION D'INTERETS publié le vendredi 13 Mars 2025",
    link: "/FONAREV-AMI-CHARGE-AUDIT-DES-ETATS.pdf",
    reference: "AMI N°02-PI/DG FONAREV/CGPMP/PF/03-2025",
    expiration: "Le 28 mars 2025",
    titre:
      "Recrutement d'un Auditeur Externe (Cabinet) chargé de réaliser l'audit des états financiers du FONAREV",
  },
  {
    id: "2025-03-18-call-center",
    publishDate: "2025-03-18",
    isAvis: true,
    bigTitle:
      "AVIS D'APPEL D'OFFRES NATIONAL SANS PREQUALIFICATION publié le vendredi 18 Mars 2025",
    link: "/FONAREV-AON-CALL-CENTER.pdf",
    reference: "AAON N°04-S/DG FONAREV/CGPMP/PF/03-2025",
    expiration: "Le 21 Avril 2025",
    titre:
      "Sélection d'une agence chargée de la gestion du centre d'appel (call center) externalisé du FONAREV et du numéro vert dédié",
  },
];

const groupBy = (items, getKey) => {
  return items.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
};

const getDateForArchive = (item) => {
  const byExpiration = parseFrenchDate(item.expiration);
  if (byExpiration) return byExpiration;
  if (!item.publishDate) return null;
  const fallback = new Date(item.publishDate + "T00:00:00");
  if (Number.isNaN(fallback.getTime())) return null;
  return fallback;
};

const AppelsArchives = () => {
  const normalized = appels
    .map((item) => {
      const date = getDateForArchive(item);
      return { ...item, __archiveDate: date };
    })
    .filter((item) => item.__archiveDate);

  const sorted = [...normalized].sort((a, b) => b.__archiveDate.getTime() - a.__archiveDate.getTime());
  const byYear = groupBy(sorted, (item) => String(item.__archiveDate.getUTCFullYear()));

  const yearKeys = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <Head>
        <title>Fonarev rdc | Archives des appels d'offres</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.bannerContainer}>
          <h1>Archives</h1>
          <p>
            Retrouvez tous les avis et appels (AMI, AAON, etc.) classés par année et par mois.
          </p>
        </section>

        <section className={styles.subtitle}>
          <div className={styles.titleContainer}>
            <h2>
              Archives des <span>appels</span>
            </h2>
            <Link className={styles.backBtn} href="/opportunites/appels">
              Retour
            </Link>
          </div>

          {yearKeys.map((year) => {
            const items = byYear[year];
            const byMonth = groupBy(items, (it) => {
              const m = it.__archiveDate.getUTCMonth() + 1;
              return `${year}-${String(m).padStart(2, "0")}`;
            });

            const monthKeys = Object.keys(byMonth).sort((a, b) => (a < b ? 1 : -1));

            return (
              <div key={year} className={styles.yearSection}>
                <div className={styles.yearHeader}>
                  <h3>{year}</h3>
                </div>

                {monthKeys.map((monthKey) => {
                  const monthItems = byMonth[monthKey];
                  const monthIndex = Number(monthKey.split("-")[1]) - 1;
                  const monthLabel = monthNames[monthIndex];

                  return (
                    <div key={monthKey} className={styles.monthSection}>
                      <div className={styles.monthRow}>
                        <div className={styles.monthLeft}>
                          <span className={styles.monthName}>{monthLabel}</span>
                        </div>
                        <div className={styles.monthRight}>
                          <span className={styles.monthCount}>{monthItems.length} publication(s)</span>
                        </div>
                      </div>

                      <div className={styles.monthContent}>
                        {monthItems.map((appel) => (
                          <Suspense key={appel.id} fallback={<div></div>}>
                            <AppelCard
                              isAvis={appel.isAvis}
                              bigTitle={appel.bigTitle}
                              link={appel.link}
                              reference={appel.reference}
                              expiration={appel.expiration}
                              titre={appel.titre}
                            />
                          </Suspense>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default AppelsArchives;

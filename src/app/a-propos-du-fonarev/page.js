"use client"

import styles from './style.module.scss'
import TeamCard from "../../components/teamCard"
import Head from 'next/head';
import React, { useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Icon } from '@iconify/react';

const legalItems = [
  "Loi n° 22/065 du 26 décembre 2022 fixant les principes fondamentaux relatifs à la protection et à la réparation des victimes.",
  "Décret n° 22/038 du 6 décembre 2022 fixant les statuts du Fonds national des réparations des victimes.",
  "Décret n° 23/20 du 9 juin 2023 modifiant et complétant le décret n° 22/038.",
];

const missions = [
  {
    icon: "solar:user-id-bold",
    title: "Identifier",
    text: "Reconnaître les victimes, documenter les préjudices et orienter les personnes concernées vers les mécanismes adaptés.",
  },
  {
    icon: "solar:scale-bold",
    title: "Accompagner",
    text: "Faciliter l’accès à la justice, à l’écoute, au soutien psychosocial et à l’accompagnement juridique.",
  },
  {
    icon: "solar:hand-heart-bold",
    title: "Réparer",
    text: "Allouer des réparations pensées pour restaurer la dignité, la confiance et la capacité de reconstruction.",
  },
];

const values = [
  {
    title: "Dignité humaine",
    text: "Reconnaître et restaurer la valeur intrinsèque de chaque victime de violences sexuelles liées aux conflits.",
  },
  {
    title: "Intégrité",
    text: "Agir avec transparence, responsabilité et fidélité aux principes qui protègent les victimes.",
  },
  {
    title: "Respect",
    text: "Traiter chaque parcours avec sensibilité, considération et attention à la gravité des expériences vécues.",
  },
  {
    title: "Mémoire",
    text: "Préserver la vérité des faits, transmettre l’histoire et lutter contre l’oubli des tragédies subies.",
  },
];

const leaders = [
  {
    bg: "pca3.jpg",
    prenom: "Eddy",
    nom: "MBANZU",
    postnom: "DIEKUZEIKO",
    fonction: "Président du Conseil d’Administration",
  },
  {
    bg: "dgpatrick.jpg",
    prenom: "Patrick",
    nom: "FATA",
    postnom: "MAKUNGA",
    fonction: "Directeur Général",
  },
  {
    bg: "dga_k.jpg",
    prenom: "Kevin",
    nom: "NGUNGA",
    postnom: "MAKIEDI",
    fonction: "Directeur Général Adjoint en charge de l’administration et des finances",
  },
  {
    bg: "dga-emma-2.jpg",
    prenom: "Emmanuella",
    nom: "ZANDI",
    postnom: "",
    fonction: "Directeur Général Adjoint en charge des opérations",
  },
];

const About = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      [
        `.${styles.intro}`,
        `.${styles.legal}`,
        `.${styles.vision}`,
        `.${styles.mission}`,
        `.${styles.values}`,
        `.${styles.missionVideo}`,
        `.${styles.genocost}`,
        `.${styles.team}`,
      ].join(", ")
    );

    revealElements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>FONAREV RDC | À propos du FONAREV</title>
        <meta
          name="description"
          content="Découvrez le FONAREV, son cadre légal, sa mission, ses valeurs et son engagement pour la réparation des victimes en République démocratique du Congo."
        />
        <meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Image src="/fonarev-about.jpg" alt="FONAREV en action auprès des communautés" fill priority sizes="100vw" />
          <div className={styles.heroContent}>
            <span>À propos du FONAREV</span>
            <h1>Une institution nationale pour reconnaître, accompagner et réparer.</h1>
            <p>
              Le Fonds national des réparations des victimes place la dignité, la mémoire et la justice au cœur de son action
              en faveur des victimes des violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de
              l’humanité.
            </p>
            <div className={styles.heroActions}>
              <Link href="#mission">
                Découvrir la mission
                <Icon icon="solar:arrow-down-linear" />
              </Link>
              <Link href="#team">
                Équipe dirigeante
                <Icon icon="solar:users-group-rounded-linear" />
              </Link>
            </div>
          </div>
          <div className={styles.heroStats}>
            <strong>2022</strong>
            <span>Loi de création</span>
            <strong>1993</strong>
            <span>Point de départ des faits couverts</span>
          </div>
        </section>

        <section className={styles.intro}>
          <div>
            <span className={styles.eyebrow}>Institution centrée victimes</span>
            <h2>Faire de la réparation un chemin concret vers la dignité.</h2>
          </div>
          <div className={styles.introText}>
            <p>
              Depuis plusieurs décennies, la République démocratique du Congo est marquée par des conflits armés où les
              populations civiles subissent de graves violations des droits humains, y compris des violences sexuelles.
            </p>
            <p>
              Face à cette situation, et après plusieurs étapes de plaidoyer, la RDC a adopté la loi du 26 décembre 2022
              portant création du FONAREV. L’institution répond à une exigence essentielle : reconnaître les préjudices,
              soutenir les victimes et ouvrir des voies de réparation durables.
            </p>
          </div>
        </section>

        <section className={styles.legal} id="about">
          <div className={styles.imagePanel}>
            <Image src="/about1.jpg" alt="Cadre institutionnel du FONAREV" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
          <div className={styles.legalContent}>
            <span className={styles.eyebrow}>Cadre légal</span>
            <h2>Un établissement public doté d’une mission sensible.</h2>
            <p>
              Le FONAREV est un établissement public à caractère technique, financier et social, doté d’une personnalité
              juridique et d’une autonomie financière et de gestion. Il est placé sous la tutelle du ministère ayant les
              Droits humains dans ses attributions.
            </p>
            <ul>
              {legalItems.map((item) => (
                <li key={item}>
                  <Icon icon="solar:document-text-bold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.vision} id="story">
          <div className={styles.visionContent}>
            <span className={styles.eyebrow}>Notre vision</span>
            <h2>Œuvrer pour le relèvement des victimes et la non-répétition des violences.</h2>
            <p>
              La réparation n’est pas seulement une réponse administrative : elle est un processus humain qui aide les
              victimes, les familles et les communautés à reconstruire la confiance, la mémoire et le lien social.
            </p>
          </div>
          <div className={styles.visionImage}>
            <Image src="/vision.jpg" alt="Vision du FONAREV" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        </section>

        <section className={styles.mission} id="mission">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Missions</span>
            <h2>Trois actions structurantes au service des victimes.</h2>
          </div>
          <div className={styles.missionGrid}>
            {missions.map((mission) => (
              <article key={mission.title} className={styles.missionCard}>
                <Icon icon={mission.icon} />
                <h3>{mission.title}</h3>
                <p>{mission.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.values} id="valeur">
          <div className={styles.valuesContent}>
            <span className={styles.eyebrow}>Valeurs</span>
            <h2>Des principes qui guident chaque intervention.</h2>
            <div className={styles.valuesGrid}>
              {values.map((value) => (
                <article key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.valuesImage}>
            <Image src="/valeur.jpg" alt="Valeurs du FONAREV" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        </section>

        <section className={styles.missionVideo} aria-labelledby="mission-video-title">
          <div className={styles.missionVideoHeader}>
            <span className={styles.eyebrow}>Notre mission en images</span>
            <h2 id="mission-video-title">
              Identifier les victimes, l’accès à la justice et allouer les réparations : le cœur de notre mission.
            </h2>
          </div>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/Q0cVcXR3U8M?si=ZkD6liuDPmpunGq7"
              title="Identifier les victimes, l’accès à la justice et allouer les réparations : le cœur de notre mission."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className={styles.genocost} id="genocost">
          <div className={styles.genocostContent}>
            <span className={styles.eyebrow}>GENOCOST</span>
            <h2>Genocost</h2>
            <p>
              Le terme « Geno-cost » signifie génocide pour des gains économiques. Il rappelle la dimension économique des
              violences de masse subies en République démocratique du Congo et l'urgence de reconnaître la mémoire des victimes.
            </p>
            <p>
              À travers la commémoration, le plaidoyer et les actions de réparation, le FONAREV contribue à faire vivre cette
              mémoire, à soutenir la vérité historique et à porter l'exigence de non-répétition.
            </p>
            <Link href="/genocost" className={styles.genocostCta}>
              Voir plus sur le Genocost
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
          <div className={styles.genocostImages}>
            <div>
              <Image src="/genocost1.jpg" alt="Commémoration GENOCOST" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
            <div>
              <Image src="/genocost2.jpg" alt="Mémoire des victimes en RDC" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
          </div>
        </section>

        <section className={styles.team} id="team">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Gouvernance</span>
            <h2>Notre équipe dirigeante.</h2>
          </div>
          <div className={styles.teamContainer}>
            {leaders.map((leader) => (
              <TeamCard key={`${leader.prenom}-${leader.nom}`} {...leader} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default About

import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";

export const metadata = {
  title: "FONAREV RDC | Opportunités",
  description: "Offres d'emploi, appels d'offres, appels à contribution et demandes de stage du FONAREV.",
};

const opportunities = [
  {
    title: "Offres d'emploi",
    description: "Consultez les postes ouverts et soumettez une candidature spontanée.",
    href: "/opportunites/offres-emploi",
  },
  {
    title: "Appels d'offres",
    description: "Retrouvez les avis, dossiers de marchés et consultations publiés par le FONAREV.",
    href: "/opportunites/appels",
  },
  {
    title: "Appel à contribution",
    description: "Accédez aux appels ouverts aux chercheurs, experts et contributeurs.",
    href: "/opportunites/appels-a-contributions",
  },
  {
    title: "Stage",
    description: "Déposez une demande de stage auprès du FONAREV.",
    href: "/opportunites/stages",
  },
];

const Opportunites = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Opportunités</span>
          <h1>Un espace pour candidater, répondre et contribuer.</h1>
          <p>
            Retrouvez les offres d'emploi, appels d'offres, appels à contribution et demandes de stage du FONAREV.
          </p>
        </div>
      </section>

      <section className={styles.subMenuContainer}>
        {opportunities.map((item) => (
          <Link className={styles.subMenuCard} href={item.href} key={item.href}>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Opportunites;

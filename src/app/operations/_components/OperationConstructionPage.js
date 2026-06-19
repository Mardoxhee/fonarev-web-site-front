import React from "react";
import MiseEnConstruction from "../../../components/miseEnConstruction";
import styles from "../style.module.scss";

const OperationConstructionPage = ({ title, description }) => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Opérations</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className={styles.constructionShell}>
        <div className={styles.constructionPanel}>
          <MiseEnConstruction className={styles.constructionCard} />
        </div>
      </section>
    </main>
  );
};

export default OperationConstructionPage;

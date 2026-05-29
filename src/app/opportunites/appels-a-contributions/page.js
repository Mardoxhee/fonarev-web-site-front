"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const Appel = () => {
  const [language, setLanguage] = useState("french");

  const handleDownload = () => {
    const pdfName = language === "french"
      ? "Appel_a_contributions_colloque_génocide_RDC_2025.pdf"
      : "Call_for_Papers_Colloquium_Genocide_DRC_2025.pdf";

    const link = document.createElement("a");
    link.href = `/${pdfName}`;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Opportunités</span>
          <h1>Appel à contribution</h1>
          <p>
            Universitaires, chercheurs et experts sont invités à contribuer aux travaux du colloque international sur la reconnaissance des génocides commis en RDC.
          </p>
        </div>
      </section>

      <section className={styles.colloqueContainer}>
        <div className={styles.flyerContainer}>
          <div className={styles.flyerImage}>
            <Image
              src="/contributions.jpg"
              alt="Flyer du colloque international FONAREV"
              fill
              sizes="(max-width: 1080px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.contentContainer}>
          <span className={styles.eyebrow}>Colloque international</span>
          <h2>Reconnaissance internationale des génocides commis sur le territoire de la RDC</h2>
          <p>
            La CIA-VAR et le FONAREV, en collaboration avec l'Université de Kinshasa (UNIKIN), l'Université Protestante de Lubumbashi (UPL) et le Centre de Recherche en Sciences Humaines (CRESH), organisent du 29 au 31 juillet 2025 un colloque international.
          </p>

          <div className={styles.highlightBox}>
            <h3>Comment contribuer ?</h3>
            <p>
              Les universitaires et chercheurs sont invités à faire parvenir leurs contributions en veillant à se conformer aux exigences formulées dans l'argumentaire à télécharger.
            </p>
            <ul>
              <li>La notion de Genocost</li>
              <li>Analyse et mise en cohérence des travaux en sciences sociales et humaines dans les champs des violences extrêmes</li>
              <li>Discussions juridiques à travers les thèmes cités dans la brochure</li>
            </ul>
          </div>

          <div className={styles.contactInfo}>
            <h3>Contact</h3>
            <p>
              Pour soumettre votre proposition au comité scientifique ou demander des informations complémentaires :
            </p>
            <a href="mailto:colloquegenociderdc-2025@fonarev.cd" className={styles.emailLink}>
              colloquegenociderdc-2025@fonarev.cd
            </a>
          </div>

          <div className={styles.languageToggle}>
            <button
              className={language === "french" ? styles.active : ""}
              onClick={() => setLanguage("french")}
            >
              Version française
            </button>
            <button
              className={language === "english" ? styles.active : ""}
              onClick={() => setLanguage("english")}
            >
              English version
            </button>
          </div>

          <button className={styles.downloadButton} onClick={handleDownload}>
            Télécharger l'appel à contribution ({language === "french" ? "FR" : "EN"})
          </button>
        </div>
      </section>
    </main>
  )
}

export default Appel;

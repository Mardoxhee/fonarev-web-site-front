"use client"
import React, { Suspense, useState } from 'react';
import styles from "./style.module.scss";
import Head from 'next/head'; 
import { Script } from 'next/script';
import Image from 'next/image';

const Appel = () => {
  const [language, setLanguage] = useState('french');

  const handleDownload = () => {
    const pdfName = language === 'french' 
      ? 'Appel_a_contributions_colloque_génocide_RDC_2025.pdf' 
      : 'Call_for_Papers_Colloquium_Genocide_DRC_2025.pdf';
    
    const link = document.createElement('a');
    link.href = `/${pdfName}`;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head> 
        <title>FONAREV RDC | Colloque International sur la Reconnaissance des Génocides en RDC</title>  
        <meta name="description" content="Participez au colloque international co-organisé par LA CIAVAR et le FONAREV sur la reconnaissance des génocides commis en RDC. Soumettez votre contribution." />
        <meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
        <meta name="keywords" content="colloque, génocide, RDC, Congo, victimes, violences, réparation, FONAREV, CIAVAR, conférence internationale" />
      </Head>
      
      <main className={styles.main}>
        <section className={styles.bannerContainer}>
          <h1>La CIA-VAR et le FONAREV, en collaboration avec l’Université de Kinshasa (UNIKIN), l’Université Protestante de Lubumbashi (UPL) et le Centre de Recherche en Sciences Humaines (CRESH), organisent du 29 au 31 juillet 2025, un colloque international sur le thème :<br/>
         <strong> « RECONNAISSANCE INTERNATIONALE DES GÉNOCIDES COMMIS SUR LE TERRITOIRE DE LA RÉPUBLIQUE DÉMOCRATIQUE DU CONGO »</strong></h1>
          <p>Appel à contributions - Soumettez vos propositions au plus tard le 31 mai 2025</p>
        </section>
        
        <section className={styles.colloqueContainer}>
          <div className={styles.flyerContainer}>
            <div className={styles.flyerImage}>
              <Image 
                src="/contributions.jpg" 
                alt="Flyer du colloque international FONAREV"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          
          <div className={styles.contentContainer}>
            <h2>Participez à cet événement historique</h2>
            <p>
             Pendant trois jours, des discussions approfondies permettront d'explorer les dimensions juridiques, historiques et sociales des crimes commis, tout en encourageant le dialogue participatif.
            </p>
            
            <div className={styles.highlightBox}>
              <h3>Comment contribuer ?</h3>
              <p>
               Investisseurs et chercheurs de tous les bords sont invités à faire parvenir leurs contributions à ces travaux en veillant à se conformer aux exigences formulées dans l'argumentaire à télécharger
              </p>
              <p>
                Axes du colloque :
              </p>
              <ul>
                <li>La notion de Genocost</li>
                <li>Analyse et mise en cohérence des travaux en sciences sociales et humaines dans les champs des violences extrêmes </li>
                <li>Discussions juridiques à travers des thèmes cités dans la brochure </li>
              </ul>
            </div>
            
            <div className={styles.contactInfo}>
              <h3>Contactez-nous</h3>
              <p>
                Pour soumettre votre proposition au comité scientifique mis en place à cet effet ou pour plus d'informations  :
              </p>
              <a href="mailto:colloquegenodderdc-2025@fonarev.cd" className={styles.emailLink}>
                colloquegenociderdc-2025@fonarev.cd
              </a>
            </div>
            
            <div className={styles.languageToggle}>
              <button 
                className={language === 'french' ? styles.active : ''}
                onClick={() => setLanguage('french')}
              >
                Version française
              </button>
              <button 
                className={language === 'english' ? styles.active : ''}
                onClick={() => setLanguage('english')}
              >
                English version
              </button>
            </div>

            <button 
              className={styles.downloadButton}
              onClick={handleDownload}
            >
              Télécharger l'appel à contributions ({language === 'french' ? 'FR' : 'EN'})
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Appel;
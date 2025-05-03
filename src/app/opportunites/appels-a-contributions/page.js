import React, { Suspense } from 'react';
import styles from "./style.module.scss";
import Head from 'next/head'; 
import { Script } from 'next/script';
import Image from 'next/image';

const Appel = () => {
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
          <h1>Colloque International sur la Reconnaissance des Génocides en RDC</h1>
          <p>Appel à contributions - Soumettez vos propositions au plus tard le 31 mai 2025</p>
        </section>
        
        <section className={styles.colloqueContainer}>
          <div className={styles.flyerContainer}>
            {/* Remplacez par votre image réelle */}
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
              <strong>LA CIAVAR</strong> et le <strong>FONAREV</strong> co-organisent un colloque international 
              sur la reconnaissance internationale des génocides commis sur le territoire 
              de la République Démocratique du Congo.
            </p>
            
            <div className={styles.highlightBox}>
              <h3>Comment contribuer ?</h3>
              <p>
                Nous invitons chercheurs, experts et acteurs de la société civile à soumettre 
                leurs contributions pour cet important colloque international.
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
                Pour soumettre votre proposition ou pour plus d'informations :
              </p>
              <a href="mailto:colloquegenodderdc-2025@fonarev.cd" className={styles.emailLink}>
                colloquegenociderdc-2025@fonarev.cd
              </a>
            </div>
            
            <div className={styles.languageToggle}>
              <button className={styles.active}>Version française</button>
              <button>English version</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Appel;
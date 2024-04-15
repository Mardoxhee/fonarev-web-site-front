"use client"
import { MissionCard } from '@/components/missionCard'
import styles from './style.module.scss'
import TeamCard from "../../components/teamCard"
import ValeurCard from '../../components/valeurCard'
import Banner from '../../components/banner'
import Head from 'next/head'; 
import Script from 'next/script';
import React from 'react'

const About = () => {
  return (
    <>
    <Head> 
    <title>Fonarev rdc | A propos du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
    </Head>
    <main className={styles.main}>
      <Banner pageTitle="A propos du Fonarev" background="/fonarev-about.jpeg"/>

        <section className={styles.about} id="about">
            <div className={styles.imageContainer}>

            </div>
            <div className={styles.txtSide}>
                <h2>Cadre légal</h2>
                <p>
                    Le FONAREV est un établissement public à caractère technique, financier et social, doté d’une personnalité juridique, qui jouit d’une autonomie financière et de gestion. Il est sous la tutelle du Ministère ayant les droits humains dans ses attributions.
                    Les textes légaux régissant le FONAREV sont :
                </p>
                <ul>
                    <li>
                        Décret n°22/038 du 06 décembre 2022 fixant les statuts d’un Etablissement public dénommé Fonds National des Réparations des Victimes de Violences Sexuelles liées aux conflits et d’autres crimes contre la paix et la sécurité de l’humanité, FONAREV en sigle.
                    </li>
                    <li>
                        Loi n°22/065 du 26 décembre 2022 fixant les principes fondamentaux relatifs à la protection et à la réparation des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l’humanité ;
                    </li>
                    <li>
                        Décret n°23/20 du 09 juin 2023 modifiant et complétant le décret n°22/038 mentionné ci-haut.
                    </li>
                </ul>

             
             
            </div>
        </section>

        <section className={styles.story} id="story">
            <div className={styles.txtSide}>
                <h2>Notre Vision</h2>
                <ul>
                    <li>
                        Assurer la vision humaniste du chef de l’Etat pour la prise en charge des victimes Les victimes au centre de toutes les actions et préoccupations
                    </li>
                    <li>
                        Bonne gouvernance : Transparence et Intégrité financière
                    </li>
                    <li>
                        Implication et engagement avec abnégation de l’ensemble du personnel
                    </li>
                    <li>
                        Devenir une structure de référence en Afrique et dans le monde en matière des réparations des victimes
                    </li>

                </ul>
          
            </div>
            <div className={styles.imageContaine2}>

            </div>
        </section>

        <section className = {styles.mision} id="mission">
            <h2>Les missions du Fonarev</h2>
            <div className = {styles.cardWrapper}>
          
                <ValeurCard text = "Allouer des réparations aux victimes" icone = "material-symbols:home-repair-service-outline-rounded"/>
                <ValeurCard text = "Aider les victimes à avoir accès à la justice" icone = "healthicons:justice-outline"/>
                <ValeurCard text = "Identifier les victimes" icone = "solar:user-id-broken"/>
                <ValeurCard text = "Aider les victimes à être indemnisées et à recouvrer les dommages intérêts leur alloués" icone = "solar:hand-money-outline"/>
                <ValeurCard text = "Aider les victimes à bénéficier gratuitement d'un accompagnement et d'une assistance judiciaire appropriés" icone = "healthicons:justice-outline"/> 
            </div>
        </section>

        {/* <section className={styles.valeurs} id="valeur">
            <div className={styles.textSide}>
                <h2>Les valeurs <span>du Fonarev</span></h2>
                <div className={styles.valeursFlexer}> 
                    <div>
                        <h4>
                            Valeur 1
                        </h4>
                        <p>
                            loremlorem lorem lorem loremloremlorem 
                            lorem lorem lorem lorem lorem lorem lorem
                        </p>
                    </div>
                    <div>
                        <h4>
                            Valeur 2
                        </h4>
                        <p>
                            loremlorem lorem lorem loremloremlorem 
                            lorem lorem lorem lorem lorem lorem lorem
                        </p>
                    </div>
                    <div>
                        <h4>
                            Valeur 3
                        </h4>
                        <p>
                            loremlorem lorem lorem loremloremlorem 
                            lorem lorem lorem lorem lorem lorem lorem
                        </p>
                    </div>
                    <div>
                        <h4>
                            Valeur 4
                        </h4>
                        <p>
                            loremlorem lorem lorem loremloremlorem 
                            lorem lorem lorem lorem lorem lorem lorem
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>

            </div>
        </section> */}

        <section className={styles.team} id="team">
            <h2>Notre équipe dirigeante</h2>
            <div className={styles.teamContainer}>
                <TeamCard bg="pca3.jpg" prenom="Eddy" nom="MBANZU" postnom="DIEKUZEIKO" fonction="Président du Conseil d’Administration" />
                <TeamCard bg="dg.jpg" prenom="Lucien" nom="LUNDULA" postnom="LOLATUI" fonction="Directeur Général"  />
                <TeamCard bg="dga_k.jpg" prenom="Kevin" nom="NGUNGA" postnom="MAKIEDI" fonction = "Directeur Général Adjoint en charge de l'administration et des finances" />
                <TeamCard bg="dga-emma-2.jpg" prenom="Emmanuella" nom="ZANDI" postnom=" " fonction ="Directeur Général Adjoint en charge des opérations" />
            </div>
        </section>

    </main>
    </>
  )
}

export default About
"use client"
import { MissionCard } from '@/components/missionCard'
import styles from './style.module.scss'
import TeamCard from "./../../components/teamCard"

import React from 'react'

const About = () => {
  return (
    <main className={styles.main}>
        <section className = {styles.banner}>
                <div>
                    <h1>A propos du <span>fonarev</span></h1>
                </div>
        </section>

        <section className={styles.about}>
            <div className={styles.imageContainer}>

            </div>
            <div className={styles.txtSide}>
                <h2>Qui sommes nous</h2>
                <p>
                    Le Fonds National des Réparations des Victimes de violences sexuelles 
                    liées aux conflits et d'autres crimes contre la paix et la sécurité de l'  humanité. 
                    FONAREV en sigle est un établissement public institué par la loi n°22/65 
                    du 26 décembre 2022 portant principes fondamentaux relatifs à la protection
                    et à la réparation des victimes de violences sexuelles liées aux conflits 
                    et des victimes de crimes contre la paix et la sécurité de l'humanité et 
                    le décret ∂38 du 06 décembre 2022 fixant les statuts d'un établissement 
                    public dénommé Fonds National des Réparations des Victimes de violences sexuelles 
                    liées aux conflits et d'autres crimes contre la paix et la sécurité de l'
                    humanité. il a son siège social à Kinshasa et exerce ses activités sur toute l'étendue 
                    du territoire national. le FONAREV est placé sous tutelle du ministère ayant les droits 
                    humains dans ses attributions.
                </p>
            </div>
        </section>

        <section className={styles.story}>
            <div className={styles.txtSide}>
                <h2>Notre histoire</h2>
                <p>
                    Le Fonds National des Réparations des Victimes de violences sexuelles 
                    liées aux conflits et d'autres crimes contre la paix et la sécurité de l'  humanité. 
                    FONAREV en sigle est un établissement public institué par la loi n°22/65 
                    du 26 décembre 2022 portant principes fondamentaux relatifs à la protection
                    et à la réparation des victimes de violences sexuelles liées aux conflits 
                    et des victimes de crimes contre la paix et la sécurité de l'humanité et 
                    le décret n°22/38 du 06 décembre 2022 fixant les statuts d'un établissement 
                    public dénommé Fonds National des Réparations des Victimes de violences sexuelles 
                    liées aux conflits et d'autres crimes contre la paix et la sécurité de l'
                    humanité. il a son siège social à Kinshasa et exerce ses activités sur toute l'étendue 
                    du territoire national. le FONAREV est placé sous tutelle du ministère ayant les droits 
                    humains dans ses attributions.
                </p>
            </div>
            <div className={styles.imageContainer}>

            </div>
        </section>

        <section className = {styles.mision}>
            <h2>Les missions <span>du Fonarev</span></h2>
            <div className = {styles.cardWrapper}>
                <MissionCard text = "Allouer des réparations aux victimes" icone = "material-symbols:home-repair-service-outline-rounded"/>
                <MissionCard text = "Aider les victimes à avoir accès à la justice" icone = "healthicons:justice-outline"/>
                <MissionCard text = "Identifier les victimes" icone = "solar:user-id-broken"/>
                <MissionCard text = "Aider les victimes à être indemnisées et à recouvrer les dommages intérêts leur alloués" icone = "solar:hand-money-outline"/>
                <MissionCard text = "Aider les victimes à bénéficier gratuitement d'un accompagnement et d'une assistance judiciaire appropriés" icone = "healthicons:justice-outline"/>
            </div>
        </section>

        <section className={styles.valeurs}>
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
        </section>

        <section className={styles.team}>
            <h2>Notre équipe dirigeante</h2>
            <div className={styles.teamContainer}>
                <TeamCard bg="https://res.cloudinary.com/yudingplatform/image/upload/v1709200783/wgbhfbehpc96rt2if8di.jpg" prenom="Eddy" nom="MBANZU" postnom="DIEKUZEIKO" />
                <TeamCard bg="https://res.cloudinary.com/yudingplatform/image/upload/v1709200783/wgbhfbehpc96rt2if8di.jpg" prenom="Lucien" nom="LUNDULA" postnom="LOLATUI"  />
                <TeamCard bg="https://res.cloudinary.com/yudingplatform/image/upload/v1709200783/wgbhfbehpc96rt2if8di.jpg" prenom="Kevin" nom="NGUNGA" postnom="MAKIEDI" />
                <TeamCard bg="https://res.cloudinary.com/yudingplatform/image/upload/v1709200783/wgbhfbehpc96rt2if8di.jpg" prenom="Lucien" nom="ZANDI" postnom="          "/>
            </div>
        </section>

    </main>
  )
}

export default About
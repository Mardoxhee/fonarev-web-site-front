"use client"
import { MissionCard } from '@/components/missionCard'
import styles from './style.module.scss'
import TeamCard from "../../components/teamCard"
import ValeurCard from '../../components/valeurCard'
import Banner from '../../components/banner'
import Head from 'next/head'; 
import Script from 'next/script';
import React from 'react'
import Image from "next/image"

const About = () => {
  return (
    <>
    <Head> 
        {/* Open Graph Meta Tags for Social Media */}

    <title>Fonarev rdc | A propos du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
    </Head>
    <main className={styles.main}>
      <Banner pageTitle="A propos du Fonarev" background="/fonarev-about.jpg"/>

        <section className={styles.litterature}>
                <p>
                Depuis plusieurs décennies, la République Démocratique du Congo est le théâtre de conflits armés où les populations civiles subissent de graves violations des droits de l'homme, y compris des violences sexuelles. Les victimes, souvent anonymes et marginalisées, manquent de mécanismes adéquats pour accéder à la justice et obtenir réparation.
                Face à cette situation, après plusieurs étapes et le lobbying de <strong>la Distinguée Première Dame Denise Nyakeru Tshisekedi</strong>, la RDC a adopté une loi le 26 décembre 2022 portant la création du Fonds National des Réparations des Victimes des Violences Sexuelles liés aux Conflits et des Victimes des Crimes contre la paix et la sécurité de l'humanité, FONAREV en sigle.
                Inauguré officiellement le 2 août 2023 lors de la commémoration du Genocost, le FONAREV a été établi par la loi n°22/065 du 26 décembre 2022 qui définît les principes fondamentaux relatifs à la protection et à la réparation des victimes de violences. Le décret n°22/38 du 6 décembre 2022 fixe quant à lui les statuts de cet établissement public.
                Cette législation historique énonce les principes essentiels de la protection et de la réparation des victimes de violences sexuelles liées aux conflits, ainsi que des crimes contre la paix et la sécurité de l'humanité en RDC, remontant jusqu'à l'année 1993.

                </p>
        </section>

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
                <p className={styles.visionClass}>
                    Œuvrer pour le relèvement des victimes et la non répétition des violences pour bâtir une paix durable.
                </p>
          
            </div>
            <div className={styles.imageContaine2}>

            </div>
        </section>

        <section className = {styles.mision} id="mission">
            <h2>Les missions du Fonarev</h2>
            <p>Les missions du FONAREV sont nombreuses et essentielles pour répondre aux besoins des victimes des violences sexuelles et des crimes contre l’humanité en RDC. 
            Elles comprennent :</p>
            <div className = {styles.cardWrapper}>
                <ValeurCard text = "Identifier les victimes" icone = "solar:user-id-broken"/>
                <ValeurCard text = "Aider les victimes à avoir accès à la justice" icone = "healthicons:justice-outline"/>
                <ValeurCard text = "Allouer les réparations aux victimes" icone = "solar:hand-money-outline"/>
            </div>
        </section>

        <section className={styles.valeurs} id="valeur">
            <div className={styles.textSide}>
                <h2>Les valeurs <span>du Fonarev</span></h2>
                <div className={styles.valeursFlexer}> 
                    <div>
                        <h4>
                            Dignité Humaine
                        </h4>
                        <p>
                            Reconnaître et restaurer la valeur intrinsèque de chaque victime de violences sexuelles liées aux conflits.
                        </p>
                    </div>
                    <div>
                        <h4>
                            Intégrité
                        </h4>
                        <p>
                            Implique un engagement indé- fectible à des principes moraux élevés, à la transparence et à l'honnêteté dans toutes ses actions.
                        </p>
                    </div>
                    <div>
                        <h4>
                        Respect
                        </h4>
                        <p>
                        Traiter chaque victime de violences sexuelles avec une sensibilité et une considération profonde, en reconnaissant la gravité de leurs expériences et en valorisant leurs témoi- gnages.
                        </p>
                    </div>
    
                </div>
            </div>
            <div className={styles.rightSide}>

            </div>
        </section> 

        <section className={styles.genocost} id="genocost">
            <div className={styles.imageContainer}>
                <Image src="/genocost1.jpg" width={500} height={350}/>
                <Image src="/genocost2.jpg" width={500} height={350}/>
            </div>
     
            <div >
                <h2>Genocost</h2>
                <p>Le terme "Geno-cost" signifie « génocide pour des gains économiques ». C'est une combinaison des mots
                    "génocide" et "coût", expliquant ainsi la nature économique du génocide en RDC. Dans l'histoire du génocide en République Démocratique du Congo, les conflits actuels, qui ont coûté la vie à plus de six millions de personnes, ne sont pas les premiers du genre. Selon des historiens comme Adam Hochschild et Isidore Ndaywel è Nziem, pendant le règne colonial du roi Léopold Il (1885-1908), environ 10 à 13 millions de Congolais ont été tués en raison de l'exploitation brutale du caoutchouc et d'autres ressources naturelles. Ce nombre de morts représentait environ la moitié de la population indigène du Congo.
                    Pourtant, très peu de Congolais connaissent cette partie de leur histoire.</p> <p className={styles.paragraph}> Elle a été soigneusement retirée des programmes scolaires, remplacée par des récits glorifiant "un Roi bâtisseur", souvent présenté comme un Noko (un oncle de la nation). Plus d'un siècle plus tard, l'histoire se répète. Des millions de Congolais paient à nouveau de leur vie à cause de l'exploitation du coltan, de l'or et d'autres ressources naturelles. Bien que de plus en plus de personnes aient accès à l'Internet et aux moyens de communication modernes, on en sait très peu sur ce conflit, un conflit alimenté par la demande mondiale de l'électronique.
                    Les massacres systématiques et planifiés des Bantous de la RDC par les Tutsis du Rwanda, de l'Ouganda et du Burundi constituent bel et bien un génocide qui doit être reconnu comme tel. Les massacres en RDC, souvent motivés par des gains économiques sous le terme de "Geno-cost", ne doivent pas être oubliés.</p>  <p className={styles.paragraph}> La reconnaissance officielle et les actions de réparation sont des étapes essentielles pour empêcher la répétition de ces tragédies et pour honorer la mémoire des millions de victimes.
                    Depuis 2023, année de sa première commémoration, La cérémonie du "GENOCOST" s'est imposée comme un évènement d'ampleur nationale, touchant profondément le cœur de nombreuses villes et localités à travers la République Démocratique du Congo, voire même à l'étranger, où dans de nombreuses grandes villes à l'instar de Paris, Bruxelles ou Londres, la diaspora congolaise organise des commémorations. 
                </p>
            </div>
        </section>

        <section className={styles.team} id="team">
            <h2>Notre équipe dirigeante</h2>
            <div className={styles.teamContainer}>
                <TeamCard bg="pca3.jpg" prenom="Eddy" nom="MBANZU" postnom="DIEKUZEIKO" fonction="Président du Conseil d’Administration" />
                <TeamCard bg="dgpatrick.jpg" prenom="Patrick" nom="FATA" postnom="MAKUNGA" fonction="Directeur Général"  />
                <TeamCard bg="dga_k.jpg" prenom="Kevin" nom="NGUNGA" postnom="MAKIEDI" fonction = "Directeur Général Adjoint en charge de l'administration et des finances" />
                <TeamCard bg="dga-emma-2.jpg" prenom="Emmanuella" nom="ZANDI" postnom=" " fonction ="Directeur Général Adjoint en charge des opérations" />
            </div>
        </section>

    </main>
    </>
  )
}

export default About

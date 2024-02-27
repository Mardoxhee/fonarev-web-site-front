"use client"
import styles from './id.module.scss'
import React from 'react'
import Image from 'next/image'
import Thumbnails from './../../../../public/bg-actu.jpg'
import ImgContent from './../../../../public/img-content.jpg'
import { Icon } from '@iconify/react';
import ArchiveCard from '@/components/sideCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Details = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <Image src={ImgContent} alt= "image illustratif"/>,
        <Image src={ImgContent} alt= "image illustratif"/>,
        <Image src={Thumbnails} alt= "image illustratif"/>
    ];





  return (
    <main className={styles.main}>
        <section className={styles.postDetails}> 
            <h1>Distribution des kits de survi aux deplacés de Kanyaruchinya</h1>
            <Image src={Thumbnails} alt = "descente terrain DG fonarev"/>
            <p className={styles.metadata}>Par Japhet Bula Bula </p>
            <p className={styles.metadata}>Publié le 14 Février 2024 - 10h 30</p>
            <div className={styles.ctaContainer}>
                <button> <Icon icon="majesticons:share-line" className={styles.icone} /> <span>Partager l'article</span> </button>
                <button> <Icon icon="et:chat" className={styles.icone} /> Laisser un commentaire</button>
            </div>
            <h2>Le Parlement doit légiférer ce jeudi 15 février, 
                en faveur du mariage pour les couples de même sexe. 
                C'est le parti conservateur au pouvoir, qui porte ce projet de loi. 
                Selon le gouvernement grec, cette loi mettra fin à une injustice 
                vielle de plusieurs années.
            </h2>
            <p className = {styles.textContent}>
                Cette loi marque une avancée pour les droits de la communauté LGBT notamment 
                pour les parents ayant fait le choix de recourir à une gestation pour autrui.
                Selon la loi grecque, un enfant peut être de père inconnu, mais pas de mère inconnue. 
                Ce qui est un obstacle majeur dans la vie de parents homosexuels. <br/>

                Angelo Michaelides est papa de deux petites filles nées aux Etats-Unis d'une mère porteuse, 
                ce médecin, qui vit à Athènes est impatient que cette loi soit promulguée.<br/>

                "Dès que la loi sera votée, j'inscrirai mes enfants à l'état civil. Ainsi, elles seront visibles 
                pour l'Etat. Elles auront un numéro de sécurité sociale et des soins médicaux gratuits, comme tous 
                les enfants. Je serai plus serein et je n'aurai plus à travailler du matin au soir pour pouvoir payer 
                leur école privée. Mes filles pourront aller dans une école publique".
            </p>
            <div className={styles.imgCaroussel} id = "imgCaroussel">
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={{
                    0: { items: 1 },
                    568: { items: 2 },
                    1024: { items: 3 }, // Show 3 items on screens wider than 1024 pixels
                  }}
                  autoWidth
                  animationType="slide"
                  autoPlay
                  autoPlayInterval={3000} 
                  controlsStrategy="alternate"
                  keyboardNavigation = {true}
            />
                    </div>
 
            <p className= {styles.textContent} >
                Cependant Plusieurs députés émettent des réserves sur l’adoption 
                par les couples de même sexe. En Grèce, des manifestations ont 
                eu lieu pour protester contre le mariage des couples de même sexe.
                Pour Lina Papadopoulou, professeure de droit constitutionnel à 
                l'université Aristote de Thessalonique, cette loi est une avancée 
                pour les enfants, jusque-là ignorés par l'Etat.<br/>

                "Beaucoup d'enfants grandissent avec deux pères ou deux mères. Ces enfants,
                à la maison, lorsqu'ils sortent se promener, lorsqu'ils jouent au basket-ball, 
                lorsqu'ils vont à l'hôpital, ont leurs deux mères à leurs côtés. Pourtant, l'État 
                vient leur enlever leur mère, les prive d'elle, la retire de leurs documents et 
                leur dit qu'ils n'ont pas de deuxième mère. Pourtant, les enfants savent qu'ils ont 
                une deuxième mère. L'important, c'est qu'à partir de maintenant, les enfants ne 
                soient plus privés de leur deuxième parent à cause de la politique de l'État".<br/>

                Néanmoins, cette loi divise la société grecque, les partis d'extrême droite et l'église 
                orthodoxe y sont fermement opposés.
            </p>
            <div className={styles.ctaContainer}>
                <button>Partager l'article</button>
                <button>Laisser un commentaire</button>
            </div>
        </section>
        <section className={styles.sideBar}> 
            <div className={styles.pub}></div>
            <div className={styles.cardContainer}>
                <h2>A la une</h2>
                <ArchiveCard  />
                <ArchiveCard  />
                <ArchiveCard  />
            </div>
            <div className={styles.pub}></div>
        </section>
    </main>
  )
}

export default Details
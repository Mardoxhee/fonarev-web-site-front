import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import HeroImage from './../../../public/aboutcover.JPG'
import EventOne from './../../../public/1.jpg'
import EventTwo from './../../../public/2.jpg'
import EventThree from './../../../public/3.jpg'
import EventFour from './../../../public/4.jpg'
import EventFive from './../../../public/5.jpg'
import EventSix from './../../../public/6.jpg'

const images = [
  { src: EventOne, title: 'Visuel de mobilisation 1' },
  { src: EventTwo, title: 'Visuel de mobilisation 2' },
  { src: EventThree, title: 'Visuel de mobilisation 3' },
  { src: EventFour, title: 'Visuel de mobilisation 4' },
  { src: EventFive, title: 'Visuel de mobilisation 5' },
  { src: EventSix, title: 'Visuel de mobilisation 6' },
]

const Petition = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src={HeroImage} alt="Communautés accompagnées dans le cadre de la réparation" fill priority />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroKicker}>
            <span>Pétition nationale</span>
            <small>Mémoire · Justice · Réparation</small>
          </div>
          <h1>Une voix collective pour que les victimes ne soient plus invisibles</h1>
          <div className={styles.heroBottom}>
            <p>
              Soutenir cette pétition, c’est porter une exigence simple : reconnaître les souffrances,
              préserver la mémoire et renforcer les efforts de réparation en RDC.
            </p>
            <a href="#signature" className={styles.heroCta}>Signer la pétition</a>
          </div>
        </div>
        <div className={styles.heroMarkers}>
          <strong>01</strong>
          <span>Reconnaître</span>
          <strong>02</strong>
          <span>Réparer</span>
          <strong>03</strong>
          <span>Transmettre</span>
        </div>
      </section>

      <section id="petition" className={styles.petition}>
        <div className={styles.petitionHeader}>
          <span>Notre appel</span>
          <h2>Une signature pour refuser l’oubli</h2>
        </div>
        <div className={styles.petitionContent}>
          <p>
            Nous appelons toutes les personnes éprises de paix, de dignité humaine et de justice à
            soutenir cette démarche citoyenne en faveur des victimes de violences sexuelles liées aux
            conflits et des victimes des crimes contre la paix et la sécurité de l’humanité.
          </p>
          <p>
            À travers les rencontres, les actions de proximité et les moments de mobilisation, cette
            pétition rappelle l’urgence de préserver la mémoire, de reconnaître les souffrances subies
            et d’accompagner les efforts de réparation.
          </p>
          <p>
            Signer cette pétition, c’est contribuer à porter une exigence collective : que les victimes
            soient entendues, que leur dignité soit restaurée et que la mémoire de ces tragédies demeure
            vivante dans la conscience nationale.
          </p>
        </div>
      </section>

      <section id="signature" className={styles.signatureCta}>
        <div>
          <span>Passer à l’action</span>
          <h2>Signez la pétition et portez la voix des victimes</h2>
          <p>
            Le lien de signature sera activé prochainement. Cette page prépare déjà l’appel public à
            la mobilisation.
          </p>
        </div>
        <a href="#" aria-disabled="true">Signer la pétition</a>
      </section>

      <section className={styles.memory}>
        <div className={styles.memoryIntro}>
          <span>Moments de mobilisation</span>
          <h2>Une mémoire portée par les communautés</h2>
        </div>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <figure className={`${styles.card} ${styles[`card${index + 1}`]}`} key={image.title}>
              <Image src={image.src} alt={image.title} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Petition

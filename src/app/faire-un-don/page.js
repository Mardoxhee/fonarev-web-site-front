import React from 'react'
import styles from './don.module.scss'
import Banner from './../../components/banner'

const Don = () => {
  return (
    <main className={styles.mainContainer}>
        <section>
                <Banner pageTitle="FAIRE UN DON" exerpt="lorem lorem lorem lorem lorem lorem" background="/caroussel-item-1.jpg"/>
        </section>
        <section className={styles.titleContainer}>
            <h3>Faire un don</h3>
            <h2>Merci pour votre soutien à nos victimes</h2>
            <p>Ensemble, nous accomplissons plus que n'importe quel autre personne ne pourrait jamais le faire seule.</p>
        </section>

       <section className={styles.formContainer}>
            <h3>Votre don</h3>
            <form>
                <div className={styles.inputContainer}>
                    <label>Votre prénom</label>
                    <input/>
                </div>
                <div className={styles.inputContainer}>
                    <label>Votre nom</label>
                    <input/>
                </div>
                <div className={styles.inputContainer}>
                    <label>Votre téléphone</label>
                    <input/>
                </div>
                <div className={styles.inputContainer}>
                    <label>Votre adresse</label>
                    <input/>
                </div>
              
            </form>
       </section>
    </main>
  )
}

export default Don
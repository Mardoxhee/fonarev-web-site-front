import React from 'react'
import styles from './contact.module.scss'
import Banner from './../../components/banner'
import Head from 'next/head'; 

const page = () => {
  return (
    <>
    <Head> 
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W41SHGX1J0"/>
     <Script
       dangerouslySetInnerHTML={{
         __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments)}
           gtag('js', new Date());
           gtag('config', 'G-W41SHGX1J0');
         `,
       }}
      />
    <title>Fonarev rdc | Actualités du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
     
    </Head>
    <main className={styles.main}>
       <Banner pageTitle ="Nous contacter" background="/contact.jpeg"/>
        <section className={styles.contact}>
              <div className={styles.textContent}>
                  <h3>Notre siège social</h3>
                  <p>Avenue Colonel Ebeya 3498,
                  Q/ Golf, C/ Gombe</p>
                  <h3 className={styles.horaire}>Notre horaire de travail</h3>
                  <p>Lundi : 8h30 - 16H30</p>
                  <p>Mardi : 8h30 - 16H30</p>
                  <p>Mercredi : 8h30 - 16H30</p>
                  <p>Jeudi : 8h30 - 16H30</p>
                  <p>Vendredi : 8h30 - 16H30</p>
              </div>
              <div className={styles.formContainer}>
                <h3>Vous avez une préoccupation, une suggestion, un feedback, Entrez directement en contact notre équipe.</h3>
                  <form>
                      <div className={styles.inputFlexer}>
                          <input type='text' placeholder='Votre nom'/>
                          <input type='text' placeholder='Votre prénom'/>
                      </div>
                      <div className={styles.inputFlexer}>
                          <input type='text' placeholder='Adresse mail'/>
                          <input type='text' placeholder='Objet'/>
                      </div>
                      <div className={styles.inputFlexer}>
                         <textarea/>
                      </div>
                      <button>Envoyer</button>
                  </form>

              </div>
        </section>
        <section className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.276706262865!2d15.304852154603012!3d-4.306526529254505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33f3dd71f221%3A0x6463848afe7e4f2e!2sHotel%20Selton%20(Kinshasa)!5e0!3m2!1sfr!2scd!4v1710205525847!5m2!1sfr!2scd" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>
    </>
  )
}

export default page
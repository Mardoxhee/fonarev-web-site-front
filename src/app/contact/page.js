import React from 'react'
import styles from './contact.module.scss'

const page = () => {
  return (
    <main className={styles.main}>
        <section className={styles.banner}>
          <h2>Nous contacter</h2>
          <p>lorem lorem lorem lorem lorem</p>
        </section>
        <section className={styles.contact}>
              <div className={styles.textContent}></div>
              <div className={styles.formContainer}>
                <h3>Nous laisser un mot, un feedback, ...</h3>
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
        <section>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.276706262865!2d15.304852154603012!3d-4.306526529254505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33f3dd71f221%3A0x6463848afe7e4f2e!2sHotel%20Selton%20(Kinshasa)!5e0!3m2!1sfr!2scd!4v1710205525847!5m2!1sfr!2scd" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>
  )
}

export default page
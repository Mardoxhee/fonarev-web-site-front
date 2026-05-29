"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import { Icon } from "@iconify/react";
import styles from "./contact.module.scss";

const contactCards = [
  {
    icon: "solar:map-point-wave-bold",
    title: "Adresse d'accueil",
    lines: ["Avenue Lukusa 26", "Q/Gare, C/Gombe"],
  },
  {
    icon: "solar:clock-circle-bold",
    title: "Horaires de travail",
    lines: ["Lundi - Vendredi", "8h00 - 16h30"],
  },
  {
    icon: "solar:dialog-bold",
    title: "Écoute et orientation",
    lines: ["Préoccupations, suggestions", "et demandes d'information"],
  },
];

const weekdays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
];

const ContactPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-contact-reveal]");

    elements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 85, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>FONAREV RDC | Contact</title>
        <meta
          name="description"
          content="Contactez le Fonds national des réparations des victimes, FONAREV RDC."
        />
        <meta
          name="keywords"
          content="FONAREV, contact FONAREV, victimes, réparations, RDC, Gombe, Kinshasa"
        />
        <meta
          name="google-site-verification"
          content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent} data-contact-reveal>
            <span className={styles.eyebrow}>Contact</span>
            <h1>Parlons de réparation, d'écoute et d'orientation.</h1>
            <p>
              Le FONAREV reste disponible pour recevoir vos préoccupations, vos
              suggestions et les demandes liées à sa mission nationale.
            </p>
            <a href="#formulaire-contact" className={styles.heroButton}>
              Écrire au FONAREV
              <Icon icon="solar:arrow-down-linear" />
            </a>
          </div>
        </section>

        <section className={styles.contactGrid}>
          <div className={styles.infoColumn}>
            <div className={styles.sectionIntro} data-contact-reveal>
              <span className={styles.eyebrow}>Nous joindre</span>
              <h2>Une présence d'accueil claire et accessible.</h2>
              <p>
                Utilisez le formulaire pour transmettre votre message. Notre
                équipe prendra connaissance de votre demande et l'orientera vers
                le service concerné.
              </p>
            </div>

            <div className={styles.cardStack}>
              {contactCards.map((card) => (
                <article
                  className={styles.infoCard}
                  key={card.title}
                  data-contact-reveal
                >
                  <span className={styles.cardIcon}>
                    <Icon icon={card.icon} />
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.schedule} data-contact-reveal>
              <h3>Horaire de travail</h3>
              <div className={styles.scheduleRows}>
                {weekdays.map((day) => (
                  <div className={styles.scheduleRow} key={day}>
                    <span>{day}</span>
                    <strong>8h00 - 16h30</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section
            className={styles.formPanel}
            id="formulaire-contact"
            data-contact-reveal
            aria-labelledby="contact-form-title"
          >
            <span className={styles.eyebrow}>Votre message</span>
            <h2 id="contact-form-title">Entrez directement en contact avec notre équipe.</h2>
            <form>
              <div className={styles.formGrid}>
                <label className={styles.formGroup} data-contact-reveal>
                  <span>Nom</span>
                  <input type="text" name="nom" placeholder="Votre nom" />
                </label>
                <label className={styles.formGroup} data-contact-reveal>
                  <span>Prénom</span>
                  <input type="text" name="prenom" placeholder="Votre prénom" />
                </label>
                <label className={styles.formGroup} data-contact-reveal>
                  <span>Adresse mail</span>
                  <input type="email" name="email" placeholder="exemple@email.com" />
                </label>
                <label className={styles.formGroup} data-contact-reveal>
                  <span>Objet</span>
                  <input type="text" name="objet" placeholder="Objet du message" />
                </label>
                <label className={`${styles.formGroup} ${styles.fieldFull}`} data-contact-reveal>
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="Écrivez votre préoccupation, suggestion ou demande..."
                    rows="7"
                  />
                </label>
              </div>

              <button type="submit">
                Envoyer le message
                <Icon icon="solar:plain-bold" />
              </button>
            </form>
          </section>
        </section>

        <section className={styles.mapSection}>
          <div className={styles.mapHeader} data-contact-reveal>
            <span className={styles.eyebrow}>Localisation</span>
            <h2>Retrouvez le FONAREV à Gombe.</h2>
          </div>
          <div className={styles.mapFrame} data-contact-reveal>
            <iframe
              src="https://www.google.com/maps?q=Avenue%20Lukusa%2026%2C%20Q%2FGare%2C%20C%2FGombe%2C%20Kinshasa&output=embed"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              title="Localisation du FONAREV"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;

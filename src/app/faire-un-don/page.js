"use client";
import React, { useState } from "react";
import styles from "./don.module.scss";
import Banner from "./../../components/banner";
import { Icon } from "@iconify/react";

const Don = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <main className={styles.mainContainer}>
      <section>
        <Banner
          pageTitle="FAIRE UN DON"
          exerpt="Ensemble, nous accomplissons plus que n'importe quel autre personne ne
          pourrait jamais le faire seule"
          background="/caroussel-item-1.jpg"
        />
      </section>
      <section className={styles.titleContainer}>
        <h3>Faire un don</h3>
        <h2>Merci pour votre soutien à nos victimes</h2>

      </section>

      <section className={styles.formContainer}>
      <p>Nous sommes entrain de mettre en place un système efficace et sécurisé pour permettre aux personnes désireuses d'aider les victimes de faire leurs dons directement depuis notre site internet</p>

        {/* <h3>Votre don</h3>
        <form>
          <div className={styles.inputContainer}>
            <label>Votre prénom</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label>Votre nom</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label>Votre téléphone</label>
            <input type="tel" />
          </div>
          <div className={styles.inputContainer}>
            <label>Votre adresse</label>
            <input type="text" />
          </div>
          <div>
            <h3>Choisir un moyen de paiement</h3>

            <div className={styles.moyenDePaiement}>
              <div>
                <input
                  type="radio"
                  id="carteBancaire"
                  name="moyenPaiement"
                  value="carteBancaire"
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="carteBancaire">Carte bancaire</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mpesa"
                  name="moyenPaiement"
                  value="mpesa"
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="mpesa">Mpesa</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="orangeMoney"
                  name="moyenPaiement"
                  value="orangeMoney"
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="orangeMoney">Orange Money</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="airtelMoney"
                  name="moyenPaiement"
                  value="airtelMoney"
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="airtelMoney">Airtel Money</label>
              </div>
            </div>

            {selectedPaymentMethod === "carteBancaire" && (
              <div className={styles.paymentDetails}>
                <div className={styles.inputContainer}>
                  <label>Numéro de carte</label>
                  <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                  <label>Date d'expiration</label>
                  <input type="text" placeholder="MM/AA" />
                </div>
                <div className={styles.inputContainer}>
                  <label>Code CVV</label>
                  <input type="text" />
                </div>
              </div>
            )}

            {selectedPaymentMethod &&
              selectedPaymentMethod !== "carteBancaire" && (
                <div className={styles.inputContainer}>
                  <label>Numéro de téléphone</label>
                  <input type="tel" />
                </div>
              )}

            <button type="submit">
              <Icon icon="uiw:pay" className={styles.icone} /> Valider le
              paiement
            </button>
          </div>
        </form> */}
      </section>
    </main>
  );
};

export default Don;

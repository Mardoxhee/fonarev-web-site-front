"use client"
import React, { useState } from 'react';
import styles from './style.module.scss';
import Banner from './../../components/banner';
import GaleryMasonry from './../../components/GaleryMasonry';

const Galerie = () => {
  const [isInconstruction, setIsInConstruction] = useState(false);

  return (
    <main className={styles.main}>
      <Banner pageTitle="La galerie du Fonarev" background="/carou-bg.jpg" />
      <section className={styles.textContainer}>
        <h2>Page en construction</h2>
        <p>Revenez très bientôt !</p>
      </section>
      <section className={styles.masonContainer}>
        {isInconstruction ? (
          <GaleryMasonry />
        ) : (
          <p></p>
        )}
      </section>
    </main>
  );
};

export default Galerie;

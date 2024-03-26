"use client"
import React from 'react'
import styles from "./appelCard.module.scss"
import { Icon } from '@iconify/react';

const AppelCard = ({titre, expiration, reference, link, bigTitle, isAvis}) => {
  return (
    <div className={styles.cardCont}>
            <div className={styles.imgContainer}></div>
            <div className={styles.textSide}>
                <h3>{bigTitle} publié le 26 mars 2023</h3>
                <h2> {titre} </h2>
                <div className={styles.inContainer}>
                    <h4 className={styles.location}><Icon icon="zondicons:book-reference" className={styles.icone} /> {reference}</h4>
                    <div className={styles.ctaFlexer}>
                        <h4 className={styles.timeExp}><Icon icon="uim:calender" className={styles.icone} />{ isAvis === true ? "Date de publication"  : "Date d'expiration "} : {expiration}</h4>
                        <a href={link} download><Icon icon="ep:document" className={styles.icone} /> Télécharger le PDF</a>
                    </div>
                  
                </div>
            </div>
    </div>
  )
}

export default AppelCard
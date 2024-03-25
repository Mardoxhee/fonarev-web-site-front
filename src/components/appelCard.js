"use client"
import React from 'react'
import styles from "./appelCard.module.scss"
import { Icon } from '@iconify/react';

const AppelCard = () => {
  return (
    <div className={styles.cardCont}>
            <div className={styles.imgContainer}></div>
            <div className={styles.textSide}>

                <h2>Construction de 20 hopitaux lore lore lore lore lore lore lore lroe lorelorelorelorelorel</h2>
                <div className={styles.inContainer}>
                    <h4 className={styles.location}><Icon icon="ion:location-outline" className={styles.icone} /> Kinshasa</h4>
                    <div className={styles.ctaFlexer}>
                        <h4 className={styles.timeExp}><Icon icon="uim:calender" className={styles.icone} /> Date d'expiration  : Le 20 mars 2024</h4>
                        <button><Icon icon="ep:document" className={styles.icone} /> Télécharger le PDF</button>
                    </div>
                  
                </div>
            </div>
    </div>
  )
}

export default AppelCard
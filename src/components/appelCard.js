"use client"
import React from 'react'
import styles from "./appelCard.module.scss"
import { Icon } from '@iconify/react';

const AppelCard = ({titre, expiration, reference, link, bigTitle, isAvis, variant}) => {
  const isPPM = variant === "ppm";
  const isCompact = variant === "compact";
  return (
    <div className={`${styles.cardCont} ${isPPM ? styles.ppm : ''} ${isCompact ? styles.compact : ''}`}>
      {isPPM ? (
        <div className={styles.ppmCard}>
          <div className={styles.ppmTop}>
            <div className={styles.ppmTag}>
              <Icon icon="ep:document" className={styles.ppmIcon} />
              <span>PPM</span>
            </div>
          </div>
          <div className={styles.ppmMiddle}>
            <h2 className={styles.ppmTitle}>{titre}</h2>
            <p className={styles.ppmSub}>{expiration}</p>
          </div>
          <div className={styles.ppmBottom}>
            <a className={styles.ppmCta} href={link} download>
              <Icon icon="ep:document" className={styles.icone} />
              PDF
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.imgContainer}></div>
          <div className={styles.textSide}>
              <h3>{bigTitle} </h3> <br/>
             <h2 className={isAvis !== true ? styles.customH2 : ''}>{titre} </h2>
              <div className={styles.inContainer}>
                  <h4 className={styles.location}><Icon icon="zondicons:book-reference" className={styles.icone} /> {reference}</h4>
                  <div className={styles.ctaFlexer}>
                      <h4 className={styles.timeExp}><Icon icon="uim:calender" className={styles.icone} />{ isAvis !== true ? "Période"  : "Date de clôture "} : {expiration}</h4>
                      <a href={link} download><Icon icon="ep:document" className={styles.icone} /> Télécharger le PDF</a>
                  </div>
                
              </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AppelCard

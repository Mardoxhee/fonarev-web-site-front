import styles from'./side.module.scss'
import React from 'react'

const ArchiveCard = () => {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.imgContainer}></div>
        <div>
            <h3>CATEGORIE</h3>
            <h4>Match des légendes de FC Barcelone et des léopards de la RDC à l'honneur des victimes en RDC</h4>
        </div>
    </div>
  )
}

export default ArchiveCard
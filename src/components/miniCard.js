import styles from './minicard.module.scss'
import React from 'react'
import Link from 'next/link'


const MiniCard = ({titre, backgroundImage}) => {
  return (

    <div className={styles.cardWrapper}>
          <div className={styles.imgWrapper}  style={{ backgroundImage: `url(${backgroundImage})` }} >
              <h4>ACTUALITE</h4>
          </div>
          <h3>{titre}</h3>
      </div>
  )
}

export default MiniCard
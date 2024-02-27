import styles from './minicard.module.scss'
import React from 'react'
import Link from 'next/link'


const MiniCard = () => {
  return (
      <div className={styles.cardWrapper}>
          <div className={styles.imgWrapper} >
              <h4>ACTUALITE</h4>
          </div>
          <h3>Distribution des kits de survi aux deplacés de kanyaruchinya</h3>
      </div>
  )
}

export default MiniCard
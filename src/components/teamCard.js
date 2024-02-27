import styles from './team.module.scss'
import Image from 'next/image'
import Dga from './../../public/kevin-dga.jpg'

import React from 'react'

const TeamCard = () => {
  return (
    <div className={styles.teamCardContainer}>
        <div className={styles.imgContainer}>
        </div>
        <div className={styles.text}>
            <h3>Kevin NGUNGA MAKIEDI</h3>
            <h4>Directeur Général Adjoint en charge de l'administration et finance</h4>
        </div>
    </div>
  )
}

export default TeamCard
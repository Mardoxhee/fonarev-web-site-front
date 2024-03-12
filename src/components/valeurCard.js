import styles from './valeur.module.scss'
import { Icon } from '@iconify/react';
import React from 'react'

const ValeurCard = ({icone, text}) => {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.iconeContainer}>
            <Icon icon={icone} className={styles.icone} />
        </div>
        <div className={styles.textContainer}>
        <h4>
           {text}
        </h4>
        </div>

    </div>
  )
}

export default ValeurCard
"use client"
import styles from './mission.module.scss'
import { Icon } from '@iconify/react';

import React from 'react'

export const MissionCard = ({icone, text}) => {
  return (
    <div className={styles.cardContainer}>
        <Icon icon={icone} className={styles.icone} />
        <h4>
           {text}
        </h4>
    </div>
  )
}

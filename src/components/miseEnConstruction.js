"use client"
import styles from './miseEnConstruction.module.scss'
import { Icon } from '@iconify/react';

import React from 'react'

const MiseEnConstruction = ({ className = "" }) => {
  return (
        <div className={`${styles.main} ${className}`}>
                <div></div>
                <Icon icon="ic:outline-construction" className={styles.icone} />
                
                <h2>
                    Cette page est en construction
                </h2>
                <p>
                    En attendant, vous pouvez voir nos <a href= "/actualites">actualités </a>
                    ou encore nous laisser un message en cliquant <a href= "/contact">ici </a>
                </p>
        </div>
  )
}

export default MiseEnConstruction

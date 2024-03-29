"use client"
import styles from './miseEnConstruction.module.scss'
import { Icon } from '@iconify/react';

import React from 'react'

const MiseEnConstruction = () => {
  return (
        <div className={styles.main}>
                <div></div>
                <Icon icon="ic:outline-construction" className={styles.icone} />
                
                <h2>
                    Cette page est en constrcution
                </h2>
                <p>
                    Vous pouvez pendant en attendant  voir nos <a href= "/actualites">actualités </a>
                    ou encore nous laisser un message en clicquant <a href= "/contact">Ici </a>
                </p>
        </div>
  )
}

export default MiseEnConstruction
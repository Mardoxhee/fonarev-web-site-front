import styles from './team.module.scss'
import Image from 'next/image'


import React from 'react'

const TeamCard = ({nom, postnom, prenom, fonction, bg}) => {
  const defaultNom = '';
  const defaultPrenom = '';
  const defaultPostnom = '';

  const formattedPrenom = prenom ? prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase() : defaultPrenom;
  const formattedNom = nom ? nom.toUpperCase() : defaultNom;
  const formattedPostnom = postnom ? postnom.toUpperCase() : defaultPostnom;

  return (
    <div className={styles.teamCardContainer}>
        <div className={styles.imgContainer}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: 'center', // Default to center
              backgroundSize: 'cover', // Default to cover
            }}
        >
        </div>
        <div className={styles.text}>
        <h3>{formattedPrenom + ' ' + formattedNom + ' ' + formattedPostnom}</h3>
            <h4>{fonction}</h4>
        </div>
    </div>
  )
}

export default TeamCard
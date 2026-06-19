import styles from './team.module.scss'
import Image from 'next/image'


import React from 'react'

const TeamCard = ({nom, postnom, prenom, fonction, bg}) => {
  const defaultNom = '';
  const defaultPrenom = '';
  const defaultPostnom = '';
  const imageSrc = bg?.startsWith('/') ? bg : `/${bg}`;

  const formattedPrenom = prenom ? prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase() : defaultPrenom;
  const formattedNom = nom ? nom.toUpperCase() : defaultNom;
  const formattedPostnom = postnom ? postnom.toUpperCase() : defaultPostnom;
  const fullName = `${formattedPrenom} ${formattedNom} ${formattedPostnom}`.trim();

  return (
    <div className={styles.teamCardContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={imageSrc}
            alt={fullName}
            fill
            sizes="(max-width: 767px) 88vw, (max-width: 1180px) 42vw, 25vw"
          />
        </div>
        <div className={styles.text}>
          <h3>{fullName}</h3>
          <h4>{fonction}</h4>
        </div>
    </div>
  )
}

export default TeamCard

import styles from './side.module.scss';
import React from 'react';

const ArchiveCard = ({ category, titre, backgroundImageSrc }) => {
  return (
    <div className={styles.cardWrapper} >
      <div className={styles.imgContainer}
      style={{ 
        backgroundImage: `url(${backgroundImageSrc})`, 
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        
        }}
      ></div>
      <div className={styles.textCont}>
        <h3>{category}</h3>
        <h4>{titre}</h4>
      </div>
    </div>
  );
}

export default ArchiveCard;

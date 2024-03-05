import styles from './archive.module.scss';
import React from 'react';

const ArchiveCard = ({ className = styles.cardWrapper, titre, backgroundImage }) => {
  return (
    <div className={className}>
      <div className={styles.imgContainer} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className={styles.text}>
        <h3>ACTUALITE</h3>
        <h4>{titre}</h4>
      </div>
    </div>
  );
};

export default ArchiveCard;

"use client"
import React, { useState, useEffect } from 'react';
import styles from './side.module.scss';
import { getFileLink } from './../lib/Requests';

const ArchiveCard = ({ category, titre, backgroundImageSrc }) => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    if (backgroundImageSrc) {
      try {
        const link = await getFileLink(backgroundImageSrc);
        if (link ) {
          console.log("link test", link)
          setImageUrl(link);
        } else {
          console.error("No src found in link object", link);
          setImageUrl("default-fallback-image-url.png"); // Provide a fallback image URL
        }
      } catch (error) {
        console.error("Error fetching image link:", error);
        setImageUrl("default-fallback-image-url.png"); // Provide a fallback image URL
      }
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className={styles.cardWrapper} >
      <div className={styles.imgContainer}
      style={{ 
        backgroundImage: `url(${imageUrl})`,
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

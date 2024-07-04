"use client"
import React, { useState, useEffect } from 'react';
import styles from './actuCard.module.scss';
import { Icon } from '@iconify/react';
import { getFileLink } from './../lib/Requests';

const ActuCard = ({ title, bg, date, category, backgroundPosition, backgroundSize }) => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    if (bg) {
      try {
        console.log("Fetching image link for bg:", bg);
        const link = await getFileLink(bg);
        console.log("Fetched link:", link);
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

  const truncatedTitle = title.length > 70 ? `${title.substring(0, 60)}...` : title;

  return (
    <div className={styles.cardWrapper}>
      <div 
        className={styles.imgWrapper}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: backgroundPosition || 'center', // Default to center
          backgroundSize: backgroundSize || 'cover', // Default to cover
        }}
      ></div>
      <div className={styles.titleWrapper}>
        <h3>{truncatedTitle}</h3>
        
        <div className={styles.metaContainer}>
          <p>
            <Icon icon="formkit:time" className={styles.icone} />
            <span>{date}</span>
          </p>
          <h4>
            <Icon icon="bi:folder" className={styles.icone} />
            <span>{category}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ActuCard;

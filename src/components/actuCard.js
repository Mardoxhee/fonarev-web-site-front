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
        const link = await getFileLink(bg);
        if (link ) {
          console.log("link test", link)
          setImageUrl(link);
        } else {
          console.error("No src found in link object", link);
          setImageUrl("/placebo.jpg");
        }
      } catch (error) {
        console.error("Error fetching image link:", error);
        setImageUrl("/placebo.jpg");
      }
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const formatDate = (value) => {
    if (!value) return "Date non renseignée";

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) return value;

    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(parsedDate);
  };

  const truncatedTitle = title?.length > 86 ? `${title.substring(0, 78)}...` : title;

  return (
    <div className={styles.cardWrapper}>
      <div 
        className={styles.imgWrapper}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: backgroundPosition || 'center', // Default to center
          backgroundSize: backgroundSize || 'cover', // Default to cover
        }}
      >
        <span>{category || "Actualité"}</span>
      </div>
      <div className={styles.titleWrapper}>
        <h3>{truncatedTitle}</h3>
        
        <div className={styles.metaContainer}>
          <p>
            <Icon icon="formkit:time" className={styles.icone} />
            <span>{formatDate(date)}</span>
          </p>
          <h4>
            Lire
            <Icon icon="solar:arrow-right-linear" className={styles.icone} />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ActuCard;

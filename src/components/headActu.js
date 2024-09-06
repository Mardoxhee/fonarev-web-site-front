"use client";
import React, { useState, useEffect } from 'react';
import styles from './headActu.module.scss';
import { Icon } from '@iconify/react';
import { getFileLink } from './../lib/Requests';

const ActuCard = ({ title, bg, date, category, backgroundPosition, backgroundSize }) => {
  // Set the initial image URL to the placeholder image
  const [imageUrl, setImageUrl] = useState("/placebo.jpg"); // Default to placeholder image

  const fetchImage = async () => {
    if (bg) {
      try {
        const link = await getFileLink(bg);
        if (link) {
          console.log("link test", link);
          setImageUrl(link); // Update to the fetched image URL
        } else {
          console.error("No src found in link object", link);
          setImageUrl("/placebo.jpg"); // Provide a fallback image URL in case of error
        }
      } catch (error) {
        console.error("Error fetching image link:", error);
        setImageUrl("/placebo.jpg"); // Provide a fallback image URL in case of error
      }
    }
  };

  useEffect(() => {
    fetchImage();
  }, [bg]); // Include bg in dependency array to refetch if it changes

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
        {/* <div className={styles.metaContainer}>
          <p>
            <Icon icon="formkit:time" className={styles.icone} />
            <span>{date}</span>
          </p>
          <h4>
            <Icon icon="bi:folder" className={styles.icone} />
            <span>{category}</span>
          </h4>
        </div> */}
      </div>
    </div>
  );
};

export default ActuCard;

"use client"
import React, { useState, useEffect } from 'react';
import styles from './minicard.module.scss'
import Link from 'next/link'
import { getFileLink } from './../lib/Requests';


const MiniCard = ({titre, backgroundImage}) => {
  const [imageUrl, setImageUrl] = useState("");
  const fetchImage = async () => {
    if (backgroundImage) {

      try {
        const link = await getFileLink(backgroundImage);

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

    <div className={styles.cardWrapper}>
          <div className={styles.imgWrapper}  style={{ backgroundImage: `url(${imageUrl})` }} >
              <h4>ACTUALITE</h4>
          </div>
          <h3>{titre}</h3>
      </div>
  )
}

export default MiniCard
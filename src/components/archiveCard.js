
import styles from './archive.module.scss';
import React, {useState, useEffect} from 'react';
import { getFileLink } from './../lib/Requests';

const ArchiveCard = ({ className = styles.cardWrapper, titre, backgroundImage }) => {
  const [imageUrl, setImageUrl] = useState("");
  const fetchImage = async () => {
    if (backgroundImage) {
      try {
        const link = await getFileLink(backgroundImage);
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
  }, [backgroundImage]);
  return (
    <div className={className}>
      <div className={styles.imgContainer} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={styles.text}>
        <h3>FONAREV</h3>
        <h4>{titre}</h4>
      </div>
    </div>
  );
};

export default ArchiveCard;

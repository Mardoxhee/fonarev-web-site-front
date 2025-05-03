import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from '@/lib/motion';
import styles from './contrib.module.css';



const AppelCard= ({
  title = "Appel à Contributions",
  subtitle = "Colloque international",
  description = "LA CIAVAR et le FONAREV co-organisent un colloque international sur la reconnaissance internationale des génocides commis sur le territoire de la RDC",
  emailContact = "colloquegenociderdc-2025@fonarev.cd",
  imageSrc = "/images/appel-contributions.jpg",
  ctaLabelFr = "Version française",
  ctaLabelEn = "English version",
}) => {
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src={imageSrc} 
              alt="Appel à Contributions" 
              width={500} 
              height={600} 
              className={styles.image}
              priority
            />
          </div>
        </motion.div>

        <motion.div 
          className={styles.contentContainer}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          
          <p className={styles.description}>{description}</p>
          
          <div className={styles.contactInfo}>
            <p>Pour participer, contactez-nous:</p>
            <a href={`mailto:${emailContact}`} className={styles.email}>
              {emailContact}
            </a>
          </div>
          
          <div className={styles.ctaContainer}>
            <p className={styles.downloadText}>Pour télécharger la brochure:</p>
            <div className={styles.buttons}>
              <Button className={styles.buttonFr}>
                {ctaLabelFr}
              </Button>
              <Button variant="outline" className={styles.buttonEn}>
                {ctaLabelEn}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Card>
  );
};

export default AppelCard;
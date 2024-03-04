import styles from './actuCard.module.scss';
import { Icon } from '@iconify/react';

const ActuCard = ({ title, bg, date, category, backgroundPosition, backgroundSize }) => {
  const truncatedTitle = title.length > 60 ? `${title.substring(0, 60)}...` : title;
  return (
    <div
      className={styles.cardWrapper}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center', // Default to center
        backgroundSize: 'cover', // Default to cover
      }}
    >
      {/* Rest of the card content */}
      <div className={styles.imgWrapper}></div>
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

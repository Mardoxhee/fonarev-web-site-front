import styles from './actuCard.module.scss'
import { Icon } from '@iconify/react';

const ActuCard = () => {
  return (
    <div className={styles.cardWrapper} >
        <div className={styles.imgWrapper}></div>
        <div className={styles.titleWrapper}>
            <h3>Itinérance du Fonarev à Goma dans 
                la province du Nord Kivu
            </h3>
            <div className={styles.metaContainer}>
                <p><Icon icon="formkit:time" className={styles.icone} /><span>Novembre 7, 2023</span></p>
                <h4><Icon icon="bi:folder" className={styles.icone} /><span>Actualité</span></h4>
            </div>
        </div>
    </div>
  )
}

export default ActuCard
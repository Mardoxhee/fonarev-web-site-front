import styles from './header.module.scss'
import React from 'react'
import Image from 'next-image'

const Header = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.socialMedia } >

        </div>
        <div>
            <div className={styles.logoContainer} >
                <Image src="" />
            </div>
            <nav>
                <li>A propos</li>
                <li>Actualités</li>
                <li>Galerie</li>
                <li>Stories</li>
                <li>Carrière</li>

            </nav>
            <div className={styles.ctaContainer}> 
                <button>BRISEZ LE SILENCE</button>
            </div>
        </div>
    </div>
  )
}

export default Header
"use client"
import styles from './header.module.scss'
import React from 'react'
import Image from 'next/image'
import Logo from './../../public/logo-fonarev.png'
import { Icon } from '@iconify/react';
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


const Header = () => {
const [isMobile, setIsMobile] = useState(false)
const [selected, setSelected] = useState(false)
const router = useRouter();


const handleHamburgerClick = () => {
    setIsMobile(!isMobile);
  };

  const handleMenuSelections = () => {
    setSelected(true);
  }

  const isLinkActive = (href) => {
    const pathname = usePathname();
    return pathname.includes(href);
};

  return (
    <div className={isMobile ? styles.mobileContainer  : styles.mainContainer}>
        <ul className={styles.socialMedia}  >
            <li>
                <Link href="https://www.facebook.com/people/Fonarev-RDC/100095091627231/" target='_blank'>
                    <Icon icon="ic:baseline-facebook" className={styles.icone} />
                </Link> 
            </li>
            <li>
                <Link href="https://twitter.com/fonarevrdc?s=11&t=deR11SqFyw5Xk4NNnFB3vg" target='_blank'>
                    <Icon icon="pajamas:twitter" className={styles.icone} />
                </Link> 
            </li>
            <li>
                <Link href="https://www.linkedin.com//company/fonarev-rdc/" target='_blank'>
                    <Icon icon="mdi:linkedin" className={styles.icone} />
                </Link> 
            </li>
            <li>
                <Link href="https://www.instagram.com/fonarevrdc/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank'>
                    <Icon icon="ant-design:instagram-filled" className={styles.icone} />
                </Link> 
            </li>
            <li>
                <Link href="/">
                    <Icon icon="ic:round-tiktok" className={styles.icone} />

                </Link> 
            </li>
            <li>
                <Link href="/">
                    <Icon icon="ri:youtube-fill" className={styles.icone} />
                </Link> 
            </li>
        </ul>
        <nav>
        <Link href="/">
            <div className={styles.logoContainer} >
                <Image src={Logo} alt = "logo du fonarev" />
            </div>
            </Link> 
            <ul onClick= {handleMenuSelections} className={selected ? styles.dNone : "" }>
                <li className={isLinkActive("/about") ? styles.active : ""}>
                    <Link href="/about">à propos</Link>
                </li>
                <li className={isLinkActive("/actualites") ? styles.active : ""}>
                    <Link href="/actualites">Actualités</Link>
                </li>
                <li className={isLinkActive("/activites") ? styles.active : ""}>
                    <Link href="/activites">Activités</Link>
                </li>

                {/* <li>
                    <Link href="/galerie">Galerie</Link> 
                </li>
                <li>
                    <Link href="/stories">Stories</Link> 
                </li>
              */}
                <li className={isLinkActive("/contact") ? styles.active : ""}>
                    <Link href="/contact">Contact</Link>
                </li>
       
                <li className={isLinkActive("/opportunites") ? styles.active : styles.hoverMenu}>
                    <Link href="#">Opportunités</Link>
                    <small className={styles.secondaryMenu}>
                        <Link href="#">Offres d'emploi</Link>
                        <Link href="/opportunites/appels">Appels d'offre</Link>
                        <Link href="#">Stages</Link>
                    </small>
                </li>
            </ul>
            <div className={styles.ctaContainer}> 
                <button>BRISEZ LE SILENCE</button>
            </div>
                {isMobile ? <Icon icon="maki:cross" className={styles.icone} onClick={handleHamburgerClick}/>:  <Icon icon="icon-park:hamburger-button" className={styles.icone} onClick={handleHamburgerClick}/>}
           
        </nav>
    </div>
  )
}

export default Header
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
import Head from 'next/head'; 


const Header = () => {
const [isMobile, setIsMobile] = useState(false)
const [selected, setSelected] = useState(false)
const [isOpportunitiesOpen, setIsOpportunitiesOpen] = useState(false);
const router = useRouter();


const handleOpportunitiesClick = () => {
    setIsOpportunitiesOpen(!isOpportunitiesOpen); // Toggle Opportunités dropdown
  };

const handleHamburgerClick = () => {
    setIsMobile(!isMobile);
  };

  const handleMenuSelections = () => {
    setSelected(true);
    setIsMobile(false); 
  }

  const isLinkActive = (href) => {
    const pathname = usePathname();
    if (pathname === href) {
      return true;
    }   
  };

  return (
  <>
   <Head> 
    <title>Fonarev rdc | Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
    <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
   </Head>
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
            <ul className={selected ? styles.dNone : "" }>
            <li className={isLinkActive("/") ? styles.active : ""} onClick= {handleMenuSelections} >
                    <Link href="/">Accueil</Link>
                </li>
                <li className={isLinkActive("/a-propos-du-fonarev") ? styles.active : ""} onClick= {handleMenuSelections} >
                    <Link href="/a-propos-du-fonarev">à propos</Link>
                </li>
                <li className={isLinkActive("/actualites") ? styles.active : ""} onClick= {handleMenuSelections} >
                    <Link href="/actualites">Actualités</Link>
                </li>
                <li className={isLinkActive("/activites") ? styles.active : ""} onClick= {handleMenuSelections} >
                    <Link href="/activites">Activités</Link>
                </li>
                <li className={isLinkActive("/publications/rapports-annuels") ? styles.active : styles.hoverMenu}>
                    <Link href="#">Publications<Icon icon="ep:arrow-down-bold" className={styles.iconeArrow} /></Link>
                    <small className={styles.secondaryMenu}>
                        <Link href="/publications/rapports-annuels">Rapports annuels</Link>
                        <Link href="#" onClick= {handleMenuSelections} >Newsletter</Link>
                        <Link href="#">Bulletins infos</Link>
                        <Link href="#">Articles</Link>
                    </small>
                </li>
                <li className={isLinkActive("/publications/") ? styles.active : styles.hoverMenu}>
                    <Link href="#">Mediathèque<Icon icon="ep:arrow-down-bold" className={styles.iconeArrow} /></Link>
                    <small className={styles.secondaryMenu}>
                        <Link href="#">Vidéos</Link>
                        <Link href="#" onClick= {handleMenuSelections} >Podcasts</Link>

                   
                    </small>
                </li>

                {/* <li>
                    <Link href="/galerie">Galerie</Link> 
                </li>
                <li>
                    <Link href="/stories">Stories</Link> 
                </li>
              */}
            
       
                <li className={isLinkActive("/opportunites/appels") ? styles.active : styles.hoverMenu}>
                    <Link href="#">Opportunités<Icon icon="ep:arrow-down-bold" className={styles.iconeArrow} /></Link>
                    <small className={styles.secondaryMenu}>
                        <Link href="/opportunites/offres-emploi">Offres d'emploi</Link>
                        <Link href="/opportunites/appels" onClick= {handleMenuSelections} >Appels d'offres</Link>
                        <Link href="#">Stages</Link>
                    </small>
                </li>
                <li className={isLinkActive("/contact") ? styles.active : ""} onClick= {handleMenuSelections} >
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div className={styles.ctaContainer}> 
            <Link href="faire-un-don">
                <button>FAIRE UN DON</button>
            </Link>
            </div>
                {isMobile ? <Icon icon="maki:cross" className={styles.icone} onClick={handleHamburgerClick}/>:  <Icon icon="icon-park:hamburger-button" className={styles.icone} onClick={handleHamburgerClick}/>}
           
        </nav>
    </div>
    </>
  )
}

export default Header
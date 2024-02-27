"use client"
import styles from './header.module.scss'
import React from 'react'
import Image from 'next/image'
import Logo from './../../public/fonarev-logo.png'
import { Icon } from '@iconify/react';
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.mainContainer}>
        <ul className={styles.socialMedia } >
            <li><Icon icon="pajamas:twitter" className={styles.icone} /></li>
            <li><Icon icon="mdi:linkedin" className={styles.icone} /></li>
            <li><Icon icon="ant-design:instagram-filled" className={styles.icone} /></li>
            <li><Icon icon="ic:round-tiktok" className={styles.icone} /></li>
            <li><Icon icon="ri:youtube-fill" className={styles.icone} /></li>
        </ul>
        <nav>
            <div className={styles.logoContainer} >
            <Link href="/">
                <Image src={Logo} alt = "logo du fonarev" />
            </Link> 
            </div>
            <ul>
                <li>
                    <Link href="/about"> A propos</Link> 
                </li>
                <li>
                    <Link href="/actualites">Actualités</Link> 
                </li>
                <li>
                    <Link href="/galerie">Galerie</Link> 
                </li>
                <li>
                    <Link href="/galerie">Stories</Link> 
                </li>
                <li>
                    <Link href="/galerie">Carriere</Link> 
                </li>
                <li>
                    <Link href="/contact">Contact</Link> 
                </li>
            </ul>
            <div className={styles.ctaContainer}> 
                <button>BRISEZ LE SILENCE</button>
            </div>
            <Icon icon="icon-park:hamburger-button" className={styles.icone} />
        </nav>
    </div>
  )
}

export default Header
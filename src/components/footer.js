"use client"
import React from 'react'
import styles from './footer.module.scss'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import Logo from './../../public/fonarev-logo.png'

const Footer = () => {
  return (
    <section className={styles.footerWrapper}>
        <div className={styles.newsLetterContainer}>
            <div className={styles.socialMedia}>
                <h3>Nous suivre sur les réseaux</h3>
                <div className={styles.iconesWrapper}>
                    <Icon icon="ri:youtube-fill" className={styles.icone} />
                    <Icon icon="ic:round-tiktok" className={styles.icone} />
                    <Icon icon="mdi:facebook" className={styles.icone} />
                    <Icon icon="ant-design:instagram-filled" className={styles.icone} />
                    <Icon icon="mdi:linkedin" className={styles.icone} />
                    <Icon icon="pajamas:twitter" className={styles.icone} />
                </div>
            </div>
            <div className = {styles.rightContainer}>
                <h3>Vous abonner à notre newsletter</h3>
                <div className = {styles.formContainer}>   
                    <form> 
                        <input/>
                        <button  type= "submit">
                            <Icon icon="basil:telegram-outline" className={styles.submitBtn} />
                        </button>
                    </form>
                    <p>En cliquant sur ENVOYER, vous acceptez que FONAREV RDC 
                        vous adresse sa newsletter. Vous pourrez à tout moment 
                        vous désinscrire en utilisant le lien intégré à chaque newsletter. 
                        Pour en savoir plus, consultez notre politique de protection 
                        des données.
                    </p>
                </div>
            </div>
        </div>
        <footer>
            <div className = {styles.linkSide} >
                <div>
                    <Image src ={Logo} alt = "logo fonarev"/>     
                </div>
                <div className = {styles.linkBlock}>
                    <h3>A propos</h3>
                    <ul>
                        <li>Qui sommes nous</li>
                        <li>Notre histoire</li>
                        <li>Nos valeurs</li>
                        <li></li>
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>A propos</h3>
                    <ul>
                        <li>Qui sommes nous</li>
                        <li>Notre histoire</li>
                        <li>Nos valeurs</li>
                        <li></li>
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>A propos</h3>
                    <ul>
                        <li>Qui sommes nous</li>
                        <li>Notre histoire</li>
                        <li>Nos valeurs</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className = {styles.copyRight} >
                <p>Copyright 2024 FONAREV | Powered by FONAREV</p>
            </div>
        
    </section>
    
  )
}

export default Footer
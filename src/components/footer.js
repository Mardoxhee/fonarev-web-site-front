"use client"
import React from 'react'
import styles from './footer.module.scss'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import Logo from './../../public/fonarev-logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className={styles.footerWrapper}>
        <div className={styles.newsLetterContainer}>
            <div className={styles.socialMedia}>
                <h3>Nous suivre sur les réseaux</h3>
                <div className={styles.iconesWrapper}>
                    <Link href="https://www.facebook.com/people/Fonarev-RDC/100095091627231/" target='_blank'>
                        <Icon icon="ri:youtube-fill" className={styles.icone} />
                    </Link> 
                

                    <Icon icon="ic:round-tiktok" className={styles.icone} />
                    <Link href="https://www.facebook.com/people/Fonarev-RDC/100095091627231/" target='_blank'>
                        <Icon icon="mdi:facebook" className={styles.icone} />
                    </Link> 
                    <Link href="https://www.instagram.com/fonarevrdc/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank'>
                        <Icon icon="ant-design:instagram-filled" className={styles.icone} />
                    </Link> 
                    <Link href="https://www.linkedin.com//company/fonarev-rdc/" target='_blank'>
                        <Icon icon="mdi:linkedin" className={styles.icone} />
                    </Link> 
                    <Link href="https://twitter.com/fonarevrdc?s=11&t=deR11SqFyw5Xk4NNnFB3vg" target='_blank'>
                        <Icon icon="pajamas:twitter" className={styles.icone} />
                    </Link> 
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
                    <Link href="/about/#about" >
                        <li>Qui sommes nous</li>
                    </Link> 
                    <Link href="/about/#story" >
                        <li>Notre histoire</li>
                    </Link> 
                    <Link href="/about/#team" >
                        <li>Equipe dirigeante</li>
                    </Link> 
                        <li></li>
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>Actualités</h3>
                    <ul>
                        <li>Toutes les actualités</li>
                        <li>A la une</li>
                        {/* <li>Nos valeurs</li> */}
                        <li></li>
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>Notre adresse</h3>
                    <p>
                        Avenue Colonel Ebeya 3498, <br/>Q/ Golf, C/ Gombe
                    </p>
                </div>
            </div>
        </footer>
        <div className = {styles.copyRight} >
                <p>Copyright 2025 FONAREV | Powered by FONAREV</p>
            </div>
        
    </section>
    
  )
}

export default Footer
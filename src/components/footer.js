"use client"
import React from 'react'
import styles from './footer.module.scss'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import Logo from './../../public/fonarev-logo.png'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.footerWrapper}>
        <div className={styles.newsLetterContainer}>
            <div className={styles.socialMedia}>
                <h3>Restez connectés au FONAREV</h3>
                <p>Suivez les actions de réparation, les publications, les activités institutionnelles et les voix qui portent la mémoire des victimes.</p>
                <div className={styles.newsletterHighlights}>
                    <span><Icon icon="solar:document-text-bold" /> Publications</span>
                    <span><Icon icon="solar:calendar-bold" /> Activités</span>
                    <span><Icon icon="solar:heart-bold" /> Réparation</span>
                </div>
                <div className={styles.iconesWrapper}>
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
                <div className = {styles.newsletterCard}>   
                    <div className={styles.newsletterCardHeader}>
                        <div className={styles.newsletterBadge}>NEWSLETTER</div>
                        <div className={styles.newsletterMeta}>Édition Avril-Mai</div>
                    </div>
                    <div className={styles.newsletterCardBody}>
                        <div className={styles.newsletterTitle}>Newsletter FONAREV</div>
                        <div className={styles.newsletterSubtitle}>Découvrez les faits marquants, activités et actualités du mois.</div>
                    </div>
                    <div className={styles.newsletterCardFooter}>
                        <a className={styles.newsletterDownloadCta} href="/api/newsletter/avril-mai">
                            Télécharger (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className = {styles.linkSide} >
                <div className={styles.brandBlock}>
                    <Image src ={Logo} alt = "logo fonarev"/>     
                    <p>Fonds national des réparations des victimes des violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de l'humanité.</p>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>Institution</h3>
                    <ul>
                    <Link href="/a-propos-du-fonarev" >
                        <li>Qui sommes-nous ?</li>
                    </Link> 
                    <Link href="/a-propos-du-fonarev" >
                        <li>Notre histoire</li>
                    </Link> 
                    <Link href="/a-propos-du-fonarev" >
                        <li>Équipe dirigeante</li>
                    </Link> 
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>Mission</h3>
                    <ul>
                    <Link href="/petition" >
                        <li>Signer la pétition</li>
                    </Link> 
                    <Link href="/genocost" >
                        <li>GENOCOST</li>
                    </Link> 
                    <Link href="https://front.ecosys.fonasite.app/" target='_blank'>
                        <li>Devenir partenaire</li>
                    </Link> 
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>Accès rapides</h3>
                    <ul>
                        <Link href="/actualites" >
                            <li>Actualités</li>
                        </Link> 
                        <Link href="/activites" >
                            <li>Activités</li>
                        </Link> 
                        <Link href="/publications/rapports-annuels" >
                            <li>Publications</li>
                        </Link> 
                    </ul>
                </div>
                <div className = {styles.linkBlock}>
                    <h3>Contact</h3>
                    <p>
                        Avenue Lukusa 26, <br/>Q/Gare, C/Gombe
                    </p>
                    <Link href="/contact" className={styles.contactLink}>Nous contacter</Link>
                </div>
            </div>
        </footer>
        <div className = {styles.copyRight} >
                <p>© {currentYear} FONAREV. Tous droits réservés.</p>
            </div>
        
    </section>
    
  )
}

export default Footer

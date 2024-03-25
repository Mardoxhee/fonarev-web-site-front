import React from 'react'
import styles from './style.module.scss'
import Banner from './../../components/banner'
import BackgroundVideoContainer from '@/components/backgroundVideo'
import VideoCard from './../../components/videoCard'


const Stories = () => {
  return (
    <main className={styles.main}>
      <section className={styles.entryVideo}>
        <BackgroundVideoContainer  videoSource = "./pasta.mp4">
          <h2>Stories</h2>
        </BackgroundVideoContainer>
      </section>
      <section className={styles.cardList}>
            <h2>
              Témoiganages poignants <span>des femmes vitimes </span> 
            </h2>
            <p>Interpretés par les femmes influentes de l'écosystem congolais</p>
            <div className={styles.cardContainer}>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>

            </div>
      </section>
    </main>
  )
}

export default Stories
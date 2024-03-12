import styles from './banner.module.scss'


import React from 'react'

const Banner = ({pageTitle, exerpt}) => {
  return (
    <section className={styles.banner}>
        <h2> {pageTitle} </h2>
        <p>{exerpt}</p>
  </section>
  )
}

export default Banner
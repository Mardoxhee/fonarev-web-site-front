import styles from './banner.module.scss'

const Banner = ({pageTitle, exerpt, background}) => {
  return (
    <section className={styles.banner}
    style={{
      backgroundImage: `linear-gradient(360deg, #1a1a1a, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, .2) 85%, rgba(0, 0, 0, .1)),url(${background})`,
      backgroundPosition: 'center', // Default to center
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >

        <h2> {pageTitle} </h2>
        <p>{exerpt}</p>
  </section>
  )
}

export default Banner
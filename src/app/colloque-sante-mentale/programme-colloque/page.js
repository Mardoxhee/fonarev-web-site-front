import React from 'react'
import styles from "./style.module.scss"



const ProgramReading = () => {


  return (
    <main className={styles.main}>
      <iframe
        src='/Programme-colloque-sante-mentale.pdf'
        width="800"
        height="600"
        title="Programme colloque sur la santé mentale des victimes"
        zoom="80"
      />
    </main>
  );
};

export default ProgramReading;

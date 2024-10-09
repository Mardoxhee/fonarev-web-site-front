import React from 'react'
import HeadSkeleton from './headSkeleton'
import styles from './lateral.module.scss'

const lateralSqueleton = () => {
  return (
    <div className={styles.container}>
        <HeadSkeleton />
        <HeadSkeleton />
        <HeadSkeleton />
    </div>
  )
}

export default lateralSqueleton
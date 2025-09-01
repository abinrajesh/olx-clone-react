import React from 'react'
import styles from './Next.module.css'
import classNames from 'classnames'

const Next = ({ isActive }) => {
  
  return (
    <button className={classNames(styles.nextBtn, isActive ? styles.active : styles.notActive)}>
      <span>Next</span>
    </button>
  )
}

export default Next

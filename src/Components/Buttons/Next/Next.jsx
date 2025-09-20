import React from 'react'
import styles from './Next.module.css'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

const Next = ({ isActive, navigateTo }) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (!isActive) return;

    if (navigateTo) {
      navigate(navigateTo);
    }
  }

  return (
    <button className={classNames(styles.nextBtn, isActive ? styles.active : styles.notActive)} type='submit' onClick={handleClick} disabled={!isActive}>
      <span>Next</span>
    </button>
  )
}

export default Next

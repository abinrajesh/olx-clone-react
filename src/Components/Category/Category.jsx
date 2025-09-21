import React, { useState } from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'
import CategoryModal from '../Modals/CategoryModal/CategoryModal';

const Category = () => {

  const [isTouched, setIsTouched] = useState(false);


  return (
    <div className={styles.categoryContainer}>
      <button onClick={() => setIsTouched(prev => !prev)}>
        <span>ALL CATEGORIES</span>
        <span className={`${styles.arrow} ${isTouched ? styles.rotate : ''}`}>
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
            <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
          </svg>
        </span>
      </button>


      {isTouched && (
        <>
          <div className={styles.overlay} onClick={() => setIsTouched(false)} />
          <CategoryModal />
        </>
      )}

      <ul className={styles.categoryLinks}>

        <li>
          <Link to='cars'>
            <span>Cars</span>
          </Link>
        </li>

        <li>
          <Link to='bikes'>
            <span>Motorcycles</span>
          </Link>
        </li>

        <li>
          <Link to='moblies'>
            <span>Mobile Phones</span>
          </Link>
        </li>

        <li>
          <Link to='houseandappartments'>
            <span>For Sale: Houses & Apartments</span>
          </Link>
        </li>

        <li>
          <Link to='scooters'>
            <span>Scooters</span>
          </Link>
        </li>

        <li>
          <Link to='othervehicles'>
            <span>Commercial & Other Vehicles</span>
          </Link>
        </li>

        <li>
          <Link to='forrent'>
            <span>For Rent: Houses & Apartments</span>
          </Link>
        </li>

      </ul>

    </div>
  )
}

export default Category

import React from 'react'
import styles from './Category.module.css'

const Category = () => {
  return (
    <div className={styles.categoryContainer}>
      <button>
        <span>ALL CATEGORIES</span>
        <span>
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
        </span>
      </button>
    </div>
  )
}

export default Category

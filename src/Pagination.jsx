import * as React from 'react'
import './Pagination.css'

export default ({ inActiveLeft, inActiveRight, page }) => {
  return (
    <div>
      <button
        className={
          inActiveLeft ? 'Pagination__button in-active' : 'Pagination__button'
        }
      >
        &lt;
      </button>
      <span className="Pagination__span">{page}</span>
      <button
        className={
          inActiveRight ? 'Pagination__button in-active' : 'Pagination__button'
        }
      >
        &gt;
      </button>
    </div>
  )
}

import * as React from 'react'
import './Pagination.css'

export default ({ currentPage, totalPage }) => {
  return (
    <section className="Pagination">
      <button
        className={
          currentPage === 1
            ? 'Pagination__button in-active'
            : 'Pagination__button'
        }
      >
        &lt;
      </button>
      <span className="Pagination__span">
        {currentPage}/{totalPage}
      </span>
      <button
        className={
          currentPage === totalPage
            ? 'Pagination__button in-active'
            : 'Pagination__button'
        }
      >
        &gt;
      </button>
    </section>
  )
}

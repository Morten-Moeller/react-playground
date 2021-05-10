import * as React from 'react'
import './Card.css'

export default ({ heading, paragraph, isBookmarked }) => {
  return (
    <section className="Card">
      <div
        className={
          isBookmarked
            ? 'Card__bookmark Card__bookmark--active'
            : 'Card__bookmark'
        }
      ></div>
      <h2 className="Card__heading">{heading}</h2>
      <p className="Card__paragraph">{paragraph}</p>
    </section>
  )
}

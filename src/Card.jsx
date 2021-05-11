import * as React from 'react'
import './Card.css'

export default ({ heading, question, answer, isBookmarked }) => {
  const tags = ['trivia', 'q&a', 'english']
  const renderTags = tags.map(tag => <li key={tag}>{tag}</li>)
  const bookmark = isBookmarked
    ? 'Card__bookmark Card__bookmark--active'
    : 'Card__bookmark'
  return (
    <section className="Card">
      <button aria-label="Bookmark card" className={bookmark}></button>
      <h2 className="Card__heading">{heading}</h2>
      <p className="Card__question">{question}</p>
      <button className="Card__button">Show answer</button>
      <p className="Card__answer hidden">{answer}</p>
      <ul className="Card__tag-list">{renderTags}</ul>
    </section>
  )
}

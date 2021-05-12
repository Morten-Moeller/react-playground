import * as React from 'react'
import './Card.css'

export default ({ heading, question, answer, isBookmarked }) => {
  const [isHidden, setIsHidden] = React.useState(true)
  const tags = ['trivia', 'q&a', 'english']
  const bookmark = isBookmarked
    ? 'Card__bookmark Card__bookmark--active'
    : 'Card__bookmark'
  return (
    <section className="Card">
      <button aria-label="Bookmark card" className={bookmark}></button>
      <h2 className="Card__heading">{heading}</h2>
      <p className="Card__question">{question}</p>
      <button onClick={() => setIsHidden(!isHidden)} className="Card__button">
        Show answer
      </button>
      <p className={isHidden ? 'Card__answer hidden' : 'Card__answer'}>
        {answer}
      </p>
      <ul className="Card__tag-list">
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  )
}

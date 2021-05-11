import * as React from 'react'
import Card from './Card'
import Header from './Header'
import './App.css'
import cards from './data.json'
import decodeHtml from './decodeHtml'

export default () => {
  const { question, correct_answer } = cards
  const renderCards = cards.map(
    ({ category: heading, question, correct_answer: answer }) => (
      <Card
        key={question}
        heading={heading}
        question={decodeHtml(question)}
        answer={decodeHtml(answer)}
      />
    )
  )
  return (
    <div className="App">
      <Header headerText="Home" isHidden />
      {renderCards}
    </div>
  )
}

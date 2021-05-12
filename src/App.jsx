import * as React from 'react'
import Card from './Card'
import Header from './Header'
import './App.css'
import cards from './data.json'
import decodeHtml from './decodeHtml'
import Navigation from './Navigation'

export default () => {
  return (
    <div className="App">
      <Header headerText="Home" isHidden />
      <Navigation isActive />
      {renderCards()}
    </div>
  )
}

function renderCards() {
  return cards.map(
    ({ category: heading, question, correct_answer: answer }) => (
      <Card
        key={question}
        heading={heading}
        question={decodeHtml(question)}
        answer={decodeHtml(answer)}
      />
    )
  )
}

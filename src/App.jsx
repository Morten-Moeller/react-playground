import * as React from 'react'
import Button from './Button'
import Card from './Card'
import Header from './Header'
import Pagination from './Pagination'
import './App.css'

export default () => {
  return (
    <div className="App">
      <Header headerText="Home" isHidden />
      <Header headerText="Settings" />
      <Header headerText="Profile" isHidden />
      <Button isActive text="Hit me!" />
      <Button text="Hit me hard!" />
      <Pagination currentPage={1} totalPage={32} />
      <Pagination currentPage={2} totalPage={32} />
      <Pagination currentPage={32} totalPage={32} />

      <Card heading="Card 1" paragraph="Lorem ipsum dolor sit." />
      <Card heading="Card 2" paragraph="Lorem ipsum dolor sit." isBookmarked />
      <Card heading="Card 3" paragraph="Lorem ipsum dolor sit." />
    </div>
  )
}

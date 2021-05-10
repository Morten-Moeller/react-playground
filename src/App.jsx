import * as React from 'react'
import Button from './Button'
import Card from './Card'
import Header from './Header'
import Pagination from './Pagination'
import './App.css'

export default () => {
  return (
    <div className="App">
      {/* <Header headerText="Home" isHidden />
      <Header headerText="Settings" />
      <Header headerText="Profile" isHidden />
      <Button isActive text="Hit me!" />
      <Button text="Hit me hard!" />
      <Pagination inActiveLeft page=" 1/32 " />
      <Pagination page=" 2/32 " />
      <Pagination inActiveRight page=" 32/32 " /> */}

      <Card heading="Title" paragraph="Lorem ipsum dolor sit." />
      <Card heading="Title" paragraph="Lorem ipsum dolor sit." isBookmarked />
      <Card heading="Title" paragraph="Lorem ipsum dolor sit." />
    </div>
  )
}

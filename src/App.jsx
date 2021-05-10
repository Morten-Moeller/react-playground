import * as React from 'react'
import Button from './Button'
import Header from './Header'
import Pagination from './Pagination'

export default () => {
  return (
    <div>
      <Header headerText="Home" isHidden />
      <Header headerText="Settings" />
      <Header headerText="Profile" isHidden />
      <Button isActive text="Hit me!" />
      <Button text="Hit me hard!" />
      <Pagination inActiveLeft page=" 1/32 " />
      <Pagination page=" 5/32 " />
      <Pagination inActiveRight page=" 32/32 " />
    </div>
  )
}

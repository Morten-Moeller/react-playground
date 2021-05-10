import * as React from 'react'
import './Button.css'

export default ({ text, isActive }) => {
  return (
    <button className={isActive ? 'Button active' : 'Button'}>{text}</button>
  )
}

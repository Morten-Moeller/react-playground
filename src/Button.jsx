import * as React from 'react'
import './Button.css'

export default ({ text, isActive }) => {
  const active = isActive ? 'Button active' : 'Button'
  return <button className={active}>{text}</button>
}

import * as React from 'react'
import './Header.css'

export default ({ headerText, isHidden }) => {
  return (
    <header className="Header">
      <button className={isHidden ? 'Header__button hidden' : 'Header__button'}>
        &lt;
      </button>
      <h1>{headerText}</h1>
    </header>
  )
}

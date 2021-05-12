import * as React from 'react'
import './Navigation.css'

export default () => {
  return (
    <nav className="Navi">
      <ul className="Navi_list">
        <li>
          <button data-active className="Navi__button">
            Home
          </button>
        </li>
        <li>
          <button className="Navi__button">Profile</button>
        </li>
        <li>
          <button className="Navi__button">Settings</button>
        </li>
      </ul>
    </nav>
  )
}

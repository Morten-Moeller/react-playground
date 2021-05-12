import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [boxStyle, setBoxStyle] = useState({
    size: '20',
    radius: '10',
    color: '50',
    shadow: '10',
  })
  const { size, radius, color, shadow } = boxStyle

  const style = {
    height: size + 'px',
    width: size + 'px',
    borderRadius: radius + '%',
    background: 'hsl(' + color + ', 70%, 70%)',
    boxShadow:
      shadow / 2 +
      'px ' +
      shadow / 2 +
      'px ' +
      shadow +
      'px ' +
      'rgba(0, 0, 0, 0.75)',
  }
  return (
    <div className="App">
      <label>
        Size:
        <input
          name="size"
          value={size}
          onChange={handleChange}
          type="range"
          max="200"
        />
      </label>
      <label>
        Radius:
        <input
          name="radius"
          value={radius}
          onChange={handleChange}
          type="range"
          max="50"
        />
      </label>
      <label>
        Color:
        <input
          name="color"
          value={color}
          onChange={handleChange}
          type="range"
          max="339"
        />
      </label>
      <label>
        Shadow:
        <input
          name="shadow"
          value={shadow}
          onChange={handleChange}
          type="range"
          max="30"
        />
      </label>
      <div style={style} className="Box"></div>
    </div>
  )

  function handleChange(event) {
    const input = event.target
    setBoxStyle({
      ...boxStyle,
      [input.name]: input.value,
    })
  }
}

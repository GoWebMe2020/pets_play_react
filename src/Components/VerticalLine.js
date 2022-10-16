import React from 'react'
import './VerticalLine.scss'

function VerticalLine(props) {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const randomStyling = () => {
    const styleArray = ['pink', 'blue', 'green']
    let style = randomNumber(0, styleArray.length)
    return styleArray[style]
  }

  const verticalLineColor = () => {
    if (props.lineColor === 'dark-green') {
      return 'green'
    } else {
      return randomStyling()
    }
  }

  return <div id="vertical-line" className={`${verticalLineColor()}`}></div>
}

export default VerticalLine

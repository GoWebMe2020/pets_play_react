import React from 'react'
import "./HorizontalLine.scss"

function HorizontalLine(props) {

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const randomStyling = () => {
    const styleArray = ["pink", "blue", "green"]
    let style = randomNumber(0, styleArray.length)
    return styleArray[style]
  }

  const horizontalLineColor = () => {
    if (props.lineColor === "dark-green") {
      return "green"
    } else {
      return randomStyling()
    }
  }

  return (
    <div id="horizontal-line" className={`${horizontalLineColor()} mb-3`}>
    </div>
  )
}

export default HorizontalLine

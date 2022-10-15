import React from 'react'
import "./BlueIcon.css"
import "./PinkIcon.css";
import "./GreenIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faHotdog }from '@fortawesome/free-solid-svg-icons'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'

function FunIcon() {

  const webPageHeight = 1500
  const webpageWidth = window.innerWidth

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  console.log(randomNumber(99, webPageHeight));

  const randomIcon = () => {
    const iconArray = [faDog, faHotdog, faBone, faBowlFood, faPaw, faCat]
    // let icon = Math.floor(Math.random() * iconArray.length)
    let icon = randomNumber(0, iconArray.length)
    return iconArray[icon]
  }

  const randomStyling = () => {
    const styleArray = ["fa-green-icon", "fa-blue-icon", "fa-pink-icon"]
    // let style = Math.floor(Math.random() * styleArray.length)
    let style = randomNumber(0, styleArray.length)
    return styleArray[style]
  }

  const verticalPosition = () => {
    let verticalPosition = randomNumber(55, webPageHeight)
    return `${verticalPosition}px`
  }

  const horizontalPosition = () => {
    let horizontalPosition = randomNumber(10, webpageWidth)
    return `${horizontalPosition}px`
  }

  return (
    <div
      id="draggable-icon"
      className={ `${randomStyling()} d-flex justify-content-center align-items-center p-1`}
      style={{top: verticalPosition(), left: horizontalPosition(),}}
      draggable="true"
    >
      <FontAwesomeIcon key={Math.random()} icon={randomIcon()} size="lg" className='p-1'/>
    </div>
  )
}

export default FunIcon;

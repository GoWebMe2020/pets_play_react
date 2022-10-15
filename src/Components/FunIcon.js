import React from 'react'
import "./FunIcon.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faHotdog }from '@fortawesome/free-solid-svg-icons'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'

function FunIcon() {

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const randomIcon = () => {
    const iconArray = [faDog, faHotdog, faBone, faBowlFood, faPaw, faCat]
    let icon = randomNumber(0, iconArray.length)
    return iconArray[icon]
  }

  const randomStyling = () => {
    const styleArray = ["fa-green-icon", "fa-blue-icon", "fa-pink-icon"]
    let style = randomNumber(0, styleArray.length)
    return styleArray[style]
  }

  return (
    <div id="fun-icon" className={ `${randomStyling()} d-flex justify-content-center align-items-center p-1` }>
      <FontAwesomeIcon icon={randomIcon()} size="lg" className='p-1'/>
    </div>
  )
}

export default FunIcon;

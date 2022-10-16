import React from 'react'
import { useState } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import FunIcon from '../Components/FunIcon'
import VerticalLine from './VerticalLine'
import HorizontalLine from './HorizontalLine'

function Footer() {
  const checkScreenWidth = () => {
    return window.screen.width < 768 ? true : false
  }

  const [screenWidth, setScreenWidth] = useState(checkScreenWidth())

  window.addEventListener('resize', (event) => {
    window.screen.width < 768
      ? setScreenWidth(checkScreenWidth())
      : setScreenWidth(false)
  })

  console.log(screenWidth)

  return (
    <footer className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-start footer-left ps-md-3">
        <div className="d-flex justify-content-center align-items-center">
          <FunIcon />
          <h1 className="ms-2 mb-0">PetsPlay</h1>
        </div>
        <p>Let your pet live its best life</p>
      </div>
      {screenWidth ? <HorizontalLine /> : <VerticalLine />}
      <div className="d-flex justify-content-start align-items-start footer-center ps-md-3">
        <div className="d-flex flex-column justify-content-start align-items-start">
          <h3>Other Links</h3>
          <p className="mb-1">My Account</p>
          <p className="mb-1">About Us</p>
          <p className="mb-1">Testimonials</p>
          <p className="mb-1">Privacy Policy</p>
          <p className="mb-1">Terms of Use</p>
        </div>
      </div>
      {screenWidth ? <HorizontalLine /> : <VerticalLine />}
      <div className="d-flex justify-content-start align-items-start footer-right ps-md-3">
        <div className="d-flex flex-column justify-content-start align-items-start">
          <h3>Contact</h3>
          <div className="d-flex flex-column align-items-start internal-box">
            <div className="d-flex align-items-center mb-1">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="p-1 me-2"
              />
              <a
                href="https://www.instagram.com/jp_fer1982/"
                target="_blank"
                rel="noreferrer"
              >
                /pets_play_on_insta
              </a>
            </div>
            <div className="d-flex align-items-center mb-1">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                className="p-1 me-2"
              />
              <a
                href="https://www.facebook.com/ferreirajp1982"
                target="_blank"
                rel="noreferrer"
              >
                /pets_play_on_facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

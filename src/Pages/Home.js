import React from 'react'
import './Home.css'
import { faEnvelope as farEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHouseUser as fasHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Index() {
  return (
    <div id='home-page' className='home-page'>
      <div className="d-flex flex-column justify-content-start align-items-center">
        <h1 className='mt-5 text-muted text-center'>This is bootstrapped</h1>
        <FontAwesomeIcon icon={farEnvelope} size="lg" bounce className='m-3' />
        <FontAwesomeIcon icon={fasHouseUser} size="lg" shake className='m-3' />
        <FontAwesomeIcon icon={farHeart} size="lg" beat className='m-3' />
        <FontAwesomeIcon icon={farThumbsUp} size="xl" spinPulse className='m-3' />
      </div>
    </div>
  )
}

export default Index

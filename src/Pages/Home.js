import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
// import { faEnvelope as farEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faHouseUser as fasHouseUser } from '@fortawesome/free-solid-svg-icons'
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
// import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Index() {
  return (
    <div id='home-page' className='home-page d-flex flex-column align-items-center'>
      <Carousel id="carousel" className="my-4 shadow-lg">
        <Carousel.Item interval={5000} className="">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="mb-4">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Second slide"
          />
          <Carousel.Caption className="mb-4">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1567644495247-9a74521d994d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className="shadow-lg mb-4">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="d-flex flex-column justify-content-start align-items-center">
        <h1 className='mt-5 text-muted text-center'>This is bootstrapped</h1>
        <FontAwesomeIcon icon={farEnvelope} size="lg" bounce className='m-3' />
        <FontAwesomeIcon icon={fasHouseUser} size="lg" shake className='m-3' />
        <FontAwesomeIcon icon={farHeart} size="lg" beat className='m-3' />
        <FontAwesomeIcon icon={farThumbsUp} size="xl" spinPulse className='m-3' />
      </div> */}
    </div>
  )
}

export default Index

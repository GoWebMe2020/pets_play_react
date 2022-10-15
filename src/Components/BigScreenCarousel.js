import React from 'react'
import './BigScreenCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

function BigScreenCarousel() {
  return (
    <Carousel id="carousel" className="my-4 shadow-lg" variant="dark">
      <Carousel.Item interval={5000} className="">
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1597595735637-05a49627ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="mb-4">
          <h3>Pets love to play</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="">
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Second slide"
        />
        <Carousel.Caption className="mb-4">
          <h3>Pets love to socialise</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="">
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1567644495247-9a74521d994d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Third slide"
        />
        <Carousel.Caption className="shadow-lg mb-4">
          <h3>Pets love exercise</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BigScreenCarousel

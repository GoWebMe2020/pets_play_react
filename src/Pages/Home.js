import React from 'react'
import './Home.css'
import BigScreenCarousel from '../Components/BigScreenCarousel'
import FunIcon from '../Components/PetIcons/FunIcon'

function Index() {
  return (
    <div id='home-page' className='home-page d-flex flex-column align-items-center'>
      <div className="home-page-form d-flex justify-content-between align-items-center">

      </div>


      <div className="d-flex justify-content-between align-items-center my-4 billboard">
        <div className="d-flex flex-column justify-content-center align-items-center billboard-text-box">
          <h1>This is the Right</h1>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center billboard-img-box">
          <img
            src="https://images.unsplash.com/photo-1518882174711-1de40238921b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80" alt="Dogs Playing" />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4 billboard">
        <div className="d-flex flex-column justify-content-center align-items-center billboard-img-box">
          <img
            src="https://images.unsplash.com/photo-1626610331187-55922c34d3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80" alt="Dogs Playing" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center billboard-text-box">
          <h1>This is the Right</h1>
        </div>
      </div>
  </div>
  )
}

export default Index

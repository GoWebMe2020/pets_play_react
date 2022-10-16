import React from 'react'
import './Home.scss'
import UserForm from '../Components/Forms/UserForm'
import Website from '../Components/Website'
import Footer from '../Components/Footer'

function Index() {
  return (
    <div
      id="home-page"
      className="home-page d-flex flex-column align-items-center justify-content-between"
    >
      <UserForm />

      <Website />

      <Footer />
    </div>
  )
}

export default Index

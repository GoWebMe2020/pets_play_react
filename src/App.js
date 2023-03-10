import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './Pages/Home'
import MyProfile from './Pages/MyProfile'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={'/'} href="/">
                <FontAwesomeIcon icon={faPaw} size="xl" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to={'/'} href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/myprofile'} href="/myprofile">
                    My Profile
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to={'/contact'} href="/contact">
                    Contact
                  </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route excat path="/" element={Home()}></Route>
            <Route exact path="/myprofile" element={MyProfile()}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

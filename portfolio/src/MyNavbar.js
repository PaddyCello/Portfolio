import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {

  return (
    <Navbar id="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Navbar.Brand href="/">About</Navbar.Brand>
          <Navbar.Brand href="/skills">Skills</Navbar.Brand>
          <Navbar.Brand href="/projects">Projects</Navbar.Brand>
          <Navbar.Brand href="/interests">Interests</Navbar.Brand>
          <Navbar.Brand href="/contact">Contact</Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
  )
}

export default MyNavbar
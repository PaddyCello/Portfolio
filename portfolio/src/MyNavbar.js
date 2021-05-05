import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const MyNavbar = () => {
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <Navbar id="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Navbar.Brand href="/">About</Navbar.Brand>
          {pathname === '/skills'
            ? <></>
            : <Navbar.Brand href="/skills">Skills</Navbar.Brand>
          }
          {pathname === '/projects'
            ? <></>
            : <Navbar.Brand href="/projects">Projects</Navbar.Brand> 
          }
          {pathname === '/interests'
            ? <></>
            : <Navbar.Brand href="/interests">Interests</Navbar.Brand>
          }
          {pathname === '/contact'
            ? <></>
            : <Navbar.Brand href="/contact">Contact</Navbar.Brand> 
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
  )
}

export default MyNavbar
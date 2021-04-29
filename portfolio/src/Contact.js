import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {

  return (
    <>
      <h1>Contact Me</h1>
      <Container className="contact-container">
        <a href="https://www.linkedin.com/in/patrick-tapio-johnson/" target="blank">
          <div className="linkedin contact"></div>
        </a>
        <a href="https://github.com/PaddyCello" target="blank">
          <div className="github contact"></div>
        </a>
        <a href="https://twitter.com/paddycello" target="blank">
          <div className="twitter contact"></div>
        </a>
        <a href="mailto:paddyjohnsonmusic@gmail.com">
          <div className="email contact"></div>
        </a>
      </Container>
    </>
  )
}

export default Contact
import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {

  return (
    <>
      <h1>Contact Me</h1>
      <Container className="gif-container">
        <iframe title="phones" src="https://giphy.com/embed/l0HlwWvBodzZVh0m4" width="300" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </Container>
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
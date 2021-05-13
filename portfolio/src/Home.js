import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <Container className="paddy-container">
      <Link to="/!">
        <Button>Self-Indulgent Mode!</Button>
      </Link>
      <h1>Patrick Tapio Johnson</h1>
      <div className="paddy-holder"></div>
      <p>After a diverse and vibrant career as a freelance cellist, I have now recently completed the Software Engineering Immersive course at General Assembly. My fascination with software development came about in part from witnessing the changes to the world when the Covid-19 pandemic hit, and observing the extent to which tech was helping people through it. As I love both solving problems and helping people, software development seemed like a good fit.</p>
      <p>Perhaps as a product of my orchestral background, I am happiest when I am a cog in the machine, helping everything function behind the scenes, and will stop at nothing to make sure that my small contribution is as close to perfect as possible.</p>
      <p>Accordingly, I would like to work as a back-end or full-stack developer, ideally for an organization that aims to create positive change for the world.</p>
      <Link to='/projects'>
        <Button className="enter">Take A Look!</Button>{' '}
      </Link>
    </Container>
  )
}

export default Home
import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'

const Projects = () => {
  const [corn, setCorn] = useState(false)
  const [ice, setIce] = useState(false)
  const [worth, setWorth] = useState(false)
  const [tetris, setTetris] = useState(false)
  const handleCorn = () => {
    setCorn(true)
    setIce(false)
    setWorth(false)
    setTetris(false)
  }
  const handleIce = () => {
    setCorn(false)
    setIce(true)
    setWorth(false)
    setTetris(false)
  }
  const handleWorth = () => {
    setCorn(false)
    setIce(false)
    setWorth(true)
    setTetris(false)
  }
  const handleTetris = () => {
    setCorn(false)
    setIce(false)
    setWorth(false)
    setTetris(true)
  }
  return (
    <>
      <h1>Some of my projects - click photo for more info:</h1>
      <Container className="carousel-container">
        <Carousel fade className="carousel">
          <Carousel.Item onClick={handleCorn}>
            <div className="cornhub project-pic" />
          </Carousel.Item>
          <Carousel.Item onClick={handleIce}>
            <div className="icelander project-pic" />
          </Carousel.Item>
          <Carousel.Item onClick={handleWorth}>
            <div className="isitiworthit project-pic" />
          </Carousel.Item>
          <Carousel.Item onClick={handleTetris}>
            <div className="tetris project-pic" />
          </Carousel.Item>
        </Carousel>
      </Container>
      {!corn
        ? <> </>
        : <div className="blurb-holder">
          <a href="http://cornhubapp.herokuapp.com/" target="blank">CornHub [README]</a>
          <p className="project-blurb">As a group of three, we built a full-stack app with a React front end and a Python / Django / PostgreSQL back end, over the course of a week. Our app was focused on providing detailed, specific, accessible and searchable information for keen gardeners, complete with many additional features, such as CRUD functionality, authentication, reminders, PayPal integration and weather information. We tackled the majority of the challenging tasks throughout the stack as a group, saving the lesser tasks for individual work. The original concept for this project was mine - I wrote the majority of the pseudocode pre-sign off and assembled the team.</p>
        </div>
      }
      {!ice
        ? <> </>
        : <p>Info on Icelander</p>
      }
      {!worth
        ? <> </>
        : <p>Info on Is It Worth It?</p>
      }
      {!tetris
        ? <> </>
        : <p>Info on Tetris</p>
      }
    </>
  )
}

export default Projects
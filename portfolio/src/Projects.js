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
          <a href="http://cornhubapp.herokuapp.com/" target="blank"><h2>CornHub [README]</h2></a>
          <p className="project-blurb">As a group of three, we built a full-stack app with a <strong>React</strong> front end and a <strong>Python / Django / PostgreSQL</strong> back end, over the course of a week. Our app was focused on providing detailed, specific, accessible and searchable information for keen gardeners, complete with many additional features, such as CRUD functionality, authentication, reminders, PayPal integration and weather information. We tackled the majority of the challenging tasks throughout the stack as a group, saving the lesser tasks for individual work. The original concept for this project was mine - I wrote the majority of the pseudocode pre-sign off and assembled the team.</p>
        </div>
      }
      {!ice
        ? <> </>
        : <div className="blurb-holder">
          <a href="https://icelander.netlify.app/" target="blank"><h2>Icelander [README]</h2></a>
          <p className="project-blurb">As a group of four, we built a full-stack <strong>MongoDB / Express / React / Node</strong> app (complete with custom API) with CRUD functionality over the course of a week, focused on helping users plan road trips around Iceland.  We all worked full-stack, but my main focus was on building much of the back end functionality for the API requests, and much of the full-stack functionality for authentication and saving locations to the user profile.</p>
        </div>
      }
      {!worth
        ? <> </>
        : <div className="blurb-holder">
          <a href="https://isitworthit-hb.netlify.app/" target="blank"><h2>Is It Worth It? [README]</h2></a>
          <p className="project-blurb">48-hour hackathon. As a pair, we built out a <strong>React</strong> app using two third-party APIs, <a href="https://restcountries.eu/" target="blank">RESTCountries</a> and <a href="https://travelbriefing.org/api" target="blank">TravelBriefing.org</a>. Our app offers travel advice to users attempting to decide where to take their first post-lockdown holiday. This project was a great introduction to the finer points of pair programming, and multi-developer version control.</p>
        </div>
      }
      {!tetris
        ? <> </>
        : <div className="blurb-holder">
          <a href="https://paddycello.github.io/SEI-Project-One/" target="blank"><h2>Soviet Tetris [README]</h2></a>
          <p className="project-blurb">A one-week solo project, building a grid-based game in vanilla <strong>JavaScript</strong> without recourse to HTML canvas. This was a great opportunity to stretch my existing JavaScript skills, as well as expanding my palate of skills with <strong>CSS</strong> animations and <strong>HTML</strong> audio.</p>
        </div>
      }
    </>
  )
}

export default Projects
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

const Interests = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <>
      <h1>Interests</h1>
      <Container className="interest-container">
        <div className="gardening"></div>
        <Container className="interest-text">
          <h2>Gardening</h2>
          <p>I spent much of last year growing vegetables on a large scale, to the extent that my family were virtually self-sufficient in the summer months.</p>
        </Container>
      </Container>
      <Container className="interest-container">
        <Container className="interest-text">
          <h2>Baking</h2>
          <p>I have been making my own bread for years, and love to experiment with adjustments to the recipes I use; it is also fun to involve my son with the whole process.</p>
        </Container>
        <div className="baking"></div>
      </Container>
      <Container className="interest-container">
        {!clicked ?
          <Button onClick={handleClick} className="yoga-button">Click here to see my yoga poses!</Button>
          :
          <h3>You DO NOT want to see that.</h3>
        }
        <Container className="interest-text">
          <h2>Yoga</h2>
          <p>I try to start and end every day with yoga, as I recognize the importance of keeping myself physically fit and maximizing my ease of mobility, and that this will in turn help me mentally and emotionally.</p>
        </Container>
      </Container>
      <p>Also, given my pre-coding life, it would be remiss of me not to mention that I enjoy doing this as well:</p>
      <div className="cello-case">
        <iframe className="gagliano" width="560" height="315" src="https://www.youtube.com/embed/GZUtgRMPl-E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </>
  )
}

export default Interests
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const YayHome = () => {

  return (
    <>
      <h1 className="yay">Look, so crazy!</h1>
      <Link to="/">
        <Button className="yay">Sensible Mode</Button>
      </Link>
    </>
  )
}

export default YayHome
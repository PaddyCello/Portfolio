import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1>Look, a Home page!</h1>
      <Link to='/skills'>
        <Button variant="success">In you go</Button>{' '}
      </Link>
    </>
  )
}

export default Home
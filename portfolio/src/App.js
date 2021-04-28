import React from 'react'
import MyNavbar from './MyNavbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Interests from './Interests'
import Contact from './Contact'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <div>
          <MyNavbar />
          <Route path = '/skills'>
            <Skills />
          </Route>
          <Route path = '/projects'>
            <Projects />
          </Route>
          <Route path = '/interests'>
            <Interests />
          </Route>
          <Route path = '/contact'>
            <Contact />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App

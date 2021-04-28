import React from 'react'

const Skills = () => {

  return (
    <>
      <h1>{'Technologies I\'ve Used'}</h1>
      <ul>
        <h2>Front end</h2>
        <li><div className="react skill"></div><p>React Hooks</p></li>
        <li><div className="javascript skill"></div><p>JavaScript</p></li>
        <li><div className="html skill"></div><p>HTML</p></li>
        <li><div className="css skill"></div><p>CSS</p></li>
        <li><div className="react-bootstrap skill"></div><p>React-Bootstrap</p></li>
        <li><div className="mapbox skill"></div><p>Mapbox</p></li>
        <li><div className="sass skill"></div><p>Sass</p></li>
        <li><div className="bulma skill"></div><p>Bulma</p></li>
      </ul>
      <ul>
        <h2>Back end</h2>
        <li><div className="express skill"></div><p>Express</p></li>
        <li><div className="node skill"></div><p>Node</p></li>
        <li><div className="python skill"></div><p>Python</p></li>
        <li><div className="mongoose skill"></div><p>Mongoose</p></li>
        <li><div className="django skill"></div><p>Django</p></li>
        <li><div className="ruby skill"></div><p>Ruby</p></li>
      </ul>
      <ul>
        <h2>Databases</h2>
        <li><div className="mongodb skill"></div><p>MongoDB</p></li>
        <li><div className="postgresql skill"></div><p>PostgreSQL</p></li>
        <li><div className="tableplus skill"></div><p>Table Plus</p></li>
      </ul>
      <ul>
        <h2>Version Control</h2>
        <li><div className="github skill"></div><p>Git and GitHub</p></li>
      </ul>
    </>
  )
}

export default Skills
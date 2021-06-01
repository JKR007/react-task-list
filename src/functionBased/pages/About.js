import React from 'react';
import {Route, Link, useRouteMatch} from 'react-router-dom';
import SinglePage from './SinglePage'

const About = () => {
  const {url, path} = useRouteMatch()
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-dev`}>About Dev</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  )
}

export default About;
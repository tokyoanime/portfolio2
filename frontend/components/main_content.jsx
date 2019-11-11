import React from 'react';
import Intro from '../content/intro';
import About from '../content/about';
import Projects from '../content/projects';
import Experience from '../content/experience';
import Contact from '../content/contact';

export default class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content-container">
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    )
  }
}
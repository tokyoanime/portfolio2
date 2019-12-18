import React from 'react';

export default class TopNav extends React.Component {
  render() {
    return (
      <div className="top-nav-container">
        <nav className="top-nav-bar">
          <div className="top-nav-logo">
            Logo Here
          </div>
          <div className="top-nav-links">
            <ol className="top-nav-links-list">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>                
              </li>
              <li>
                <a href="/#experience">Experience</a>                
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ol>
              <a 
                href="/assets/pdf/lwin_ye_resume.pdf"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer">
              <div className="top-nav-resume btn">
                Resume
              </div>
              </a>
          </div>
          <div className="top-nav-hamburger">
            <i className="material-icons" id="sort">menu</i>
          </div>
        </nav>
        
      </div>
    )
  }
}
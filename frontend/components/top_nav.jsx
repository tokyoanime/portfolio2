import React from 'react';

export default class TopNav extends React.Component {
  render() {
    return (
      <div className="top-nav-container">
        <div className="top-nav-logo">
          Logo Here
        </div>
        <div className="top-nav-links">
          <ol className="top-nav-links-list">
            <li>
              About
            </li>
            <li>
              Projects
            </li>
            <li>
              Experience
            </li>
            <li>
              Contact
            </li>
          </ol>
            <a 
              href="/assets/pdf/lwin_ye_resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
            <div className="top-nav-resume">
              Resume
            </div>
            </a>
        </div>
        <div className="top-nav-hamburger">
          <i className="material-icons" id="sort">menu</i>
        </div>
      </div>
    )
  }
}
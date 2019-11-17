import React from 'react';

export default class EmailBar extends React.Component {
  render() {
    return (
      <div className="email-bar-container">
        <a href="mailto:lwin.ye.contact@gmail.com" className="email-link-vertical">lwin.ye.contact@gmail.com</a>
        <div className="sidebar-vertical-break"></div>
      </div>
    )
  }
}
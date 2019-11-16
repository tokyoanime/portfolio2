import React from 'react';

export default class EmailBar extends React.Component {
  render() {
    return (
      <div className="email-bar-container">
          <a href="mailto:lwin_ye@yahoo.com" className="email-link-vertical">lwin_ye@yahoo.com</a>
        <div className="sidebar-vertical-break"></div>
      </div>
    )
  }
}
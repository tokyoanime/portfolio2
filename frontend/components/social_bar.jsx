import React from 'react';
import IconGithub from '../icons/icon_github';
import IconLinkedIn from '../icons/icon_linkedin';

export default class SocialBar extends React.Component {
  render() {
    return (
      <div className="social-bar-container">
        <IconGithub />
        <IconLinkedIn />
        <div className="sidebar-vertical-break"></div>
      </div>
    )
  }
}
import React from 'react';
import MainContent from './main_content';
import EmailBar from './email_bar';
import SocialBar from './social_bar';
import TopNav from './top_nav';

class Splash extends React.Component {
  render() {
    return(
      <div className="index-container">
        <TopNav />
        <SocialBar />
        <EmailBar />
        <MainContent />
      </div>
    )
  }
}

export default Splash;
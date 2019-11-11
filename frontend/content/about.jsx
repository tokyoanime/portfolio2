import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="heading">
        About Me
      </div>
      <div className="about-container">
        <div className="about-description">
          <p>
            Hi there! I'm Lwin Ye, a sales account manager turned software engineer based in San Francisco Bay Area. I like building awesome websites and applications.  I develop exceptional websites and web apps that provide pixel-perfect user interfaces with efficient and modern backend.
              </p>
          <p>
            Here are a few technologies I'm proficient in:
          </p>
        </div>
        <ul className="about-skills">
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>React</li>
          <li>Redux</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <div className="about-pic">
          <img src="/assets/images/profile_pic_top_crop.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default About;
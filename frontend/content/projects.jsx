import React from 'react';

const Projects = () => {
  return (
    <section className="projects-container content-container" id="projects">
      <div className="heading">
        Some Things I've Built
      </div>
      <div className="projects-content-container">
        <div className="project-first" id="single-project">
          <div className="project-pic">
            <img src="/assets/images/yeet.jpg" alt="" />
          </div>
          <div className="project-description right-description">
            <div className="project-header">
              Featured Project
            </div>
            <div className="project-title">
              Yeet
            </div>
            <p>
              Yeet is a full-stack web application similar to Yelp.com. Yeet allows user to search for ramen and boba milk tea places in San Francisco Bay Area.
            </p>
            <div className="project-technologies">
              <ul className="project-technologies-list">
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>React/Redux</li>
                <li>JavaScript</li>
                <li>Ajax</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
            <div className="project-links">
              <a href="https://github.com/tokyoanime/yeet">Github</a>
              <a href="https://yeet-fullstack.herokuapp.com/">
                <i className="material-icons">exit_to_app</i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-second"  id="single-project">
          <div className="project-pic">
            <img src="/assets/images/stack_bricks.jpg" alt="" />
          </div>
          <div className="project-description  right-description">
            <div className="project-header">
              Featured Project
            </div>
            <div className="project-title">
              Stack Bricks
            </div>
            <p>
              Stack Bricks is a JavaScript game inspired by the classic game Tetris.
            </p>
            <div className="project-technologies">
              <ul className="project-technologies-list">
                <li>React</li>
                <li>HTML5 Canvas</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-links">
              <a href="https://github.com/tokyoanime/stack_bricks">Github</a>
              <a href="https://tokyoanime.github.io/stack_bricks/">
                <i className="material-icons">exit_to_app</i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-third"  id="single-project">
          <div className="project-pic">
            <img src="/assets/images/wirr.jpg" alt="" />
          </div>
          <div className="project-description  right-description">
            <div className="project-header">
              Featured Project
            </div>
            <div className="project-title">
              WiRR (Wikipedia Reliability Rater)
            </div>
            <p>
              WiRR is an application to help determine the reliability of a given Wikipedia article. The reliability of the article is determined by our custom made reliability index. The reliability index is determined mainly by citations.
            </p>
            <div className="project-technologies">
              <ul className="project-technologies-list">
                <li>React/Redux</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="project-links">
              <a href="https://github.com/michaeltorres1/WiRR">Github</a>
              <a href="http://www.wikipediarr.com/">
                <i className="material-icons">exit_to_app</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
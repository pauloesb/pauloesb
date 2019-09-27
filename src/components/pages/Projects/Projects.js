import React from 'react';
import reveal from '../../HOC/reveal';
import classes from './Projects.module.css';
import project1 from '../../assets/project_1.png';
import project2 from '../../assets/project_2.png';
import project3 from '../../assets/project_3.png';

const projects = () => (
  <div id="projects" className={`${classes.projectsContainer} container`}>
    <h1 className="title">Projects</h1>
    <div className={`${classes.spaceEvenly} is-flex`}>
      <div className="column is-4">
        <div className={`${classes.cardBg} card`}>
          <div className="card-image">
            <figure className="image is-4by1">
              <img src={project1} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-6">My Old Portfolio</p>
            <hr />
            <p
              className={`${classes.configContent} ${classes.first} content is-small`}
            >
              My first Portfolio done purely along with <b>Ruby on Rails 5.2</b>
              , <b>jQuery</b> and <b>Bootstrap</b>, it was one of my first
              projects to come up to learn more about Ruby on Rails.
            </p>
          </div>
          <div className={classes.customLink}>
            <a
              target="_blank"
              href="https://pauloesb-portfolio.herokuapp.com"
              rel="noopener noreferrer"
            >
              Visit my Project
            </a>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <div className={`${classes.cardBg} card`}>
          <div className="card-image">
            <figure className="image is-4by1">
              <img src={project2} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-6">Exams Courtesy Platform</p>
            <hr />
            <p className={`${classes.configContent} content is-small`}>
              Working as a Ruby on Rails dev at Novatics I had the chance to
              build this whole platform from scratch, using{' '}
              <b>Ruby on Rails 5.2</b>, <b>jQuery</b>, and{' '}
              <b>Flexbox custom CSS</b> along with a dedicated designer and
              responsive design, using Zeplin and mocks to help me achieve the
              result.
            </p>
          </div>
          <div className={classes.customLink}>
            <a
              target="_blank"
              href="https://cortesias.institutosabin.org.br"
              rel="noopener noreferrer"
            >
              Visit my Project
            </a>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <div className={`${classes.cardBg} card`}>
          <div className="card-image">
            <figure className="image is-4by1">
              <img src={project3} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-6">Time Tracking Platform</p>
            <hr />
            <p className={`${classes.configContent} content is-small`}>
              Another project that I worked as can be seen is the Time Tracking
              Platform called Labor from Novatics, I helped by developing the
              whole new face design page along the designers of the company
              using <b>CSS Grid</b> and connecting to the current platform using{' '}
              <b>AngularJS</b> and <b>Rails 5.2 API</b>.
            </p>
          </div>
          <div className={classes.customLink}>
            <a
              target="_blank"
              href="https://getlabor.com.br"
              rel="noopener noreferrer"
            >
              Visit my Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default reveal(projects);

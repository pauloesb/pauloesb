import React from 'react';
import reveal from '../../HOC/reveal';
import RdChart from '../../UI/RdChart';
import classes from './Skills.module.css';

const skills = () => (
  <div id="skills" className={`${classes.skillsContainer} container`}>
    <h1 className="title">Skills</h1>
    <div className="columns">
      <div className="column is-6">
        <RdChart />
      </div>
      <div className={`${classes.skillsTextContainer} column is-4 is-offset-1`}>
        <div className="container">
          <p className={`${classes.skillsText} content`}>
            My strong is Ruby on Rails where I love the concepts of DRY
            (Don&#39;t Repeat Yourself) and CoC (Convention over Configuration),
            also I&#39;m currently focused to learn React and React Native as
            Front End solution. But I also have experience with Java EE along
            with JBoss, JSF, Hibernate and basic of Spring Boot. My focus today
            is to consolidate my knowledge in React along with GraphQL and
            master the knowledge of a Full Stack Developer.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default reveal(skills);

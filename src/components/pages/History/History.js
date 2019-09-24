import React from 'react';
import { StyleRoot } from 'radium';
import Timeline from 'react-dual-timeline';
import classes from './History.module.css';

const history = () => {
  return (
    <div id="history" className={`${classes.historyContainer} container`}>
      <h1 className="title"> History</h1>
      <StyleRoot>
        <Timeline activeColor="white">
          <div icon="1&deg;">
            <h1 className="title is-size-5">Graduated as Software Engineer</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              March, 2010 until July, 2017
            </h2>
            <p className="content is-size-7">
              I&#39;ve started my undergrad course at{' '}
              <b>Universidade de Brasília</b>, Brazil focused on Software
              Engineer.
            </p>
          </div>
          <div icon="2&deg;">
            <h1 className="title is-size-5">Bachelor Interchange at U.K</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              September, 2014 until September, 2015
            </h2>
            <p className="content is-size-7">
              I&#39;ve participated of a government&#39;s program called Science
              without Borders, that gave me an opportunity to do an interchange
              at <b>Brunel University London</b> in London UK, to study part of
              my undergrad course overseas.
            </p>
          </div>
          <div icon="3&deg;">
            <h1 className="title is-size-5">Jr Programmer at Capgemini</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              April, 2016 until October, 2016
            </h2>
            <p className="content is-size-7">
              My first job as a Java Developer, outsourced for Capgemini at
              Central Bank of Brazil. Main tasks were, maintenance and evolution
              of software and give support to the users by using the bank&#39;s
              platform, that uses EMC Documentum.
            </p>
          </div>
          <div icon="4&deg;">
            <h1 className="title is-size-5">Data Analyst at Comunix</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              October, 2016 until July, 2017
            </h2>
            <p className="content is-size-7">
              In this place I had to work as developer and DBA, by providing API
              solutions in PHP to connect to their Omnichannel solutions into
              the Pentaho BI. Also, transforming relational databases into
              multidimensional databases for OLAP operations.
            </p>
          </div>
          <div icon="5&deg;">
            <h1 className="title is-size-5">Ruby on Rails Dev at BetterNow</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              October, 2017 until January, 2018
            </h2>
            <p className="content is-size-7">
              I&#39;ve got a position as Ruby on Rails developer in a startup
              called BetterNow in <b>Denmark</b>. My tasks were to improve test
              coverage and come up new functionalities to their platform using
              RoR 5.2 and testing tools like RSpec, Capybara, Cucumber.
            </p>
          </div>
          <div icon="6&deg;">
            <h1 className="title is-size-5">Software Engineer at Novatics</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              July, 2018 until October, 2018
            </h2>
            <p className="content is-size-7">
              In Brazil, I had the chance to work for Novatics as a Software
              Engineer by developing applications in Ruby on Rails. I had the
              chance to lead a small project along with a designer to come up
              with a platform for a company, from scracth until the delivery of
              the product.
            </p>
          </div>
          <div icon="7&deg;">
            <h1 className="title is-size-5">Freelance for BoominGroup</h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              October, 2018 until June, 2019
            </h2>
            <p className="content is-size-7">
              After Novatics, I started to work as a freelance for Boomingroup
              by giving maintenance to their client&#39;s websites using
              Wordpress, Jupiter, and PHP.
            </p>
          </div>
          <div icon="8&deg;">
            <h1 className="title is-size-5">
              Development Analyst at
              <br />
              Cast Group
            </h1>
            <h2 className={`${classes.boxSubtitle} is-size-7 subtitle`}>
              August, 2019 - Current Workplace
            </h2>
            <p className="content is-size-7">
              As a Java Developer I work by giving maintenance and evolution to
              the Caixa Economica Bank systems, using JSF, JSP, Angular, Struts
              and other legacy frameworks. Also, I develop some features for the
              company&#39;s Redmine using Ruby on Rails.
            </p>
          </div>
        </Timeline>
      </StyleRoot>
    </div>
  );
};

export default history;

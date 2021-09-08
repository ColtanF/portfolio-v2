import React from "react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import TechSkills from "./TechSkills";
import experience from "./data/experience";
import aboutInfo from "./data/aboutInfo";

const About = () => {
  return (
    <section className="ui vertical segment container">
      <h2>About me</h2>
      <div className="ui stackable grid">
        <div className="row">
          <div className="eight wide column ui vertical stripe">
            {aboutInfo.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="eight wide column">
            <strong>Technical strengths:</strong>
            <TechSkills />
            <p>
              See my <a href="resume.html">resume</a> for more tech I've worked
              with.
            </p>
          </div>
        </div>
        <strong>Experience:</strong>
        <Experience />
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <div className="row">
      {experience.map((item, index) => {
        const { position, where, when } = item;

        return (
          <div key={index} className="five wide column">
            <div className="ui raised segment">
              <strong>{position}</strong>
              <p>{where}</p>
              <i>{when}</i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;

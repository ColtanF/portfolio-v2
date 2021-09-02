import React from "react";
import projectInfo from "./data/projectInfo";
import { Dimmer, Image, Button } from "semantic-ui-react";

const Projects = () => {
  return (
    <section className="ui segment vertical container">
      <h2>Projects</h2>
      <div className="ui cards centered">
        {projectInfo.map((item, index) => {
          return <Project project={item} key={index} />;
        })}
      </div>
    </section>
  );
};

const Project = ({ project }) => {
  const { name, info, image, codeUrl, projectUrl } = project;
  const [active, setActive] = React.useState(false);

  const content = (
    <div className="ui transition">
      <div className="content">
        <div className="center">
          <a href={codeUrl}>
            <Button inverted>Learn More</Button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="ui special raised card">
      <Dimmer.Dimmable
        as={Image}
        blurring
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        src={image}
      />
      <div className="content">
        <div className="header">{name}</div>
        <div className="descrpition">
          <p>{info}</p>
        </div>
      </div>
      <div className="extra content">
        <a
          href={codeUrl.length > 0 ? codeUrl : "#"}
          target="_blank"
          rel="noreferrer"
          className={codeUrl.length > 0 ? "ui button" : "ui button disabled"}
        >
          Code
        </a>
        <a
          href={projectUrl.length > 0 ? projectUrl : "#"}
          target="_blank"
          rel="noreferrer"
          className={projectUrl.length > 0 ? "ui button" : "ui button disabled"}
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Projects;

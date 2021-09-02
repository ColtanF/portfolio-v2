import React from "react";
import "./App.css";
import {
  SiCplusplus,
  SiJavascript,
  SiJava,
  SiPython,
  SiFlask,
  SiReact,
  SiCsharp,
  SiPowershell,
  SiGit,
  SiSubversion,
  SiVmware,
  SiVisualstudio,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiWindows,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const TechSkills = () => {
  const iconSize = 40;
  return (
    <div className="ui stackable grid exp-holder">
      <div className="two wide column">
        <SiCplusplus size={iconSize} />
      </div>
      <div className="two wide column">
        <SiPython size={iconSize} />
      </div>
      <div className="two wide column">
        <SiJava size={iconSize} />
      </div>
      <div className="two wide column">
        <SiJavascript size={iconSize} />
      </div>
      <div className="two wide column">
        <SiFlask size={iconSize} />
      </div>
      <div className="two wide column">
        <SiReact size={iconSize} />
      </div>
      <div className="two wide column">
        <SiCsharp size={iconSize} />
      </div>
      <div className="two wide column">
        <SiPowershell size={iconSize} />
      </div>
      <div className="two wide column">
        <SiGit size={iconSize} />
      </div>
      <div className="two wide column">
        <SiSubversion size={iconSize} />
      </div>
      <div className="two wide column">
        <SiVmware size={iconSize} />
      </div>
      <div className="two wide column">
        <SiVisualstudio size={iconSize} />
      </div>
      <div className="two wide column">
        <SiMysql size={iconSize} />
      </div>
      <div className="two wide column">
        <SiPostgresql size={iconSize} />
      </div>
      <div className="two wide column">
        <SiLinux size={iconSize} />
      </div>
      <div className="two wide column">
        <SiWindows size={iconSize} />
      </div>
      <div className="two wide column">
        <SiHeroku size={iconSize} />
      </div>
      <div className="two wide column">
        <SiNetlify size={iconSize} />
      </div>
    </div>
  );
};

export default TechSkills;

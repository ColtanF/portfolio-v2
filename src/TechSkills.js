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
    <div className="column icon-container">
      <SiCplusplus size={iconSize} className="icon" />
      <SiPython size={iconSize} className="icon" />
      <SiJava size={iconSize} className="icon" />
      <SiJavascript size={iconSize} className="icon" />
      <SiFlask size={iconSize} className="icon" />
      <SiReact size={iconSize} className="icon" />
      <SiCsharp size={iconSize} className="icon" />
      <SiPowershell size={iconSize} className="icon" />
      <SiGit size={iconSize} className="icon" />
      <SiSubversion size={iconSize} className="icon" />
      <SiVmware size={iconSize} className="icon" />
      <SiVisualstudio size={iconSize} className="icon" />
      <SiMysql size={iconSize} className="icon" />
      <SiPostgresql size={iconSize} className="icon" />
      <SiLinux size={iconSize} className="icon" />
      <SiWindows size={iconSize} className="icon" />
      <SiHeroku size={iconSize} className="icon" />
      <SiNetlify size={iconSize} className="icon" />
    </div>
  );
};

export default TechSkills;

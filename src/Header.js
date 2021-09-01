import React from "react";
// import "./App.css";
import "semantic-ui-css/semantic.min.css";

function Header() {
  return (
    <div className="ui vertical masthead segment inverted">
      <div className="ui middle stackable aligned 2 column grid container">
        <div className="eight wide column">
          <img
            src="https://pbs.twimg.com/profile_images/1012836310409572352/gDd2epmU_400x400.jpg"
            alt="My profile."
            className="ui circular image"
          />
        </div>
        <div className="eight wide column middle aligned header">
          <h1 className="ui header inverted">Hi, I'm Coltan.</h1>
          <h2 className="ui header inverted">
            I'm a software engineer based in Austin, TX.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;

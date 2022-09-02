import React from "react";
import ProjectsCards from "./ProjectCards";

function Main() {
  return (
    <div className="Main" id="Main">
      <div className="aboutMeText">
        <h1>Hey!</h1>
        <h3>My Projects:</h3>
        <p>i hope you like it so far</p>
      </div>
      <div>
        <ProjectsCards/>
      </div>
    </div>
  );
}

export default Main;
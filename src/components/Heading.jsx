import React from "react";
import meinFoto from "../images/fotoDavid.JPG"
import TimeBar from "./TimeNavBar";

function Heading() {
  return (
    <div>
    {TimeBar()}
      <div className="row headerRow">
        <div className="col-6 col-12-sm fotoCol zoom ">
          <img
            className="fotoDavid"
            src= {meinFoto}
            alt="Foto David"
          />
        </div>
        <div className="col-6 col-12-sm textCol">
          <h1 className="textCol">Welcome!</h1>
          <h3 className="textColSecond">my Name is David Zoike</h3>
        </div>
      </div>
    </div>
  );
}

export default Heading;

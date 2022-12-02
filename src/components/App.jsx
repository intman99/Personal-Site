import React from "react";
import NewNavbar from "./Navbar";
import Heading from "./Heading";
import Footer from "./Footer";
import Main from "./Main";
import ReactGA from 'react-ga';
  const TRACKING_ID = "G-ZQWHQPRQVK"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="body">
      <NewNavbar />
      <Heading />
      <Main />
      <div id="contactme">
        <Footer />
      </div>
    </div>
  );
}

export default App;

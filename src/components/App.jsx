import React from "react";
import NewNavbar from "./Navbar";
import Heading from "./Heading";
import Footer from "./Footer";
import Main from "./Main";

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

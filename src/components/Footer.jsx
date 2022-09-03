import React from "react";


const Jahr = new Date().getFullYear()

function Footer() {
  return (
    <div className="Footer">
      <div>
        <h1>Contact Me!</h1>
      </div>
      <div className="mailFavDiv">
        <a href="mailto:divad.ekioz@web.de">
          <i className="fa-solid fa-2xl mailFav fa-envelope"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/david-zoike-aa10921b2/"><i class="fa-brands fa-xl socialFav fa-linkedin"></i></a>
        <a href="https://github.com/intman99"><i class="fa-brands fa-xl socialFav fa-github"></i></a>
      </div>
      <div className="Jahr">
        David Zoike {Jahr}
      </div>
    </div>
  );
}

export default Footer;
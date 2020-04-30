import React from "react"

const Nav = props => (

  <nav id="nav">
    <ul>
      <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
      <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
      <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
      <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
    </ul>
  </nav>

)

export default Nav

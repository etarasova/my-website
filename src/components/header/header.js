import React from "react"
import Logo from "./logo"
import Nav from "./nav"
import Social from "./social"

const Header = props => (

  <div id="header">

    <div className="top">
      <Logo/>
      <Nav/>
    </div>

    <div className="bottom">
      <Social/>
    </div>

  </div>
)

export default Header

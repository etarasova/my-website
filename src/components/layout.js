import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import * as loadScript from "simple-load-script"

import favicon from "../../static/favicon.ico.png"
import Header from "./header/header"
import Footer from "./footer"

class Layout extends React.Component {

  componentDidMount() {
    void loadScript({
      url: withPrefix("js/main.js"),
      inBody: true
    })
  }

  render() {
    return (
      <>
        <Helmet>
          <link rel="icon" href={favicon}/>
          <title>{`Elena Tarasova | ${this.props.pageTitle}`}</title>
        </Helmet>
        <div className="is-preload">
          <Header/>
          <div id="main">
            {this.props.children}
          </div>
          <Footer/>
        </div>

      </>
    )
  }
}

export default Layout

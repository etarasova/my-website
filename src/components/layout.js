import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import * as loadScript from "simple-load-script"

import favicon from "../../static/favicon.ico.png"
import Header from "./header/header"
import Footer from "./footer"
import {getDeviceClasses} from "../utils";

class Layout extends React.Component {

  componentDidMount() {
    void loadScript({
      url: withPrefix("js/main.js"),
      inBody: true
    });

    // see https://github.com/gatsbyjs/gatsby/issues/14601
    this.deviceClasses = getDeviceClasses();
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <Helmet htmlAttributes={{"class": this.deviceClasses}}>
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

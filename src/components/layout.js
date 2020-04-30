import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../../static/favicon.ico.png'
import Header from "./header/header"
import Footer from "./footer"

export default ({ pageTitle, children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>{`Elena Tarasova | ${pageTitle}`}</title>
    </Helmet>
    <div className="is-preload">
      <Header/>
      <div id="main">
        {children}
      </div>
      <Footer/>
    </div>

  </>
)

import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import Header from "./header/header"
import Footer from "./footer"

export default ({ pageTitle, children }) => (
  <>
    <Helmet>
      <title>{`Elena Tarasova | ${pageTitle}`}</title>
      <script src={'https://code.jquery.com/jquery-3.4.1.min.js'}
              integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
              crossOrigin="anonymous"
              type="text/javascript" />
      <script src={withPrefix('js/jquery.scrolly.min.js')} type="text/javascript" />
      <script src={withPrefix('js/jquery.scrollex.min.js')} type="text/javascript" />
      <script src={withPrefix('js/browser.min.js')} type="text/javascript" />
      <script src={withPrefix('js/breakpoints.min.js')} type="text/javascript" />
      <script src={withPrefix('js/util.js')} type="text/javascript" />
      <script src={withPrefix('js/main.js')} type="text/javascript" />
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

import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Contact from "../components/contact"


export default () =>
  <Layout pageTitle={`Welcome`}>

    <Intro/>
    <About/>
    <Portfolio/>
    <Contact/>

  </Layout>


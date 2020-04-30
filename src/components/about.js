import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
   query {
        fileName: file(relativePath: { eq: "pic08.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1400,
              maxHeight: 400,
              cropFocus: CENTER,
              grayscale: false,
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  return <Img fluid={data.fileName.childImageSharp.fluid} alt=""/>
}

const About = () => (
  <section id="about" className="three">
    <div className="container">

      <header>
        <h2>About Me</h2>
      </header>

      <div className="image featured"><AboutImage/></div>

      <p>Hi, I am Elena. I moved to New York from Saint-Petersburg, Russia in 2017.
        In the past, I was a multi-tasking PR Project Manager with 5+ years of experience.
        I have good communication skills and enjoy working in teams of all sizes.
        You may find my resume <strong><a href="#">here</a></strong>.</p>

      <p>Currently I am working toward my CS degree in Brooklyn College. I would like to
        become an agile and advanced software developer. I have some experience with <strong>HTML/CSS,
          Javascript and Java</strong>. I really enjoy working on solutions that make me think and teach me something new. </p>

    </div>
  </section>

)

export default About

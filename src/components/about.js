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
        In the past, I was a multi-tasking PR Project Manager with 5+ years of experience, so I have great communication and organizational skills. 
        I can follow orders and work as a team without any problems but I also have the ability to work alone and still meet tight deadlines.

        You may find my resume <strong><a href="ElenaTarasova_Resume">here</a></strong>.</p>

      <p>I recently graduated from Brooklyn College with a bachelor&#39;s degree in Computer Science. I have outstanding problem skills with the ability to work with technical and abstract concepts efficiently. 
      I also have extensive knowledge of <strong> Python, Java, JavaScript, HTML5, and CSS </strong>. I really enjoy working on solutions that make me think and teach me something new. </p>

    </div>
  </section>

)

export default About

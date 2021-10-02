import React from "react"

class Intro extends React.Component {

  render() {
    return (

      <section id="top" className={`one dark cover`}>
        <div className="container">

          <header>
            <h2 className="alt">Hi, I'm <strong>Elena</strong>. I am a recent <strong>Computer Science </strong>
              graduate based in <strong>New York</strong> who is looking for exciting and challenging
              <strong> full-time </strong> job.</h2>
          </header>

          <footer>
            <a href="#about" className="more scrolly">Learn More</a>
          </footer>

        </div>
      </section>
    )
  }
}

export default Intro

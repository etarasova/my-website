import React from "react"

const Contact = props => (

  <section id="contact" className="four">
    <div className="container">

      <header>
        <h2>Let's Get In Touch</h2>
      </header>

      <p>I am currently exploring new opportunities that are relevant to my future career
        and that can sharpen my skills in programming. Feel free to use this form to get in touch.</p>

      <form method="post" action="https://formspree.io/xqkyzwpv">
        <div className="row">
          <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" required/></div>
          <div className="col-6 col-12-mobile"><input type="email" name="email" placeholder="Email" required/></div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <div className="col-12">
            <input type="submit" value="Send Message"/>
          </div>
        </div>
      </form>

    </div>
  </section>

)

export default Contact

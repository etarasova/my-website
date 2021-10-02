import React from "react"

const Portfolio = props => (

  <section id="portfolio" className="two">
    <div className="container">

      <header>
        <h2>Portfolio</h2>
      </header>

      <p>My portfolio is work in progress. Stop by later to see the projects I am working on.</p>

      <div className="row">
        <div className="col-4 col-12-mobile">
          <article className="item">
            {/*<a href="#" className="image fit"><img src="images/pic02.jpg" alt=""/></a>*/} 
            <header>
              <a href="https://github.com/etarasova/SimpleToDo" target="_blank">Simple ToDo</a>
              <h3>Java</h3>
            </header>
          </article>
          //<article className="item">
            //{/*<a href="#" className="image fit"><img src="images/pic03.jpg" alt=""/></a>*/}
            //<header>
              //<h3>Project 4</h3>
            //</header>
          //</article>
        </div>
        <div className="col-4 col-12-mobile">
          <article className="item">
            {/*<a href="#" className="image fit"><img src="images/pic04.jpg" alt=""/></a>*/}
            <header>
              <a href="https://github.com/etarasova/price-tracker" target="_blank">Price Tracker</a>
              <h3>Python</h3>
            </header>
          </article>
          //<article className="item">
            //{/*<a href="#" className="image fit"><img src="images/pic05.jpg" alt=""/></a>*/}
            //<header>
              //<h3>Project 5</h3>
            //</header>
          //</article>
        </div>
        <div className="col-4 col-12-mobile">
          <article className="item">
            {/*<a href="#" className="image fit"><img src="images/pic06.jpg" alt=""/></a>*/}
            <header>
              <a href="https://github.com/etarasova/hacker-news" target="_blank">Hacker News</a>
              <h3>Python</h3>
            </header>
          </article>
          //<article className="item">
            //{/*<a href="#" className="image fit"><img src="images/pic07.jpg" alt=""/></a>*/}
            //<header>
              //<h3>Project 6</h3>
            //</header>
          //</article>
        </div>
      </div>

    </div>
  </section>

)

export default Portfolio

import React from "react";


const Home = () => {
  return <main>

    <section className="hero">
      <div className="hero-content">
        <h1>&#60;Hello, my name is Deniz. I’m <br /> a button presser./&gt;</h1>
        <p>I write code, think about data, and create digital experiences.
          <br />
          Currently Senior Journalist-Engineer at The Pudding.
          <br />
          <br />
          Listen to podcasts I've been on, or read articles I've written.</p>
      </div>
    </section>

    <section className="content">

      <section className="section-divider">
        <div className="divider">
          <hr />
        </div>

        <h2>SKILLS</h2>

        <div className="project-content">
          <div>
            <h3>Programming</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1"></div>
        </div>

        <h3>Software and Tools</h3>
        <ul>
          <li className="tools">Visualisation of Data</li>
          <li className="tools">Data Handling and Analysis</li>
          <li className="tools">GUI</li>
          <li className="tools">API</li>
          <li className="tools">React</li>
          <li className="tools">PyCharm</li>
          <li className="tools">Eclipse</li>
          <li className="tools">WebStorm</li>
          <li className="tools">Visual Studio Code</li>
          <li className="tools">Office</li>
          <li className="tools">Version Control Systems</li>

        </ul>

      </section>
      <section className="section-divider">
        <div className="divider">
          <hr />
        </div>

        <h2>PORTFOLIO</h2>

        <div className="project-content">
          <div>
            <h3>Programming</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1"></div>
        </div>

        <h3>Software and Tools</h3>
        {/* <div className="portfolio-container">
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
        </div> */}

        <div class="grid-container">
          <button class="A">Testing</button>
          <button class="B">Testing</button>
          <button class="C">Testing</button>
          <button class="D">Testing</button>
          <button class="E">Testing</button>
          <button class="F">Testing</button>
        </div>


      </section>

    </section>



  </main>
};

export default Home;

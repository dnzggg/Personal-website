import React from "react";
import Tag from "./Tag";

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
          <div className="template-1" />
        </div>

        <h3>Software and Tools</h3>
        <ul>
          <Tag text={"Visualisation of Data"} />
          <Tag text={"Data Handling and Analysis"} />
          <Tag text={"GUI"} />
          <Tag text={"API"} />
          <Tag text={"React"} />
          <Tag text={"PyCharm"} />
          <Tag text={"Eclipse"} />
          <Tag text={"WebStorm"} />
          <Tag text={"Visual Studio Code"} />
          <Tag text={"Office"} />
          <Tag text={"Version Control Systems"} />
        </ul>

      </section>
      <section className="section-divider">
        <div className="divider">
          <hr />
        </div>

        <h2>PROJECTS</h2>

        <div className="portfolio-container">
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
        </div>

        <div className="project-content">
          <div>
            <h3>Project 1</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <iframe width="400" height="200" src="https://www.youtube.com/embed/PKW6osg67lM" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>

        <div className="project-content2">
          <div>
            <h3>Project 2</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <iframe width="400" height="200" src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>

        <div className="project-content">
          <div>
            <h3>Project 3</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1" />
        </div>

        <div className="project-content2">
          <div>
            <h3>Project 4</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1" />
        </div>

      </section>

    </section>

  </main>
};

export default Home;

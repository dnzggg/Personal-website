import React from "react";
import Tag from "./Tag";
import Icons from "./Icons"

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

        <div className="icon-content">
          <div>
            <h3>Programming</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <Icons />
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

        <div className="portfolio-container-1">
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
          <button className="portfolio-item">Example</button>
        </div>
      </section>
    </section>


    <section>
      <div className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Project 1</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <iframe
            title="My Daily Marathon Tracker"
            width="400"
            height="200"
            src="https://www.youtube.com/embed/PKW6osg67lM" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </div>

      <div className="project-content-2">
        <div>
          <h3>Project 2</h3>
          <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          <button className="project-button">See More</button>
        </div>
        <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>

      <div className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Project 3</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
            <button className="project-button">See More</button>
          </div>
          <div className="template-1" />
        </div>
      </div>

      <div className="project-content-2">
        <div>
          <h3>Project 4</h3>
          <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
        </div>
        <div className="template-1" />
      </div>
    </section>

    <div className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Project 5</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1" />
        </div>
      </div>

    <section className="content">
    <section className="section-divider">
        <div className="divider">
          <hr />
        </div>
        <h2>CONTACT ME</h2>

        <form>
          <input className="input" type="text" placeholder="Your Name"/>
          <input className="input" type="email" placeholder="Your Email"/>
          <input className="input" type="text" placeholder="Your Message..."/>
          <button>Send Message</button>
        </form>

      </section>
    </section> 


  </main>
};

export default Home;

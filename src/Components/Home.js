import React, {useState} from "react";



const Home = () => {
  const [hover, setHover] = useState("");

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

      <section className="skills">
        <div className="divider">
          <hr />
        </div>

        <h2>SKILLS</h2>

        <div className="project-content">
          <div>
            <h3>Programming</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template"></div>
        </div>

        <h3>Software and Tools</h3>
        <ul>
          <li className={hover} onMouseOver={() => setHover("hover")} onMouseLeave={() => setHover("")}>Visualisation of Data</li>
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

    </section>

  </main>
};

export default Home;

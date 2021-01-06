import React, {useState} from "react";
import Tag from "./Tag";
import Icons from "./Icons";
import {send, init} from "emailjs-com"
import scrollToRef from "../function/scrollToRef";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    const data = {
      ...formData,
      [name]: value
    }
    setFormData(data)
  }

  const handleSubmit = (e) => {
    if (formData.message !== "" && formData.email !== "" && formData.name !== "") {
      init("user_iyDRnMi6ZAKdhgUST6vak")
      send("service_d2vj6oa","template_68gtuli", formData)
          .then(() => setFormData({
            name: "",
            email: "",
            message: ""
          })
          )
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    }
  }

  return <main>

    <section id={"about"} className="hero">
      <div className="hero-content">
        <h1>&#60;Hello, my name is Deniz GORUR. <br /> I’m a Software Engineer./&gt;</h1>
        <p>BSc Computer Science student, determined, self-disciplined, self-starter, team player,
          <br /> eager to research further into studies, enthusiastic about Artificial Intelligence
          <br /> especially Intelligent Agents and Multi-agent Systems with
          <br /> a future plan of Master’s and PhD degree and an
          academic career on this topic
        </p>
      </div>
    </section>

    <section className="content" id={"skills"}>
      <section className="section-divider">
        <div className="divider">
          <hr />
        </div>

        <h2>SKILLS</h2>

        <div className="icon-content">
          <div>
            <h3>Programming</h3>
            <p>These are the programming languages I am most comfortable with but I can learn a new language in a few days.</p>
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

      <section className="section-divider" id={"projects"}>
        <div className="divider">
          <hr />
        </div>

        <h2>PROJECTS</h2>

        <div className="portfolio-container">
          <button onClick={scrollToRef} className="portfolio-item">Cooperative Strategies in Multi-agent Systems</button>
          <button onClick={scrollToRef} className="portfolio-item">Restaurant App</button>
          <button onClick={scrollToRef} className="portfolio-item">Calculator</button>
          <button onClick={scrollToRef} className="portfolio-item">Tower Defence</button>
          <button onClick={scrollToRef} className="portfolio-item">Self Pong Playing Robot</button>
          <button onClick={scrollToRef} className="portfolio-item">Tic Tac Toe</button>
          <button onClick={scrollToRef} className="portfolio-item">Minesweeper</button>
          <button onClick={scrollToRef} className="portfolio-item">Snake</button>
        </div>
      </section>
    </section>


    <section>
      <div id={"cooperative strategies in multi-agent systems"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Cooperative Strategies in Multi-agent Systems</h3>
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


      <div id={"restaurant app"} className="project-content-2">
        <div>
          <h3>Restaurant App</h3>
          <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          <button onClick={() => window.open("https://oaxaca-ui-fn3mq.ondigitalocean.app")} className="project-button">See More</button>
        </div>
        <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>

      <div id={"calculator"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Calculator</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1" />
        </div>
      </div>

      <div id={"tower defence"} className="project-content-2">
        <div>
          <h3>Tower Defence</h3>
          <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
        </div>
        <div className="template-1" />
      </div>

      <div id={"self pong playing robot"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Self Pong Playing Robot</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1" />
        </div>
      </div>

      <div id={"tic tac toe"} className="project-content-2">
        <div>
          <h3>Tic Tac Toe</h3>
          <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
        </div>
        <div className="template-1" />
      </div>

      <div id={"minesweeper"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Minesweeper</h3>
            <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
          </div>
          <div className="template-1" />
        </div>
      </div>

      <div id={"snake"} className="project-content-2">
        <div>
          <h3>Snake</h3>
          <p>This is an overview of my current skillset that I am constantly blah blah and this is some filler text to make it look likw aomwrhinf ahouls go hwew and sometjing else.</p>
        </div>
        <div className="template-1" />
      </div>
    </section>


    <section className="content">
    <section className="section-divider">
        <div className="divider">
          <hr />
        </div>
        <h2 id={"contact"}>CONTACT ME</h2>

        <form onSubmit={event => event.preventDefault()}>
          <input required name={"name"} onChange={handleChange} className="input" type="text" placeholder="Your Name" value={formData.name}/>
          <input required autoComplete="email" name={"email"} onChange={handleChange} className="input" type="email" placeholder="Your Email" value={formData.email}/>
          <input required name={"message"} onChange={handleChange} className="input" type="text" placeholder="Your Message..." value={formData.message}/>
          <button onClick={handleSubmit}>Send Message</button>
        </form>

      </section>
    </section>


  </main>
};

export default Home;

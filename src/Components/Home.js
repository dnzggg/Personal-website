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

  const handleSubmit = () => {
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
        <h1>&#60;Hello, my name is Deniz GORUR.  I’m a future Software Engineer./&gt;</h1>
        <p>BSc Computer Science student, determined, self-disciplined, self-starter, team player, eager to research further into studies, enthusiastic about Artificial Intelligence especially Intelligent Agents and Multi-agent Systems with a future plan of Master’s and PhD degree and an academic career on this topic
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
          <button onClick={scrollToRef} className="portfolio-item">Snake</button>
          <button onClick={scrollToRef} className="portfolio-item">Minesweeper</button>
          <button onClick={scrollToRef} className="portfolio-item">Tic Tac Toe</button>
        </div>
      </section>
    </section>


    <section>
      <div id={"cooperative strategies in multi-agent systems"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Cooperative Strategies in Multi-agent Systems</h3>
            <p>This is my final year project. The purpose of the project is to evaluate results of how cooperation might have emerged in societies
              using simulations of games in game theory (Prisoner’s Dilemma).</p>
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
          <p>This was a group project that we had in second year and it got the <strong>Best Second Year Group Project</strong>.
            Add more...
          </p>
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
            <p>This was the second year software engineering project. I implemented a calculator using software
              engineering techniques like Version Control System, design patterns, unit tests, ...</p>
          </div>
          <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        </div>
      </div>

      <div id={"tower defence"} className="project-content-2">
        <div>
          <h3>Tower Defence</h3>
          <p>This was the first year games module group project. We implemented the tower defence game in python.</p>
        </div>
        <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>

      <div id={"self pong playing robot"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Self Pong Playing Robot</h3>
            <p>This was the first year robotics module group project. We programmed a LEGO Mindstorms EV3 robot to
              play pong with itself. We made a steep cardboard where the ball goes down and the robot tries to hit the ball when it comes down.
              This was achieved using the camera of a phone and connected to the robot with bluetooth.
            </p>
            <button onClick={() => window.open("https://github.com/prechuthan/EV3-Pong")} className="project-button">See Code</button>
          </div>
          <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        </div>
      </div>

      <div id={"snake"} className="project-content-2">
        <div>
          <h3>Snake</h3>
          <p>This was the snake game I implemented in ALevel. I implemented in a way where someone that wants to can
            apply Artificial Intelligence to play the game.</p>
          <button onClick={() => window.open("https://github.com/dnzggg/Snake")} className="project-button">See Code</button>
        </div>
        <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>

      <div id={"minesweeper"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Minesweeper</h3>
            <p>This was the Minesweeper game I implemented in ALevel.</p>
            <button onClick={() => window.open("https://github.com/dnzggg/Minesweeper")} className="project-button">See Code</button>
          </div>
          <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        </div>
      </div>

      <div id={"tic tac toe"} className="project-content-2">
          <div>
            <h3>Tic Tac Toe</h3>
            <p>This is one of the first project I made in ALevel and it was the Tic Tac Toe game.</p>
            <button onClick={() => window.open("https://github.com/dnzggg/TicTacToe")} className="project-button">See Code</button>
          </div>
          <iframe
          title="My Daily Marathon Tracker"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
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

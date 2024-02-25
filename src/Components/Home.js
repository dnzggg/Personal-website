import React, {useEffect, useState} from "react";
import Tag from "./Tag";
import Icons from "./Icons";
import {send, init} from "emailjs-com"
import scrollToRef from "../function/scrollToRef";
import {decode} from "html-entities";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    get_papers();
  }, []);

  const get_papers = () => {
    fetch("https://dblp.org/search/publ/api?q=author%3ADeniz_Gorur%3A&format=json&h=10", {
      // headers: {'Content-Type': 'application/json'}
    }).then((response) => {
        return response.json();
    }).then((data) => {
        setPapers(data.result.hits.hit);
    }).catch((error) => {
        console.log(error);
    });
  }
  // const get_papers = () => {
  //   fetch("https://api.elsevier.com/content/search/scopus?query=au-id(58635305600)", {
  //     headers: {'Content-Type': 'application/json', 'X-ELS-APIKey': '457311cac0f8c7f5772cbc06896b66c5'}
  //   }).then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     console.log(data["search-results"]["entry"]);
  //     setPapers(data["search-results"]["entry"]);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }
  //
  // const get_paper_info = (eid) => {
  //   fetch(`https://api.elsevier.com/content/search/scopus?query=eid(${eid})`, {
  //     headers: {'Content-Type': 'application/json', 'X-ELS-APIKey': '457311cac0f8c7f5772cbc06896b66c5'}
  //   }).then((response) => {
  //       return response.json();
  //   }).then((data) => {
  //     console.log(data);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

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
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formData.message !== "" && formData.email !== "" && re.test(formData.email) && formData.name !== "") {
      init("user_iyDRnMi6ZAKdhgUST6vak")
      send("service_d2vj6oa","template_68gtuli", formData)
          .then(() => setFormData({
            name: "",
            email: "",
            message: ""
          })
          )
    }
  }

  const Publication = (paper) => {
    return <button onClick={() => window.open(paper.ee)} className="publication-item">
      <span className={"authors"}>
        {paper.authors.author.map((author, index) => {
            return <span key={index}>{author.text.replace(/ ([0-9])+/g, '')+"; "}</span>
        })}
      </span>
      <br/>
      <cite>
        <h4 className={"title"}>{decode(paper.title)}</h4>
        <h5 className={"venue"}>{decode(paper.venue)}</h5>
        <h5 className={"year"}>{paper.year}</h5>
      </cite>
    </button>
  }

  return <main>

    <section id={"about"} className="hero">
      <div className="hero-content">
        <h1>&#60;Hello, my name is Deniz GORUR. I’m a PhD student at Imperial College London./&gt;</h1>
        <p>MSc Artificial Intelligence graduate, determined, self-disciplined, self-starter, team player, eager to research further into studies, enthusiastic about Artificial Intelligence especially Argumentation, Argument Mining, and Intelligent Agents and Multi-agent Systems with a future plan of an academic career on these topics
        </p>
      </div>
    </section>

    <section className="content" id={"publications"}>
      <section className="section-divider">
        <div className="divider">
          <hr />
        </div>
        <h2>PUBLICATIONS</h2>
        <div className="publication-container">
            {papers.map((paper, index) => {
                return <Publication key={index} authors={paper.info.authors} title={paper.info.title} ee={paper.info.ee}
                               year={paper.info.year} venue={paper.info.venue} />
            })}
        </div>
      </section>
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
          <button onClick={scrollToRef} className="portfolio-item">Formalisation and Verification of Autonomous Vehicles in Simulators</button>
          <button onClick={scrollToRef} className="portfolio-item">Cooperative Strategies in Multi-agent Systems</button>
          <button onClick={scrollToRef} className="portfolio-item">Restaurant App</button>
          <button onClick={scrollToRef} className="portfolio-item">Calculator</button>
          {/*<button onClick={scrollToRef} className="portfolio-item">Tower Defence</button>*/}
          <button onClick={scrollToRef} className="portfolio-item">Self Pong Playing Robot</button>
          {/*<button onClick={scrollToRef} className="portfolio-item">Snake</button>*/}
          {/*<button onClick={scrollToRef} className="portfolio-item">Minesweeper</button>*/}
          {/*<button onClick={scrollToRef} className="portfolio-item">Tic Tac Toe</button>*/}
        </div>
      </section>
    </section>


    <section>
      <div id={"formalisation and verification of autonomous vehicles in simulators"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Formalisation and Verification of Autonomous Vehicles in Simulators</h3>
            <p>MSc project on formalising traffic rules in Signal Temporal Logic (STL) and checking if these rules are verified for autonomous vehicles in a CARLA simulation. An STL tool has been implemented for evaluating the robustness of vehicles in CARLA by parsing the traffic rule formalisations.</p>
          </div>
          <img
              width="400"
              height="200"
              src="https://carla.readthedocs.io/en/stable/img/simulator_window.png"
              alt={"Carla Simulator"}
          />
        </div>
      </div>

      <div id={"cooperative strategies in multi-agent systems"} className="project-content-2">
        <div>
          <h3>Cooperative Strategies in Multi-agent Systems</h3>
          <p>Final year undergraduate project. The purpose of the project is to evaluate results of how cooperation might have emerged in societies
            using simulations of games in game theory (Prisoner’s Dilemma).</p>
        </div>
        <iframe
          title="Cooperative Strategies in Multi-agent Systems"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/PKW6osg67lM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>


      <div id={"restaurant app"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Restaurant App</h3>
            <p>Second year group project on that got the <strong>Best Second Year Group Project Award</strong>. The app is a restaurant app (using React, Flask, and PostgreSQL) where you can order food and drinks. I was the scrum master and I also worked mostly on the front-end.
            </p>
            <button onClick={() => window.open("https://oaxaca-ui-fn3mq.ondigitalocean.app")} className="project-button">See More</button>
          </div>
          <iframe
            title="Restaurant App"
            width="400"
            height="200"
            src="https://www.youtube.com/embed/71luXZf2bVs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </div>

      <div id={"calculator"} className="project-content-2">
        <div>
          <h3>Calculator</h3>
          <p>Second year software engineering project where I implemented a calculator using software
            engineering techniques like Version Control System, design patterns, unit tests, etc.</p>
        </div>
        <img
        width="400"
        height="200"
        src="https://priyankvex.files.wordpress.com/2014/05/cal.png"
        alt={"Calculator"}
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
        />
      </div>

      {/*<div id={"tower defence"} className="project-content-2">*/}
      {/*  <div>*/}
      {/*    <h3>Tower Defence</h3>*/}
      {/*    <p>This was the first year games module group project. We implemented the tower defence game in python.</p>*/}
      {/*  </div>*/}
      {/*  <iframe*/}
      {/*    title="My Daily Marathon Tracker"*/}
      {/*    width="400"*/}
      {/*    height="200"*/}
      {/*    src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"*/}
      {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*    allowFullScreen />*/}
      {/*</div>*/}

      <div id={"self pong playing robot"} className="project-padding-1">
        <div className="project-content-1">
          <div>
            <h3>Self Pong Playing Robot</h3>
            <p>First year robotics group project where we programmed a LEGO Mindstorms EV3 robot to
              play pong with itself. This was achieved using the camera of a phone and connected to the robot with bluetooth.
              {/*We made a steep cardboard where the ball goes down and the robot tries to hit the ball when it comes down.*/}
            </p>
            <button onClick={() => window.open("https://github.com/prechuthan/EV3-Pong")} className="project-button">See Code</button>
          </div>
          <img
          width="400"
          height="200"
          src="https://pybricks.com/ev3-micropython/_images/robot_educator_basic.jpg"
          alt={"LEGO Mindstorms EV3"}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
          />
        </div>
      </div>

      {/*<div id={"snake"} className="project-content-2">*/}
      {/*  <div>*/}
      {/*    <h3>Snake</h3>*/}
      {/*    <p>This was the snake game I implemented in ALevel. I implemented in a way where someone that wants to can*/}
      {/*      apply Artificial Intelligence to play the game.</p>*/}
      {/*    <button onClick={() => window.open("https://github.com/dnzggg/Snake")} className="project-button">See Code</button>*/}
      {/*  </div>*/}
      {/*  <iframe*/}
      {/*    title="My Daily Marathon Tracker"*/}
      {/*    width="400"*/}
      {/*    height="200"*/}
      {/*    src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"*/}
      {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*    allowFullScreen />*/}
      {/*</div>*/}

      {/*<div id={"minesweeper"} className="project-padding-1">*/}
      {/*  <div className="project-content-1">*/}
      {/*    <div>*/}
      {/*      <h3>Minesweeper</h3>*/}
      {/*      <p>This was the Minesweeper game I implemented in ALevel.</p>*/}
      {/*      <button onClick={() => window.open("https://github.com/dnzggg/Minesweeper")} className="project-button">See Code</button>*/}
      {/*    </div>*/}
      {/*    <iframe*/}
      {/*    title="My Daily Marathon Tracker"*/}
      {/*    width="400"*/}
      {/*    height="200"*/}
      {/*    src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"*/}
      {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*    allowFullScreen />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div id={"tic tac toe"} className="project-content-2">*/}
      {/*    <div>*/}
      {/*      <h3>Tic Tac Toe</h3>*/}
      {/*      <p>This is one of the first project I made in ALevel and it was the Tic Tac Toe game.</p>*/}
      {/*      <button onClick={() => window.open("https://github.com/dnzggg/TicTacToe")} className="project-button">See Code</button>*/}
      {/*    </div>*/}
      {/*    <iframe*/}
      {/*    title="My Daily Marathon Tracker"*/}
      {/*    width="400"*/}
      {/*    height="200"*/}
      {/*    src="https://www.youtube.com/embed/71luXZf2bVs" frameBorder="0"*/}
      {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*    allowFullScreen />*/}
      {/*</div>*/}
    </section>


    <section className="content">
    <section className="section-divider">
        <div className="divider">
          <hr />
        </div>
        <h2 id={"contact"}>CONTACT ME</h2>

        <form onSubmit={event => event.preventDefault()}>
          <input required name={"name"} onChange={handleChange} className="input" type="text" placeholder="Your Name" value={formData.name}/>
          <input required autoComplete="email" name={"email"} onChange={handleChange} className="input" placeholder="Your Email" type={"email"} title="Email (format: xxx@xxx.xxx)" value={formData.email}/>
          <textarea style={{resize: "None", height: "25vh"}} name={"message"} onChange={handleChange} className="input" placeholder="Your Message..." value={formData.message}/>
          <button onClick={handleSubmit}>Send Message</button>
        </form>

      </section>
    </section>


  </main>
};

export default Home;

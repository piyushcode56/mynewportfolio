import React from "react";
import "./HomePage.css";
import profilePhoto from "../assets/profile-photo.jpg";
import projects from "../Projects.js";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import { useState } from "react";
const HomePage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleFormData = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const formData = document.forms["contact-form"];
      const url =
        "https://script.google.com/macros/s/AKfycbzlYtmoNXeRnwca4NxMRabYflDhIsjtgJVI6T4y0FCa6ds0ushy8fXF5cIyUvlPaz5DWg/exec";
      const response = await fetch(url, {
        method: "POST",
        body: new FormData(formData),
      });
      const result = await response.json();
      if (result.result === "success") {
        alert("Form submitted!");
        setContactFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Form is not working currently!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-sections">
        <section className="first-section">
          <div className="introduction">
            <div className="self-introduction">
              <h1 style={{ fontSize: "30px" }}>
                Hello!👋 I'm Piyush, a developer based in India.
              </h1>
              <p>
                I'm a MERN stack developer passionate about building modern and
                dynamic websites. I enjoy creating user-friendly and efficient
                web solutions while constantly exploring new technologies to
                improve my skills.
              </p>
            </div>
            <div className="connect-me">
              <p>Connect with me</p>
              <div className="connect-me-links">
                <a
                  href="https://www.linkedin.com/in/piyushjhaengineer/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/piyushcode56" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/piyush_jha_03?igsh=MXQxODQwb2Q0OHVodw=="
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="profile-image">
            <img src={profilePhoto} alt="" />
          </div>
        </section>

        <section className="second-section" id="about">
          <h2>About</h2>
          <div className="about-me">
            <p>
              Hi, I'm a passionate web development enthusiast currently pursuing
              engineering in Electronics and Telecommunication from Shree L.R.
              Tiwari College of Engineering. I passed my 12th standard in 2021
              from Utkarsha Mahavidyalaya with 79.50%. While my academic
              background is in electronics, my real interest lies in coding and
              creating websites.
              <br />
              I'm currently learning the MERN stack—MongoDB, Express.js,
              React.js, and Node.js—exploring how to build dynamic and
              user-friendly web applications. I enjoy working on projects that
              challenge me to grow, whether it's designing intuitive frontends
              or understanding how backend logic works.
              <br />
              I love experimenting with new technologies, improving my coding
              skills, and continuously learning to become a better developer. As
              I progress, I'm excited about building more web projects and
              expanding my expertise in full-stack development.
              <br />
              I'm always open to new opportunities, collaborations, and learning
              experiences. Let’s connect and create something amazing together!
            </p>
          </div>
          <div className="resume-download">
            <a href={resume} download="Piyush_Resume.pdf">
              Download my Resume <i class="fa-solid fa-arrow-down"></i>
            </a>
          </div>
          <div className="tech-stack">
          <div className="frontend-tools">
            <h3>Frontend</h3>
              <ul>
              <div className="html">
                  
            <i class="devicon-html5-plain colored"></i>
          

                  <p>HTML5</p>
                </div>
                <div className="css">
                  
            <i class="devicon-css3-plain colored"></i>
          
                  <p>CSS3</p>
                </div>
                <div className="tailwind">
                  <i class="devicon-tailwindcss-original colored"></i>
                  <p>Tailwind</p>
                </div>
                <div className="bootstrap">
                  <i class="devicon-bootstrap-plain colored"></i>
                  <p>Bootstrap</p>
                </div>
                <div className="javascript">
                  <i class="devicon-javascript-plain colored"></i>
                  <p>Javacsript</p>
                </div>
                <div className="react">
                  <i class="devicon-react-original colored"></i>
                  <p>React.js</p>
                </div>
              </ul>
            </div>
            <div className="backend-tools">
            <h3>Backend</h3>
              <ul>
                <div className="node">
                  <i class="devicon-nodejs-plain-wordmark colored"></i>

                  <p>Node.js</p>
                </div>
                <div className="express">
                  <i class="devicon-express-original colored"></i>
                  <p>Express.js</p>
                </div>
              </ul>
            </div>
            <div className="database-tools">
            <h3>Database</h3>
              <ul>
                <div className="mysql">
                  <i class="devicon-mysql-plain-wordmark colored"></i>

                  <p>MySQL</p>
                </div>
                <div className="mongo">
                  <i class="devicon-mongodb-plain colored"></i>

                  <p>MongoDB</p>
                </div>
              </ul>
            </div>

            <div className="other-tools">
            <h3>Other tools & technologies</h3>
              <ul>
                <div className="postman">
                  <i class="devicon-postman-plain colored"></i>

                  <p>Postman</p>
                </div>
                <div className="github">
                  <i class="devicon-github-original colored"></i>

                  <p>Github</p>
                </div>
                <div className="vscode">
                  <i class="devicon-vscode-plain colored"></i>
                  <p>VScode</p>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <section className="third-section" id="projects">
          <div>
            <h2>Projects</h2>
            <p>
              Here are some of my personal projects{" "}
              <i class="fa-solid fa-arrow-down"></i>
            </p>
          </div>
          <div className="project-cards">
            {projects ? (
              projects.map((project) => {
                return (
                  <div className="project">
                    <div className="project-information">
                      <h2>{project.title}</h2>
                      <p>{project.description.slice(0, 200)}</p>
                      <Link to={`/project/${project.title}`}>
                        See more <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                      <div className="project-links">
                        <button><a href={project.githubLink} target="_blank">View GitHub</a></button>
                      </div>
                    </div>
                    <div className="project-image">
                      <img src={project.projectcover} alt="" />
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>No projects available</h2>
            )}
          </div>
        </section>
        <section className="fourth-section" id="contact">
          <h2 style={{ marginBottom: "20px" }}>Contact me</h2>
          <div className="contact-section">
            <div className="contact-links">
              <p>
                <i class="fa-solid fa-envelope"></i> piyushjha8282@gmail.com
              </p>
              Or connect with me via
              <div className="connect-links">
                <a
                  href="https://www.linkedin.com/in/piyushjhaengineer/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/piyushcode56" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/piyush_jha_03?igsh=MXQxODQwb2Q0OHVodw=="
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form
                action="https://script.google.com/macros/s/AKfycbzlYtmoNXeRnwca4NxMRabYflDhIsjtgJVI6T4y0FCa6ds0ushy8fXF5cIyUvlPaz5DWg/exec"
                onSubmit={(e) => handleContactForm(e)}
                name="contact-form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={contactFormData.name}
                  onChange={(e) => handleFormData(e)}
                  required
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={contactFormData.email}
                  onChange={(e) => handleFormData(e)}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  value={contactFormData.subject}
                  onChange={(e) => handleFormData(e)}
                  required
                />
                <textarea
                  name="message"
                  rows={7}
                  id=""
                  value={contactFormData.message}
                  placeholder="Enter your message"
                  onChange={(e) => handleFormData(e)}
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <h4
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        Made by Piyush Jha
      </h4>
    </div>
  );
};

export default HomePage;

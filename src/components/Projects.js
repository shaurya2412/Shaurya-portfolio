import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import travelwebsite from "../assets/img/travelwebsite.png";
import foodsource from "../assets/img/foodsource.png";
import meterphatse from "../assets/img/meterphatse.png"
import projImg1 from "../assets/img/project-img1.png";
import chatappln from "../assets/img/chatappln.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real Time Chat Aplication",
      description: "Using Mongo,React,Express,Node and Socket.io",
      imgUrl: chatappln,
    },
    {
      title: "Travel Website including hotel booking and route planning",
      description: "JavaScript,ReactJs, Redux, ChakraUi nodeJs, expressJs,MongoDb",
      imgUrl: travelwebsite,
    },
    {
      title: "Food Ordering Website",
      description: "Mongo,React,Express,Node",
      imgUrl: foodsource,
    },
    {
      title: "Internship work of event management website",
      description: "React,redux,next,postgre",
      imgUrl: meterphatse,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed multiple full-stack projects using the MERN stack, focusing on building real-time, scalable, and performance-optimized web applications</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
               
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

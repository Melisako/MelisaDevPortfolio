import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/girl.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Melisa Kololli </span>
                 and I'm from <span className="yellow"> Kosova.</span>
                <br />
                <br />
                My current academic pursuit is Bachelor's degree in Computer Science and Engineering at UBT - Higher Education Institution.
                <br />
                <br />
                  As a
                  <b className="yellow"> Web</b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Javascript, </b>
                    as well as have knowledge in frameworks such as React.js and Vue.js.
                
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">React.js, PHP, Wordpress,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern CSS such 
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow">Bootstrap, Tailwind CSS and SASS.</b>
                  </i>
                  <br />
                  <br />
                 
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Melisako"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/melisakololli"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/melisa-kololli-a59261262/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import skincare from "../assets/projects/skincare.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Wordpress Personalized Theme"
              description="Introducing our customized WordPress theme tailored for businesses, empowered by the ACF (Advanced Custom Fields) plugin. Elevate your online presence with a dynamic website that reflects your brand identity and unique offerings. "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="The C# Chronicles: Unity"
              description="Embark on an exhilarating adventure with our Unity-powered game crafted with precision in C#. Immerse yourself in stunning visuals and captivating gameplay as you journey through dynamic worlds filled with challenges and excitement. "
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Figma Mobile App"
              description="Introducing our sleek and intuitive mobile app, meticulously designed using Figma. Experience seamless navigation and effortless interaction as you explore a world of convenience at your fingertips."
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Scratched Wordpress Theme"
              description="Seamlessly integrate custom fields, galleries, and interactive elements to engage your audience and drive conversions. Transform your website into a powerful marketing tool with our personalized theme, designed to meet the specific needs of your business."
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skincare}
              isBlog={false}
              title="Skin Care Shopping App"
              description="This skincare app offers a seamless user experience tailored to your skincare needs. From intuitive navigation to stunning visuals, every detail is designed to help you achieve healthier, glowing skin."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
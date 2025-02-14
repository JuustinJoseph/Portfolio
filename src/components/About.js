import React from "react";
import "./MainStyles.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="sticky-header">
        <h2 className="light-text">About</h2>
      </div>
      <div className="contents">
        <p>
          I’m a web developer passionate about building intuitive, scalable
          applications that prioritize performance and user experience. I enjoy
          working at the intersection of design and development, creating
          solutions that are not only functional but also well-engineered for
          accessibility and efficiency.
        </p>
        <p>
          I recently graduated from{" "}
          <Link
            target="_blank"
            className="anchor-text"
            to="https://www.senecapolytechnic.ca/home.html"
          >
            Seneca College
          </Link>
          &nbsp; with a diploma in Computer Programming and Analysis, earning
          multiple honors for academic excellence. During my{" "}
          <Link
            target="_blank"
            className="anchor-text"
            to="https://www.vaughan.ca/"
          >
            CO-OP at the City of Vaughan
          </Link>
          , I contributed to the development and maintenance of full-stack web
          applications, working with C#, .NET, JavaScript, and Power Platform
          tools to deliver solutions that improved workflow automation and data
          visualization.
        </p>
        <p>
          Beyond my academic and professional experience, I’ve built personal
          and academic projects, including a freelance platform, stock
          monitoring app, and microservices for cloud environments, applying
          technologies like React, Node.js, AWS, and MongoDB. I'm always eager
          to expand my knowledge, especially in DevOps, cloud computing, and
          data architecture.
        </p>
        <p>
          When I'm not coding, you’ll find me reading, working out, or figuring
          out a new song on guitar.
        </p>
      </div>
    </section>
  );
};

export default About;

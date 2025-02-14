import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsStyles.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="sticky-header">
        <h2 className="light-text">Projects</h2>
      </div>
      <div className="project-contents">
        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={freelanceUImg} alt="freelanceU-thumbnail" />
          </div> */}
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://prj666-1.onrender.com/"
            >
              <h3 className="anchor-text card-header to-link">
                FreelanceU <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              Developed a modern freelancing platform using React.js and
              Styled-Components to deliver a seamless user experience.
              Implemented AWS Cognito for secure authentication and AWS S3 for
              optimized static asset delivery, with hosting managed via AWS
              Amplify. Built a scalable backend using Node.js, Express.js, and
              MongoDB to ensure efficient data handling and performance.
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>React.js</p>
              </div>
              <div className="tag">
                <p>JavaScript</p>
              </div>
              <div className="tag">
                <p>Node.js</p>
              </div>
              <div className="tag">
                <p>Express.js</p>
              </div>
              <div className="tag">
                <p>MongoDB / Mongoose</p>
              </div>
              <div className="tag">
                <p>AWS Cognito</p>
              </div>
              <div className="tag">
                <p>AWS S3</p>
              </div>
              <div className="tag">
                <p>AWS Amplify</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={freelanceUImg} alt="freelanceU-thumbnail" />
          </div> */}
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://github.com/JuustinJoseph/fragments"
            >
              <h3 className="anchor-text card-header to-link">
                Fragments Microservice &nbsp;
                <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              Designed and implemented a cloud-based microservice using Node.js
              and Express.js to manage and convert text and image fragments for
              a manufacturing ecosystem. Deployed the microservice to AWS Lambda
              with API Gateway, ensuring scalability and cost-efficiency.
              Integrated GitHub Actions for automated CI/CD, streamlining
              deployments. Developed functionality for format conversion,
              utilizing Sharp.js for image processing and text parsers for text
              transformation.
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>Node.js</p>
              </div>
              <div className="tag">
                <p>Express.js</p>
              </div>
              <div className="tag">
                <p>AWS Lambda</p>
              </div>
              <div className="tag">
                <p>GitHub Actions</p>
              </div>
              <div className="tag">
                <p>Sharp.js</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={freelanceUImg} alt="freelanceU-thumbnail" />
          </div> */}
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://github.com/JuustinJoseph/Stocks-App"
            >
              <h3 className="anchor-text card-header to-link">
                Stocks App <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              Developed a Stock Monitoring App in Swift, enabling real-time
              stock tracking with seamless data updates through MS Finance API
              integration. Implemented Core Data for persistent storage of user
              preferences and stock classifications across sessions. Designed an
              interactive and user-friendly UI/UX, ensuring a smooth stock
              monitoring experience.
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>Swift</p>
              </div>
              <div className="tag">
                <p>Storyboards</p>
              </div>
              <div className="tag">
                <p>Core Data</p>
              </div>
              <div className="tag">
                <p>MS Finance API</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={freelanceUImg} alt="freelanceU-thumbnail" />
          </div> */}
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://nasa-react-app-ahfr.onrender.com"
            >
              <h3 className="anchor-text card-header to-link">
                The APOD project <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              A Vite + React app that fetches and displays NASA’s Astronomy
              Picture of the Day (APOD). It retrieves the image, title, and
              description using the Fetch API and presents them in a clean,
              responsive layout using HTML and CSS. The app ensures a smooth
              user experience with fast loading times and a simple yet visually
              appealing design. 🚀
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>React.js</p>
              </div>
              <div className="tag">
                <p>Vite</p>
              </div>
              <div className="tag">
                <p>HTML & CSS</p>
              </div>
              <div className="tag">
                <p>JavaScript</p>
              </div>
              <div className="tag">
                <p>NASA API</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={freelanceUImg} alt="freelanceU-thumbnail" />
          </div> */}
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://cerulean-cendol-4a5f15.netlify.app/"
            >
              <h3 className="anchor-text card-header to-link">
                Task tracker application &nbsp;
                <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              Built a task tracker app using React. Dealt with components,
              props, state, hooks, working with an API and more.
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>React.js</p>
              </div>
              <div className="tag">
                <p>HTML & CSS</p>
              </div>
              <div className="tag">
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="https://github.com/JuustinJoseph?tab=repositories"
        target="_blank"
        className="project-archive-link"
      >
        <p>
          View Full Project Archive <span className="right-arrow">&rarr;</span>
        </p>
      </Link>
    </section>
  );
};

export default Projects;

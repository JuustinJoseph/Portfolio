import React from "react";
import "./ExperienceStyles.css";

import { Link } from "react-router-dom";

const Experience = () => {
  const openPdf = () => {
    window.open("/assets/Resume.pdf", "_blank");
  };

  return (
    <section id="experience">
      <div className="sticky-header">
        <h2 className="light-text">Experience</h2>
      </div>
      <div className="experience-contents">
        <div className="experience-card">
          <p className="tenure">April 2022 - Present</p>
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://www.uhaul.com/"
            >
              <h3 className="anchor-text card-header to-link">
                Reservation Manager · U-Haul &nbsp;
                <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              Assist with customer calls, supporting field team members and
              U-Haul dealerships in managing equipment, reservations, and
              placements. Help direct incoming equipment based on demand and
              productivity to balance regional inventory levels. Review reports
              to optimize equipment placement, reservations, and contract
              accuracy.
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>Word</p>
              </div>
              <div className="tag">
                <p>Excel</p>
              </div>
              <div className="tag">
                <p>Customer Service</p>
              </div>
              <div className="tag">
                <p>Communication</p>
              </div>
              <div className="tag">
                <p>Problem-Solving</p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-card">
          <p className="tenure">May 2023 - Dec 2023</p>
          <div className="card-column">
            <Link
              target="_blank"
              className="anchor-text"
              to="https://www.vaughan.ca/"
            >
              <h3 className="anchor-text card-header to-link">
                Student Co-op · City Of Vaughan&nbsp;
                <span className="right-arrow">&rarr;</span>
              </h3>
            </Link>
            <p>
              Developed and maintained features for full-stack web applications
              using C#, .NET, Bootstrap, HTML/CSS, and JavaScript, ensuring
              seamless functionality and successful deployments through
              debugging and comprehensive testing. Actively collaborated with
              clients and stakeholders to gather requirements, define project
              scope, and align expectations.
            </p>
            <div className="tag-container">
              <div className="tag">
                <p>C#</p>
              </div>
              <div className="tag">
                <p>.NET Framework / .NET Core</p>
              </div>
              <div className="tag">
                <p>JavaScript</p>
              </div>
              <div className="tag">
                <p>HTML / CSS</p>
              </div>
              <div className="tag">
                <p>Power Apps</p>
              </div>
              <div className="tag">
                <p>Power BI</p>
              </div>
              <div className="tag">
                <p>Power Automate</p>
              </div>
              <div className="tag">
                <p>SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="project-archive-link" onClick={openPdf} to="#">
        <p>
          View Full Resume <span className="right-arrow">&rarr;</span>
        </p>
      </Link>
    </section>
  );
};

export default Experience;

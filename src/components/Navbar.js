import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  //active header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      let currentSection = sections[0];

      for (let i = 0; i < sections.length; i++) {
        let element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150) {
            currentSection = sections[i];
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //selecting a header
  const handleScrollClick = (e, sectionID) => {
    e.preventDefault();
    const section = document.getElementById(sectionID);
    if (sectionID) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="underlay"></div>
      <header>
        <Link to="/">
          <h1>Justin Joseph</h1>
        </Link>
        <h4>Web Developer</h4>
        <p>
          I build accessible, responsive, and visually precise web experiences.
        </p>
        <nav>
          <div className="nav-container">
            <Link
              className={`anchor-text ${
                activeSection === "about" ? "active" : ""
              }`}
              to="#"
              onClick={(e) => handleScrollClick(e, "about")}
            >
              <FontAwesomeIcon className="nav-icon" icon={faMinus} />
              <p>About </p>
            </Link>
            <Link
              className={`anchor-text ${
                activeSection === "experience" ? "active" : ""
              }`}
              to="#"
              onClick={(e) => handleScrollClick(e, "experience")}
            >
              <FontAwesomeIcon className="nav-icon" icon={faMinus} />
              <p>Experience </p>
            </Link>
            <Link
              className={`anchor-text ${
                activeSection === "projects" ? "active" : ""
              }`}
              to="#"
              onClick={(e) => handleScrollClick(e, "projects")}
            >
              <FontAwesomeIcon className="nav-icon" icon={faMinus} />
              <p>Projects </p>
            </Link>
          </div>
        </nav>
        <div className="social-link-container">
          <Link
            className="social-link"
            target="_blank"
            to="https://github.com/JuustinJoseph"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            className="social-link"
            target="_blank"
            to="https://www.linkedin.com/in/justin-joseph-8a0035266/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            className="social-link"
            target="_blank"
            to="https://www.instagram.com/justxnj/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;

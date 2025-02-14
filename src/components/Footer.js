import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Coded in{" "}
        <Link
          target="_blank"
          to="https://code.visualstudio.com/"
          className="anchor-text"
        >
          Visual Studio Code
        </Link>{" "}
        by yours truly. Built with React.JS. All text is in the &nbsp;
        <Link
          target="_blank"
          to="https://fonts.google.com/specimen/Inter?query=inter"
          className="anchor-text"
        >
          Inter Typeface
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;

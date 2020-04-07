import React from "react";
import BackgroundImage from "gatsby-background-image";
import { Link, graphql } from "gatsby";
import { FaLinkedin, FaGithubAlt, FaFilePdf } from "react-icons/fa";

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <h1 className="text-f">
              Hi, I'm <span className="text-blue-spe">M</span>el!
            </h1>
            <h2 className="text-para">I'm a Software Engineer.</h2>
            <p className="text-para">
              I'm passionate about coding and love building cool applications. I
              love to test my understanding of new tech stacks that I learn by
              building mobile/Web apps. I work mostly in Java, JS and React
              check-out my GitHub for some of my most recent projects.
            </p>
            <div align="center">
              <a href="https://github.com/MrinaliniU" target="_blank">
                <FaGithubAlt className="nav-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mupadhya/" target="_blank">
                <FaLinkedin className="nav-icon" />
              </a>
              <a
                href="/Mrinalini_Upadhya_FullStack_SoftwareEngineer.pdf"
                target="_blank"
              >
                <button className="btn text-uppercase btn-black">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*{children} */}
    </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};

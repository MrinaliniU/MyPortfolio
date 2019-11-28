import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql } from "gatsby"
import { FaLinkedin, FaGithubAlt, FaFilePdf } from "react-icons/fa"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
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
              I'm passionate about coding and love building cool things. I spend
              my free time building cool web/mobile apps. I work mostly in Java
              and or JS, check-out my GitHub for some of my most recent work.
            </p>
            <div align="center">
              <a href="https://github.com/MrinaliniU" target="_blank">
                <FaGithubAlt className="nav-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mupadhya/" target="_blank">
                <FaLinkedin className="nav-icon" />
              </a>
              <a href="/resumeMel.pdf" target="_blank">
                <button className="btn text-uppercase btn-black">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*{children} */}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

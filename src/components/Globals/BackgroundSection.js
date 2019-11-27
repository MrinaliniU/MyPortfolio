import React from "react";
import BackgroundImage from "gatsby-background-image";
import { Link, graphql } from "gatsby";

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
          <div className="col-lg-7 mx-auto">
            <h1 className="text-f">{title}</h1>
            <h2 className="text-para">I'm a Software Engineer.</h2>
            <p className="text-para">I design things</p>
            <a href="/resumeMel.pdf" target="_blank">
              <button className="btn text-uppercase btn-black">Resume</button>
            </a>
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

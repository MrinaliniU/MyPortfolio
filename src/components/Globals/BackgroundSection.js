import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="text-f">Mrinalini</h1>
      <p className="para-f">{title}</p>
      {children}
    </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};

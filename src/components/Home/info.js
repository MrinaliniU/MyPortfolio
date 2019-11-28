import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div id="about-me" className="container">
        <Title title="About Me" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Experienced Software Engineer with a demonstrated history of
              working in the computer software industry. Skilled in Java, Web
              and Android App Development. Currently pursuing Master's degree
              specializing in Computer Vision and Machine Learning at University
              at Buffalo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

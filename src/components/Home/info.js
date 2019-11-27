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
              I'm a Software Engineer currently pursuing Master's degree in
              computer science at University at Buffalo. I got into Computer
              Science and Programming while working on one of my Undergrad
              projects on Wind Turbine. My team and I had worked really hard on
              all the math and theories that were involed to prove a working
              wind turbine but when we had to submit a paper we realized the
              need to show a simulation to the Professors to convince them. That
              is when I exposed myself to programming and came-up with a
              simulation for the demo. Since then programming and coding to
              solve challenging problems has become almost cathartic to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

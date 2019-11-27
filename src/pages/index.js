import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Job from "../components/Home/job"
import Project from "../components/Home/projectwork"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Hi, I'm Mrinalini!"
      styleClass="default-background"
    />
    <Info />
    <Job />
    <Project />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "backtwo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

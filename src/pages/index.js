import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/info";
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Hi my name is Mrinalini, you can call me Mel. I'm a Software Engineer
      currently pursuing Master's degree in computer science at University at
      Buffalo. I got into Computer Science and Programming while working on
      one of my Undergrad projects on Wind Turbine. My team and I had worked
      really hard on all the math and theories that were involed to prove a
      working wind turbine but when we had to submit a paper we realized the
      need to show a simulation to the Professors to convince them. That is
      when I exposed myself to programming and came-up with a simulation for
      the demo. Since then programming and coding to solve challenging
      problems has become almost cathartic to me."
      styleClass="default-background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;

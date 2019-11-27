import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaGulp } from "react-icons/fa";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!</h1>
    <p>
      Welcome to <FaGulp size={70} /> your new Gatsby site.
    </p>
  </Layout>
);

export default IndexPage;

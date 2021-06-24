import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Title from "../components/sections/Title";
import About from "../components/sections/About";
import Divider from "../components/sections/Divider";
import ProjectRetail from "../components/sections/ProjectRetail";
import Footer from "../components/sections/Footer";
import Particles from "react-tsparticles";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Title />
      <Divider />
      <About />
      <Divider />
      <ProjectRetail />
      <Footer />
    </Layout>
  );
}

export default IndexPage;

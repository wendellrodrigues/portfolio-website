import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import ProjectRetail from "../components/sections/ProjectRetail";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <HeroSection /> */}
      <ProjectRetail />
    </Layout>
  );
}

export default IndexPage;

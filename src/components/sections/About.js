import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, H2, H3, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import Particles from "react-tsparticles";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function About() {
  return (
    <Wrapper id="about">
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
}

//Fade in animations
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  80% { opacity: 0.5; }
  100% { opacity: 1; transform: translateY(0px); }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  max-width: 1500px;
  margin: auto;
  overflow: hidden; //Clip the overflow content
  height: 1000px;

  @media (max-width: 500px) {
    margin-top: 80px;
  }

  //Dont show particles on small screen sizes
  @media (max-width: 1000px) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  padding: 0px 0px 0px 0px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  //margin-bottom: 220px;
  position: relative;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

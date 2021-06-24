import React from "react";
import styled, { keyframes } from "styled-components";
import ProjectRetailButton from "../buttons/ProjectRetailButton";
import ProjectRetailAnimation from "../animations/ProjectRetailAnimation";
import { H1, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

export default function ProjectRetail() {
  return (
    <Wrapper id="projectretail">
      <ContentWrapper>
        <TextWrapper>
          <Title src="/images/logos/projectretail-title.svg" />
          <Description>
            Project Retail is an interactive solution for retail shoppers who
            wish to have their experience tailored directly to their needs. The
            project was undertaken as a senior capstone project at San Jose
            State University.
          </Description>
          <ProjectRetailButton />
        </TextWrapper>
        <AnimationWrapper>
          <ProjectRetailAnimation />
        </AnimationWrapper>
      </ContentWrapper>
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
  //display: grid;
  overflow: hidden; //Clip the overflow content
  padding-bottom: 100px;

  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1300px; //Can be smaller if screen size is smaller
  margin: 200px auto; //Centers in screen
  display: grid;
  grid-template-columns: 360px auto;
  gap: 200px;

  @media (max-width: 1400px) {
    gap: 0px;
  }

  //Iphone
  @media (max-width: 960px) {
    margin-horizontal: 30px;
    margin-top: 150px;
    margin-bottom: 20px;
  }

  @media (max-width: 650px) {
    grid-template-columns: 250px auto;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
    margin-top: 90px;
    align-items: center; //Aligns the items rather than the content (extra space)
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  padding-left: 50px;
  //Only select the immediate children (title, description, purchase button)
  > * {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards; //wont go back to opacity 0

    //Title
    :nth-child(1) {
      animation-delay: 0s;
    }
    //Description
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    //Button
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @media (max-width: 900px) {
    max-width: 300px;
  }

  @media (max-width: 800px) {
    gap: 15px;
  }

  @media (max-width: 650px) {
    max-width: 200px;
    gap: 0px;
  }

  @media (max-width: 500px) {
    max-width: 400px;
    align-items: center; //Aligns the items rather than the content (extra space)
    justify-content: center;
    padding-left: 0px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const Title = styled.img`
  margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    width: 200px;
  }

  @media (max-width: 500px) {
    width: 300px;
    margin: auto;
    margin-bottom: 25px;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;

const Description = styled(MediumText)`
  color: white;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const AnimationWrapper = styled.div`
 @media (max-width: 500px) {
    display: none;
`;

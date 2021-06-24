import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, H2, H3, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import Particles from "react-tsparticles";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Title() {
  const animateOptions = {
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 1,
        enable: true,
        opacity: 0.05,
        width: 10,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 500,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 1,
      },
    },
  };

  const githubURL = "https://github.com/wendellrodrigues";
  const linkedinURL = "https://www.linkedin.com/in/wendellrodrigues/";

  return (
    <Wrapper id="title">
      <ContentWrapper>
        {/** Image */}
        <ImageWrapper>
          <WendellImage src="/images/avatars/wendell_full.svg" />
          <WendellCircleImage src="/images/avatars/wendell_circle.svg" />
        </ImageWrapper>

        {/** Title*/}
        <TextWrapper>
          <HelloText>Hello! My name is</HelloText>
          <NameText>Wendell Rodrigues</NameText>
          <DescriptionText>
            I'm a Software Engineer from San Jose, CA
          </DescriptionText>

          <ButtonsWrapper>
            <CircleButtonWrapper>
              <a href={githubURL} target="_blank" rel="noopener noreferrer">
                <CircleButton src="/images/icons/github.svg" />
              </a>
            </CircleButtonWrapper>
            <CircleButtonWrapper>
              <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                <CircleButton src="/images/icons/linkedin.svg" />
              </a>
            </CircleButtonWrapper>
          </ButtonsWrapper>
          <AnchorLink to="/#about">
            <LinkText>About Me</LinkText>
          </AnchorLink>
        </TextWrapper>
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
  position: relative;
  display: grid;
  max-width: 1500px;
  margin: auto;
  overflow: hidden; //Clip the overflow content
  height: 800px;
  margin-top: 150px;

  @media (max-width: 2000px) {
    margin-left: 0;
  }

  //Dont show particles on small screen sizes
  @media (max-width: 1000px) {
    height: auto;
  }

  @media (max-width: 500px) {
    margin-top: 80px;
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

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 20%;
  max-width: 100px;
  height: auto;

  @media (max-width: 1400px) {
    max-width: 200px;
    left: 5%;
  }

  @media (max-width: 1000px) {
    position: relative;
    margin: auto;
    padding: auto;
    left: 0%;
    margin-bottom: 40px;
  }
`;

const WendellImage = styled.img`
  filter: saturate(0%);
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    filter: saturate(100%);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const WendellCircleImage = styled.img`
  display: none;
  @media (max-width: 1000px) {
    display: grid;
    position: relative;
    max-width: 150px;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  color: white;
  position: absolute;
  left: 85%;
  top: 22%;
  width: 100%;
  gap: 25px;

  @media screen and (max-width: 1400px) {
    left: 65%;
  }

  @media screen and (max-width: 1200px) {
    left: 57%;
  }

  @media screen and (max-width: 1000px) {
    position: relative;
    justify-items: center;
    left: 0%;
    top: 0%;
    margin-bottom: 45px;
  }

  @media (max-width: 500px) {
    gap: 18px;
  }
`;

const HelloText = styled(H2)`
  @media (max-width: 1400px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 380px) {
    font-size: 18px;
  }
`;
const NameText = styled(H1)`
  @media (max-width: 1400px) {
    font-size: 45px;
  }

  @media (max-width: 500px) {
    font-size: 35px;
  }

  @media (max-width: 380px) {
    font-size: 30px;
  }
`;

const DescriptionText = styled(H3)`
  margin-top: 30px;
  @media (max-width: 1400px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    margin-top: 20px;
    font-size: 16px;
  }

  @media (max-width: 380px) {
    margin-top: 15px;
    font-size: 14px;
  }
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 150px;
  margin-top: 120px;

  @media (max-width: 1000px) {
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    margin-top: 20px;
    width: 140px;
  }
`;

const CircleButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: grid;

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    filter: brightness(60%) saturate(120%);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 1000px) {
    margin: auto;
  }
`;

const CircleButton = styled.img``;

const LinkText = styled(MediumText)`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-top: 150px;

  :hover {
    filter: brightness(60%) saturate(120%);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 1000px) {
    margin-top: 70px;
  }

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;

const ParticleWrapper = styled.div`
  position: absolute;
  margin-top: 150px;
  width: 100%;
  //height: 100px;
`;

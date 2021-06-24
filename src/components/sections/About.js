import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, H2, H3, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import Particles from "react-tsparticles";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AboutText } from "../Constants.js";
import { Parallax } from "react-parallax";

export default function About() {
  return (
    <Wrapper id="about">
      <ContentWrapper>
        <TopContentWrapper
          data-sal="fade"
          data-sal-duration="2000" //
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <DescriptionWrapper>
            <Title>About</Title>
            <Tagline>{AboutText.tagline}</Tagline>
            <Description>{AboutText.description}</Description>
          </DescriptionWrapper>
          <MasterSkillsWrapper>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsWrapper
              id="about"
              data-sal-duration="2000"
              data-sal="fade"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <Skill>Javascript</Skill>
              <Skill>SwiftUI</Skill>
              <Skill>ReactJS</Skill>
              <Skill>Java</Skill>
              <Skill>PHP</Skill>
              <Skill>Docker</Skill>
              <Skill>AWS</Skill>
              <Skill>Python</Skill>
            </SkillsWrapper>
          </MasterSkillsWrapper>
        </TopContentWrapper>
        <HorizontalDivider />
        <BottomContentWrapper
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <BottomContent>
            <EduExpWrapper>
              <EduExpTitle>Education</EduExpTitle>
              <EduExpText>
                Bachelor of Science | San Jose State University | May 2021{" "}
                <br />
                <br />
                Major: Industrial Technology (Computer Electronics and Network
                Technology)
                <br />
                <br />
                Minor: Business Administration
                <br />
                <br />
                Organizations: Epsilon Pi Tau Honors Society (Rho Chapter)
                <br />
                <br />
                Honors: Dean's Scholar Distinction: Spring 2018, Fall 2018,
                Spring 2019
              </EduExpText>
            </EduExpWrapper>
            <VerticalDivider />
            <EduExpWrapper>
              <EduExpTitle>Experience</EduExpTitle>
              <EduExpText>
                TiVo Corporation | San Jose, CA | Software Engineer Intern
                <br />
                <SubText>JUNE 2019 - AUGUST 2019</SubText>
                <br />
                Designed and architected serialized REST API endpoints to
                empower operations employees to increase service reliability
                <br />
                <br />
                Decreased troubleshooting time by implementing a user interface
                that visualizes service conditions
                <br />
                <br />
                Proposed, designed and implemented a Slack bot that provides
                status information for vital internal processes
              </EduExpText>
            </EduExpWrapper>
          </BottomContent>
        </BottomContentWrapper>
        <LinkWrapper>
          <AnchorLink to="/#projectretail">
            <LinkText>Check out my most recent project</LinkText>
          </AnchorLink>
        </LinkWrapper>
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
  height: auto;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px 0px 0px 0px;
  display: grid;
  justify-content: center;
`;

const TopContentWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: auto
  gap: 30px;
`;

const Title = styled(H1)`
  color: white;
  text-align: center;
  margin-top: 50px;
  font-size: 45px;

  @media (max-width: 800px) {
    margin-top: 50px;
    font-size: 40px;
  }

  @media (max-width: 450px) {
    margin-top: 40px;
    font-size: 25px;
  }
`;

const DescriptionWrapper = styled.div`
  max-width: 700px;
  margin: auto;

  @media (max-width: 800px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 300px;
  }
`;

const Tagline = styled(H3)`
  text-align: center;
  margin: auto;
  margin-top: 40px;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 450px) {
    margin-top: 25px;
    font-size: 15px;
  }
`;

const Description = styled(MediumText)`
  margin: auto;
  margin-top: 40px;
  color: white;
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 450px) {
    margin-top: 35px;
    font-size: 14px;
  }
`;

const MasterSkillsWrapper = styled.div`
  display: grid;
  width: 700px;

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 300px;
  }
`;

const SkillsTitle = styled(H1)`
  color: white;
  text-align: center;
  margin-top: 80px;
  font-size: 35px;

  @media (max-width: 800px) {
    margin-top: 60px;
    font-size: 30px;

    @media (max-width: 450px) {
      margin-top: 40px;
      font-size: 20px;
    }
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: 800px) {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media (max-width: 450px) {
    flex-flow: column wrap;
    justify-content: space-around;
    align-content: space-around;
  }
`;

const Skill = styled(MediumText)`
  font-size: 17px;
  font-weight: bold;
  color: #bfbdbd;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const BottomContentWrapper = styled.div`
  margin-top: 150px;
  display: grid;
  margin-bottom: 200px;

  @media (max-width: 1000px) {
    margin-top: 90px;
    margin-bottom: 90px;
  }

  @media (max-width: 800px) {
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;

const BottomContent = styled.div`
  margin: auto;
  display: grid;
  gap: 150px;
  grid-template-columns: auto auto auto;

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    gap: 100px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    gap: 60px;
  }
  //max-width: 1200px;
`;

const VerticalDivider = styled.div`
  border-left: 1px solid white;
  height: 350px;
  position: relative;
  top: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HorizontalDivider = styled.div`
  border-bottom: 1px solid white;
  height: 1px;
  width: 90%;
  position: relative;
  margin: auto;
  margin-top: 90px;
  display: none;

  @media (max-width: 1000px) {
    display: grid;
  }

  @media (max-width: 800px) {
    margin-top: 90px;
  }

  @media (max-width: 450px) {
    margin-top: 40px;
  }
`;

const EduExpWrapper = styled.div`
  display: grid;
  align-content: start;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const EduExpTitle = styled(H2)`
  color: white;

  @media (max-width: 1000px) {
    justify-content: center;
    text-align: center;
  }
`;

const EduExpText = styled(MediumText)`
  margin-top: 60px;
  color: white;
  width: 400px;

  @media (max-width: 800px) {
    margin-top: 40px;
  }

  @media (max-width: 450px) {
    text-align: center;
    width: 300px;
    margin-top: 20px;
  }
`;

const BoldText = styled(MediumText)`
  margin-top: 60px;
  color: white;
  width: 400px;
`;

const SubText = styled(MediumText)`
  font-size: 11px;
  font-weight: bold;
  color: #bfbdbd;
`;

const LinkWrapper = styled.div`
  margin: auto;
  margin-bottom: 50px;
`;

const LinkText = styled(MediumText)`
  font-size: 16px;
  color: white;
  font-weight: bold;

  :hover {
    filter: brightness(60%) saturate(120%);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;

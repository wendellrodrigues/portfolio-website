import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Caption, SmallText } from "../styles/TextStyles";

export default function ProjectRetailButton(props) {
  const url = "https://www.projectretail.net/";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Wrapper href={url}>
        <Title>Visit Website</Title>
      </Wrapper>
    </a>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  padding: 12px;
  background: #6b81fc;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 0px;
  display: grid;
  align-items: center; //Aligns the items rather than the content (extra space)
  justify-content: center;
  border-radius: 20px;

  //All sub elements and parent have this element
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); //Animation 1s, 0.1s delay, cubicbez = animation
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-1px) scale(1.1); //Moves item up/down on hover
    -webkit-transform: translateY(-1px) scale(1.1);
    -ms-transform: translateY(-1px) scale(1.1);
    -webkit-transform: translateY(-1px) scale(1.1);
    -moz-transform: translateY(-1px) scale(1.1);
    -o-transform: translateY(-1px) scale(1.1);
  }

  @media (max-width: 800px) {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform-origin: top left;
    :hover {
      transform: translateY(-1px) scale(0.85); //Moves item up/down on hover
    }
  }

  @media (max-width: 650px) {
    transform: scale(0.6);
    -webkit-transform: scale(0.6);
    -ms-transform: scale(0.6);
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    -o-transform: scale(0.6);
    transform-origin: top left;
    :hover {
      transform: translateY(-1px) scale(0.65); //Moves item up/down on hover
    }
  }
`;

const Title = styled(Caption)`
  color: white;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

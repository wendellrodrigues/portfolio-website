import React from "react";
import styled from "styled-components";

export default function MockupAnimation() {
  const iPadURL = "https://www.projectretail.net/#ipad";
  const iPhoneURL = "https://www.projectretail.net/#iphone";

  return (
    <Wrapper>
      <a href={iPadURL} target="_blank" rel="noopener noreferrer">
        <div className="ipad" />
      </a>
      <a href={iPhoneURL} target="_blank" rel="noopener noreferrer">
        <div className="iphone" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  perspective: 10000;
  -webkit-backface-visibility: hidden;
  transform: scale(0.8);

  //Make smaller on ipad screens
  @media (max-width: 1400px) {
    transform: scale(0.6);
    transform-origin: top;
  }

  @media (max-width: 800px) {
    transform: scale(0.4);
    transform-origin: top;
  }

  div {
    transform: rotateY(-5deg) rotateX(5deg);
    transform-origin: bottom-left;
    cursor: pointer;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.ipad {
      transition-delay: 0s;
      transform: translate(10px, 0px);
    }
    &.iphone {
      transition-delay: 0.1s;
      transform: translate(-50px, 30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .ipad {
    position: absolute;
    width: 701px;
    height: 487.62px;
    left: 70px;
    top: 0px;
    background: url("/images/animations/ipad.svg"), rgba(23, 12, 61, 0.5);
    border-radius: 40px;

    @media (max-width: 900px) {
      left: 30px;
    }
    -webkit-backface-visibility: hidden;
  }
  .iphone {
    position: absolute;
    width: 226px;
    height: 455px;
    left: 0px;
    top: 100px;

    background: url("/images/animations/iphone.svg"), rgba(39, 20, 62, 0.3);
    -webkit-backface-visibility: hidden;
    border-radius: 33px;
  }
`;

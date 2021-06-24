import React from "react";
import styled, { keyframes } from "styled-components";

export default function Divider() {
  return <Wrapper>{/* <Rectangle /> */}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden; //Clip the overflow content
  height: 10px;
  width: 100%;
  background: white;
  justify-items: center;
  align-items: center;
`;

const Rectangle = styled.div`
  width: 100%;
  height: 46px;
  background: #0e0f17;
  align-self: center;
  margin: auto;
  margin-top: 2px;
  margin-bottom: 2px;
`;

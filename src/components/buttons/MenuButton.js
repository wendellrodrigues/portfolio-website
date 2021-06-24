import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Resume from "../../../static/images/Resume.pdf";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function MenuButton(props) {
  const { item } = props;

  //Handle downloadable resume
  if (item.title == "Resume") {
    return (
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        <MenuItem title={item.title}>{item.title}</MenuItem>
      </a>
    );
  }

  if (item.title == "Contact") {
    return (
      <a href="mailto:w@wendellrodrigues.com">
        <MenuItem title={item.title}>{item.title}</MenuItem>
      </a>
    );
  }

  if (item.icon !== "") {
    return (
      <MenuItem title={item.title} onClick={props.onClick}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    );
  }

  return (
    <AnchorLink to={item.link} onClick={props.onClick}>
      <MenuItem title={item.title}>{item.title}</MenuItem>
    </AnchorLink>
  );
}

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;

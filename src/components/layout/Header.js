import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { menuData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";
import MenuToolTip from "../tooltips/MenuToolTip";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  //prevents default clicking behavior for menu button
  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  function handleClickOutside(event) {
    //Make sure that the ref exists
    if (
      ref.current &&
      //Dont exit if click button
      !ref.current.contains(event.target) &&
      //Dont exit if clicked inside meny
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  //Click outside of profile button to dismiss  dropdown
  //Use effect listens to every single state change
  useEffect(() => {
    //Whenver doc is clicked on
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}

        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={(event) => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuToolTip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    //Adaptive screens (hamburger)
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    //Adaptive screens (hamburger)
    display: grid;
  }
`;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  return (
    <HeaderContainer>
      <span id="product-layer" onClick={handleClick}>
        <HeaderText>
          Product
          {toggle && (
            <div id="product-item-wrapper">
              <StyledNavLink to="/all" activeStyle={activeLinkStyle} hoverStyle={hoverLinkStyle}>All</StyledNavLink>
              <StyledNavLink to="/button" activeStyle={activeLinkStyle} hoverStyle={hoverLinkStyle}>Button</StyledNavLink>
              <StyledNavLink to="/tote" activeStyle={activeLinkStyle} hoverStyle={hoverLinkStyle}>Shopper Tote</StyledNavLink>
            </div>
          )}
        </HeaderText>
      </span>
      <span id="about-layer">
        <HeaderText>About</HeaderText>
      </span>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 50px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

const HeaderText = styled.h4`
  color: white;

  #product-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
}
`;

const activeLinkStyle = {
  color: "yellow", 
};

const hoverLinkStyle = {
  color: "yellow", 
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    ${hoverLinkStyle};
  }

  &.active {
    ${activeLinkStyle};
  }
`;
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useToggle } from "../../context/ToggleContext";

const Header = (props) => {
  const { toggle, isToggleVisible } = useToggle();

  return (
    <>
      <HeaderContainer>
        <span id="product-layer" onClick={toggle}>
          <HeaderText>
            Product
            <div
              id="product-item-wrapper"
              className={isToggleVisible ? "active" : ""}
            >
              <StyledNavLink
                to="/all"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                All
              </StyledNavLink>
              <StyledNavLink
                to="/buttons"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Buttons
              </StyledNavLink>
              <StyledNavLink
                to="/buckles"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Buckles
              </StyledNavLink>
              <StyledNavLink
                to="/accessories"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Clothing Accessories
              </StyledNavLink>
              <StyledNavLink
                to="/goods"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Goods
              </StyledNavLink>
            </div>
          </HeaderText>
        </span>
      </HeaderContainer>
    </>
  );
};

export default Header;

const activeLinkStyle = {
  color: "yellow",
};

const hoverLinkStyle = {
  color: "yellow",
};

const HeaderContainer = styled.div`
  padding-left: 30px;
  width: 100%;
  margin: 0 auto;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  top: 0px;
  z-index: 10;
`;

const HeaderText = styled.h4`
  color: white;

  &:hover {
    ${hoverLinkStyle};
    cursor: pointer;
  }

  #product-item-wrapper {
    max-height: 0px;
    height: 100vh;
    width: 50vw;
    overflow: hidden;
    transition: max-height 0.58s ease-out;
    font-size: 14px;
    padding: 10px;
    position: absolute;
    top: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    opacity: 0;
    pointer-events: none;

    &.active {
      max-height: 100vh;
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

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

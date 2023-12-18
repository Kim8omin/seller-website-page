import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/slice";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [isToggleVisible, setIsToggleVisible] = useState(false);
  const toggleState = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsToggleVisible(true);
    dispatch(toggle());
    console.log (toggleState); 
  };

  return (
    <HeaderContainer>
      <span id="product-layer" onClick={handleClick}>
        <HeaderText>
          Product
          {isToggleVisible && (
            <div id="product-item-wrapper">
              <StyledNavLink
                to="/all"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                All
              </StyledNavLink>
              <StyledNavLink
                to="/button"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Button
              </StyledNavLink>
              <StyledNavLink
                to="/tote"
                activeStyle={activeLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Shopper Tote
              </StyledNavLink>
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

const activeLinkStyle = {
  color: "yellow",
};

const hoverLinkStyle = {
  color: "yellow",
};

const HeaderContainer = styled.div`
  padding-top:15px;
  padding-left:30px;
  width:100%;
  margin: 0 auto;
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

  &: hover {
    ${hoverLinkStyle};
    cursor: pointer;
  }

  #product-item-wrapper {
    font-size: 12.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
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


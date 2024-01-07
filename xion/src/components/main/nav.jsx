import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./header";

const Nav = () => {
  return (
    <NavContainer>
      <span>
        <NavText>
          <Header />
        </NavText>
      </span>
      <span>
        <NavLink to={"/contact"}>
          <NavText>Contact & Location</NavText>
        </NavLink>
      </span>
      <span>
        <NavLink to={"/location"}>
          <NavText>About Us</NavText>
        </NavLink>
      </span>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
	width: 100%;
	margin: 0 auto;
  padding-right:50px;
	height: 35px;
	align-items: center;
  justify-content: flex-end;
  display: flex;
	flex- direction: row;
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

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavText = styled.h4`
  color: white;
  &:hover {
    color: yellow;
  }
`;

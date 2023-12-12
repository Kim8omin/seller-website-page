import React from "react";
import styled from "styled-components";
import Header from "./header";
import Nav from "./nav";
import blackLogo from "../../assets/blackLogo.jpeg";

const Layout = ({ children }) => {
  return (
    <Contents>
      <Container>
        <Header />
        <Logo src={blackLogo} alt="logo" />
        <Nav />
      </Container>
      {children}
    </Contents>
  );
};

export default Layout;


const Contents  = styled.div`
display: flex;
flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: pink;
  width: 100%;
  margin: 0 auto;
  height: 115px;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0px; /* 도달했을때 고정시킬 위치 */
  z-index: 10;


  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 80px;
`;

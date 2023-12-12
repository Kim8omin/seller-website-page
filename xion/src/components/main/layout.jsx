import React from "react";
import styled from "styled-components";
import Header from "./header";
import Nav from "./nav";
import blackLogo from "../../assets/blackLogo.jpeg";
import Footer from "./footer";
import Sns from "./sns";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Contents>
      <Container>
        <Header />
        <Link to="/">
          <Logo src={blackLogo} alt="logo" />
        </Link>
        <Nav />
      </Container>
      {children}
      <SnsWrapper>
        <Sns />
      </SnsWrapper>
      <Footer />
    </Contents>
  );
};

export default Layout;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const SnsWrapper = styled.div`
  position: fixed;
  bottom: 10px; /* 원하는 위치로 조절 */
  left: 10px; /* 원하는 위치로 조절 */
  z-index: 10;
`;

const Logo = styled.img`
  width: 80px;
`;

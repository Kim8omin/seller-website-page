import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Sns from "./sns";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/slice";
import namedLogo from "../../assets/namedLogo.png";

const Layout = ({ children }) => {
  const toggleState = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(toggle());
    window.location.href = "/";
  };

  return (
    <Contents>
      <Container>
        <div className="wrapper">
          <Logo src={namedLogo} alt="namecard" onClick={handleLogoClick} />
          <NavWrapper>
            <Nav />
          </NavWrapper>
        </div>
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
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 70px;
  gap: 20px;
  position: sticky;
  top: 0px;
  z-index: 10;

  .wrapper {
    display: flex;
    justify-content: center; /* 요소들을 양쪽 끝으로 푸시 */
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 430px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SnsWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 10;
`;

const Logo = styled.img`
  width: 100px;
  margin-top: 3px;
  cursor: pointer;
`;

const NavWrapper = styled.div`
  margin-left: auto; /* Nav를 오른쪽으로 이동시킴 */
`;

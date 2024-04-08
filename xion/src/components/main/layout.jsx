import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./nav";
import Footer from "./footer";
import Sns from "./sns";
import namecard from "../../assets/namecard.png";
import mobileXion from "../../assets/mobileXion.png";
import MediaQuery from "react-responsive";
import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState("");
  const onToggle = () => {
    setToggle((prev) => (prev === "" ? "true" : ""));
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <Contents>
      <MediaQuery minWidth={769}>
        <Container>
          <div className="wrapper">
            <Logo src={namecard} alt="namecard" onClick={handleLogoClick} />
            <NavWrapper>
              <Nav />
            </NavWrapper>
          </div>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <MobileLayer toggle={toggle}>
          <img
            src={hamburger}
            alt="hamburger"
            onClick={onToggle}
            width="25px"
          />
          <span>
            <img
              src={mobileXion}
              alt="namecard"
              onClick={handleLogoClick}
              width="60px"
            />
          </span>
          <div id="empty-space"></div>
        </MobileLayer>
        {toggle && <Overlay onClick={onToggle} />}
        {toggle && (
          <ToggleLayer>
            <NavWrapped>
              <span
                onClick={() => {
                  onToggle();
                }}
              >
                <MobileNav>
                  <span>
                    <img
                      src={mobileXion}
                      alt="namecard"
                      onClick={handleLogoClick}
                      width="60px"
                    />
                  </span>
                </MobileNav>
              </span>
              <Link
                to="/all"
                onClick={() => {
                  onToggle();
                }}
                style={{ textDecoration: "none" }}
              >
                <span>
                  <MobileNav>
                    <NavText>Products</NavText>
                  </MobileNav>
                </span>
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  onToggle();
                }}
                style={{ textDecoration: "none" }}
              >
                <span>
                  <MobileNav>
                    <NavText>Contact & Location</NavText>
                  </MobileNav>
                </span>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  onToggle();
                }}
                style={{ textDecoration: "none" }}
              >
                <span>
                  <MobileNav>
                    <NavText>About Us</NavText>
                  </MobileNav>
                </span>
              </Link>
            </NavWrapped>
          </ToggleLayer>
        )}
      </MediaQuery>
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
    justify-content: center;
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
  margin-left: auto;
`;

const MobileLayer = styled.div`
  width: 100%;
  display: ${({ toggle }) => (toggle === "true" ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  img {
    cursor: pointer;
    padding: 20px;
  }

  span h2 {
    color: #f9fcf7;
    font-size: 1.1rem;
    text-align: center;
  }

  #empty-space {
    width: 60px;
  }
`;

const ToggleLayer = styled.div`
  display: flex;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
`;

const NavWrapped = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  color: black;
  text-align: center;
  line-height: 3;
  z-index: 2;
`;

const MobileNav = styled.div`
  text-decoration: none;
`;

const NavText = styled.h4`
  cursor: pointer;
  color: black;
  &:hover {
    color: #f9fcf7;
  }
`;

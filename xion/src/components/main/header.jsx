import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <HeaderText>Product</HeaderText>
      </span>
      <span>
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
`;

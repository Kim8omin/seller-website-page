import React from "react";
import styled from "styled-components";
import insta from "../../assets/insta.png";
import kakao from "../../assets/kakao.png";

const Footer = () => {
  return (
    <FooterLayer>
      <FooterContent>
        <address>
          83, Gwangnaru-ro 40-gil, Gwangjin-gu, Seoul, Republic of Korea
          <br />
          C.E.O : Sang Yeob Kim
          <br />
          Registered Business number : 2023-서울광진-2307
          <br />
          <a href="#">Confirming verified official business documents &gt;</a>
          <br />
          Copyright © 엑스아이오엔 XION R&D. All rights reserved.
        </address>
      </FooterContent>
    </FooterLayer>
  );
};

export default Footer;

const FooterLayer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  border-top: 1px solid #dddbdb;
  padding-bottom: 30px;
  margin: 0 auto;
  font-size: 12px;
  color: #555;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }
  h1 {
    a {
      background-position: -19px -34px;
      width: 117px;
      height: 34px;
    }
  }
`;

const FooterContent = styled.div`
  width: 40%;
  margin: 40px auto;
  line-height: 1.6;
  display: flex;
  justify-content: center;

  img {
    display: flex;
    margin: 50px auto;
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }

  a {
    text-decoration: none;
    color: #555;
    &:last-child {
    }
    strong {
      font-weight: bold;
    }
    em {
      font-size: 24px;
      font-family: Tahoma;
      font-weight: bold;
      display: block;
      margin: 9px 0 11px 0;
    }
  }
`;

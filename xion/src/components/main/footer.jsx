import React from 'react';
import styled from 'styled-components';
import insta from '../../assets/insta.png';
import kakao from '../../assets/kakao.png';

const Footer = () => {
    return (
      <footer>
        <FooterLayer>
          <FooterContent>
            <address>
              서울특별시 광진구 광나루로 40길 83 1층 101호 (주)엑스아이오엔
              <br />
              대표이사 : 김상엽
              <br />
              사업자신고 : 2023-서울광진-2307
              <br />
              <a href="#">사업자정보 확인 &gt;</a>
            </address>
          </FooterContent>
        </FooterLayer>
      </footer>
    );
  };
  
  export default Footer;
  
  const FooterLayer = styled.div`
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
    margin: 0 auto;
    margin-top: 20px;
  
    display: flex;
    justify-content: center;
    
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
import React from "react";
import styled from "styled-components";
import insta from "../../assets/insta.png";
import kakao from "../../assets/kakao.png";

const Sns = () => {
  return (
    <SnsLayer>
      <SnsContent>
        <div className="sns-info">
          <a href="https://www.instagram.com/chelseaion_/">
            <img id="insta" src={insta} alt="instagram" />
          </a>
          <a href="#">
            <img id="kakao" src={kakao} alt="kakao" width='10px'/>
          </a>
        </div>
      </SnsContent>
    </SnsLayer>
  );
};

export default Sns;

const SnsLayer = styled.div`
  width: 117px;
  height: 34px;
  position: sticky;
  top: 0px; 
  z-index: 10;

`;

const SnsContent = styled.div`
  width: 100%;
  margin: 0 auto;
  

  #sns-info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

  img {
    width: 1.3rem;
    margin-left: 20px;
  }

`;

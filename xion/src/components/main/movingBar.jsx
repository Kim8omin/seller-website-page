import React from "react";
import styled from "styled-components";

const MovingBar = () => {
  return (
    <Background>
      <AnimationContainer>
        <span className="text">
          ///Xion Product R&D/// ///Xion Product R&D/// ///Xion Product R&D///
        </span>
      </AnimationContainer>
    </Background>
  );
};

const Background = styled.div`
  height: 40px;
  background-color: white;
`;

const AnimationContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;

  .text {
    color: #231e20;
    font-size: 30px;
    display: inline-block;
    padding-left: 100%;
    animation: moveText 15s linear infinite;
  }

  @keyframes moveText {
    to {
      transform: translateX(-100%);
    }
  }
`;

export default MovingBar;

import React from "react";
import styled from "styled-components";
import section2 from "../../assets/section2.png";

const Feature = () => {
  return (
    <Wrapper>
      <img src={section2} alt="feature_section" width="100%" />
    </Wrapper>
  );
};

export default Feature;

const Wrapper = styled.div``;

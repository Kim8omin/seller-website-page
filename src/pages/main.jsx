import React from "react";
import About from "../components/main/about";
import styled from "styled-components";
import ContactComponent from "../components/main/contactCompo";
import FortpolioTwo from "../components/main/fortpolio2";
import ViewProduct from "../components/card/ViewProduct";

const Main = () => {
  return (
    <Wrapper>
      <About />
      <ViewProduct/>
      <FortpolioTwo/>
      <ContactComponent />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

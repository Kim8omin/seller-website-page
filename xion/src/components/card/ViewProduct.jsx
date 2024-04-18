import React from "react";
import styled from "styled-components";
import CardList from "./CardList";

const ViewProduct = () => {
  return (
    <Section>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "45px",
          fontWeight: "bold",
        }}
      >
        View by Product
      </h2>
      <CardList />
    </Section>
  );
};

export default ViewProduct;

const Section = styled.div``;

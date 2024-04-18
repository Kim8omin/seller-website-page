import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <ProductLayout>
      <h2 style={{ color: "white" }}>Product Detail Image</h2>
      <img
        src={`/dataimg/${params.productId}.jpeg`}
        alt={`Product ${params.productId}`}
        style={{ maxWidth: "100%" }}
      />
      <p style={{ color: "white" }}>{params.productId}</p>
    </ProductLayout>
  );
};

export default ProductDetails;

const ProductLayout = styled.div`
margin: 50px; auto;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
text-align: center;

h2 {
    margin: 10px;
    padding: 20px;
    font-size: 2rem;
}

p {
    text-decoration: none;
    margin: 10px;
    padding: 20px;
}
`;

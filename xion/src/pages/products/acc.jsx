import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Acc = () => {
  const [products, setProducts] = useState([
    { img: "", title: "", content: "" },
  ]);

  useEffect(() => {
    fetch("http://localhost:8001/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === "others"
  );

  return (
    <ProductsWrapper>
      <ItemWrapper>
        {filteredProducts.map((p) => (
          <div id="item-container" key={p.img}>
            <Link to={`/productDetails/${p.title}`}>
              <img src={p.img} alt="product_img" />
              <h6>{p.title}</h6>
              <p>{p.content}</p>
            </Link>
          </div>
        ))}
      </ItemWrapper>
    </ProductsWrapper>
  );
};

export default Acc;

const ProductsWrapper = styled.div`
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 50px;

  .item-container {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 250px;
    height: 360px;
    border-radius: 20px;

    &:hover {
      transform: scale(1.01) !important;
    }
  }

  h6 {
    font-size: 1.2rem;
    text-decoration: none;
    color: black;

    &:hover {
      color: grey;
    }
  }
  p {
    text-decoration: none;
    color: black;

    &:hover {
      color: grey;
    }
  }
`;

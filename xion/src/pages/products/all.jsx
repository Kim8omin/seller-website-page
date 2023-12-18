import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const All = () => {
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

  return (
    <ProductsWrapper>
      <ItemWrapper>
        {products.map((p) => (
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

export default All;

const ProductsWrapper = styled.div`
margin: 70px auto;
display: flex;
align-items: center;
justify-content: center;

`

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
    border-radius: 0px;
  }

  h6 {
    font-size:1.2rem;
    color: white;

    &:hover {
      color: yellow;
    }
  }
  p {
    color: white;

    &:hover {
      color: yellow;
    }
  }
`;

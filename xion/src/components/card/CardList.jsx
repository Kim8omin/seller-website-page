import React, { useState, useEffect } from "react";
import ViewByCard from "./ViewByCard";
import styled from "styled-components";


const CardList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const productList = [
      {
        id:0,
        img: "",
        productName: "Buckle",
        productDetail1: "Bags",
        productDetail2: "Caps",
        productDetail3: "Clothing",
        productDetail4: "Other Supplies",
      },
      {
        id:1,
        img:"",
        productName: "Button",
        productDetail1: "Clothing",
        productDetail2: "",
        productDetail3: "",
        productDetail4: "",
      },
      {
        id:2,
        img: "",
        productName: "Goods",
        productDetail1: "Shopping Totes Bags",
        productDetail2: "",
        productDetail3: "",
        productDetail4: "",
      },
      {
        id:3,
        img: "",
        productName: "Accessories",
        productDetail1: "Overlock Patches",
        productDetail2: "Others",
        productDetail3: "",
        productDetail4: "",
      },
    ];

    setList(productList);
  }, []);

  return (
    <CardListLayer>
      {list.map((product) => (
        <ViewByCard
          id={product.id}
          img={product.img}
          productName={product.productName}
          productDetail1={product.productDetail1}
          productDetail2={product.productDetail2}
          productDetail3={product.productDetail3}
          productDetail4={product.productDetail4}
        />
      ))}
    </CardListLayer>
  );
};

export default CardList;

const CardListLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;

  @media (max-width: 915px) {
    flex-wrap: wrap;
  }

  @media (max-width: 450px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

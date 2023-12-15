import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const AllProduct = () => {
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
    <>
      <h1>모든제품페이지</h1>
      <ul>
        {products.map((p) => (
          <li key={p.img}>
            
            <Link to={`/productDetails/${p.title}`}>
            <img src={p.img} alt="product_img" />
            {p.title}
            {p.content}
            </Link>
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllProduct;

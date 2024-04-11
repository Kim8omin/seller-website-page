import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const All = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [products, setProducts] = useState([
    { img: "", title: "", content: "" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(dataList);
        console.log(products);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8001/products")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product?.category === selectedCategory);

  return (
    <ProductsWrapper>
      <CategoryButtons>
        <button onClick={() => setSelectedCategory("all")}>| ALL |</button>
        <button onClick={() => setSelectedCategory("button")}>
          | BUTTONS |
        </button>
        <button onClick={() => setSelectedCategory("buckle")}>
          | BUCKLES |
        </button>
        <button onClick={() => setSelectedCategory("others")}>
          | CLOTHING ACCESSORIES |
        </button>
        <button onClick={() => setSelectedCategory("goods")}>| GOODS |</button>
      </CategoryButtons>
      <ItemWrapper>
        {filteredProducts.map((p) => (
          <div id="item-container" key={p?.id}>
            <Link
              to={`/productDetails/${p?.title}`}
              style={{ textDecoration: "none" }}
            >
              <img src={p?.img} alt="product_img" />
              <h6>{p?.title}</h6>
              <p>{p?.content}</p>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryButtons = styled.div`
  display: flex;
  margin-bottom: 50px;

  button {
    border: none;
    cursor: pointer;
    &:hover {
      color: grey;
    }
    @media (max-width: 500px) {
      width: 50%;
    }
  }
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

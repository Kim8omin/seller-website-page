import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <ProductLayout>
      <h2 style={{ color: "white" }}>Product Detail Image</h2>
      {product ? (
        <>
          <img
            src={product.img}
            alt={product.title}
            style={{ maxWidth: "100%" }}
          />
          <p style={{ color: "white" }}>{product.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
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

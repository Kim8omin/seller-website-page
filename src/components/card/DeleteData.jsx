import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import styled from "styled-components";

const DeleteData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(dataList);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter((product) => product.id !== id));
      console.log("Document successfully deleted!");
      window.alert("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Category</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>
              <img src={item.img} alt="img" width={30} />
            </td>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>
              <DeleteButton onClick={() => handleDelete(item.id)}>
                Delete
              </DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default DeleteData;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

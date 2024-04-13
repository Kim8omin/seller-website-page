import React, { useState } from "react";
import styled from "styled-components";
import DeleteData from "../components/card/DeleteData";

const Admin = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Layer>
      {password === "abcd1997" ? (
        <DeleteData />
      ) : (
        <>
          <h2>Storage</h2>
          <p>Enter password to manage storage </p>
          <input type="text" onChange={handleChange} />
        </>
      )}
    </Layer>
  );
};

export default Admin;

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: auto;
  height: 100vh;

  h2 {
    font-size: 2rem;
  }
`;

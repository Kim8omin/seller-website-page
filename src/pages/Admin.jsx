import React, { useState } from "react";
import styled from "styled-components";
import AdminDataInput from "../components/card/AdminDataInput";

const Admin = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Layer>
      {password === "abcd1997" ? (
        <AdminDataInput />
      ) : (
        <>
          <h2>Admin Page</h2>
          <p>Enter password to upload the data </p>
          <input type="password" onChange={handleChange} />
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

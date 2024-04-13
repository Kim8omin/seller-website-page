import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AdminDataInput = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    content: "",
    category: "",
  });

  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addDoc(collection(db, "products"), {
        ...data,
      });
      console.log("data:", data);
      console.log("response", response);
      window.alert("data has been stored in database ! ");
      setData({
        id: "",
        title: "",
        content: "",
        category: "",
      });
      setFile("");
    } catch (e) {
      console.log("firebase post error", e);
    }
  };

  return (
    <Layer>
      <p>fill out the data field below for upload.</p>
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={data.title}
          />
        </label>
        <label>
          content:
          <input
            type="text"
            onChange={handleChange}
            name="content"
            value={data.content}
          />
        </label>
        <label>
          category:
          <input
            type="text"
            onChange={handleChange}
            name="category"
            value={data.category}
          />
        </label>
        <label>
          img file:
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            name="file"
          />
        </label>
        <button disabled={perc !== null && perc < 100}>submit</button>
      </form>
    </Layer>
  );
};

export default AdminDataInput;

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
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    font-size: 1.2rem;
  }

  input[type="text"],
  input[type="file"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }

  input[type="file"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
    background-color: #f9f9f9;
  }

  input[type="text"]:focus,
  input[type="file"]:focus {
    outline: none;
    border-color: #007bff;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

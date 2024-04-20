import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import DeleteData from "./DeleteData";

const AdminDataInput = () => {
  const [data, setData] = useState({
    id: uuidv4(),
    title: "",
    content: "",
    category: "",
  });

  const fileRef = useRef();

  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const addFirebaseContents = async () => {
    try {
      const response = await setDoc(doc(db, "products", data.id), {
        ...data,
      });
      console.log("data:", data);
      console.log("response", response);
      window.alert("data has been stored in database ! ");
      setData({
        id: uuidv4(),
        title: "",
        content: "",
        category: "",
      });
      setFile(null);
      fileRef.current.value = "";
      setTrigger(false);
    } catch (e) {
      console.log("firebase post error", e);
    }
  };
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress === 100) {
            addFirebaseContents();
          }
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
    if (file && trigger) {
      uploadFile();
    }
  }, [trigger]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      window.alert("파일을입력하시오");
    }
    setTrigger(true);
  };
  console.log(file);
  console.log(trigger);

  return (
    <>
      <Layer>
        <InputLayer>
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
                ref={fileRef}
              />
            </label>
            <span>
              <button disabled={perc !== null && perc < 100}>submit</button>
            </span>
          </form>
        </InputLayer>
      </Layer>
    </>
  );
};

export default AdminDataInput;

const Layer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: evenly;
`;

const InputLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

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
    background-color: gray;
    cursor: not-allowed;
  }
`;

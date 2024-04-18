import { db } from "../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function Test() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() });
        });
        setTest(dataList);
        console.log(test);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>test입니다. !!!</h2>
      <div>
        <ul>
          {test?.map((i) => (
            <div key={i.id}>
              <li>Category: {i.category}</li>
              <li>Content: {i.content}</li>
              <li>Title: {i.title}</li>
              <img src={i.img} alt="product_img" />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Test;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContactCompoWrap } from "../components/main/contactCompo";

const AboutUs = () => {
  const [render, setRender] = useState([]);

  useEffect(() => {
    const aboutUsList = [
      {
        id: 0,
        img: "",
        title: "Continuous Product Development",
        description:
          "Through innovative technologies and creative ideas, we are constantly developing new products, catering to diverse customer needs and providing solutions that are always on the cutting edge.",
      },
      {
        id: 1,
        img: "",
        title: "Thorough Quality Management",
        description:
          "Our products undergo rigorous quality control at every stage to ensure the highest standards. A robust quality management system is in place to maintain excellence in our products.",
      },
      {
        id: 2,
        img: "",
        title: "Swift Delivery",
        description:
          "With efficient production processes, we ensure fast delivery, valuing our customers time. Our commitment to quick service builds trust and reliability among our clientele.",
      },
    ];

    setRender(aboutUsList);
  }, []);

  return (
    <ContactCompoWrap>
      <h6 id="contactTitle">About us</h6>
      <h2 id="contactSubTitle">
        Our journey to craft qualified garment accessories began
        <br />
        with our parent company, founded in 1992. 
        <br/>From there, Xion R&D gained
        motivation and expanded
        <br />
        scope to include various products and goods. We pledge four promises
        to you.
      </h2>
      <PhotoLayer>
        <ul className="contentsLayer">
          {render.map((list, index) => (
            <li key={index}>
              <div className="img" height={300}>
              <img
                src={`/about${list.id + 1}.jpg`}
                alt={list.title}
                width={350}
                height={300}
              />
              </div>
              <div className="articleLayer">
                <h3>{list.title}</h3>
                <p>{list.description}</p>
              </div>
            </li>
          ))}
        </ul>
        </PhotoLayer>
    </ContactCompoWrap>
  );
};

export default AboutUs;

const PhotoLayer = styled.div`
 
.contentsLayer{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 35px;
  margin-bottom: 100px;
}


li {
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
margin-bottom: 5px;
border-radius: 20px;
width: 350px;

.articleLayer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  height: 300px;
  padding: 8px;
  margin-top: -5.5px;
  box-shadow: inset 0 -20px 0 #F9E6A8; 
}

  h3{
  display: inline;
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 15px;
  color: #45413E;
}

p{
  margin-bottom:15px;
  line-height: 1.5;
}

}


}

`
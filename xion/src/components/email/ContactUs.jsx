import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import envelopBlack from "../../assets/envelopBlack.png";
import { Icon } from "../main/contactCompo";
import { ContactInfo } from "../main/contactCompo";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "homepage_customer99",
        "template_k33i1gy",
        form.current,
        "xdNLfPZxcIbK9M4T3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <ContactForm ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Name"/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Please enter your email address"/>
        <label>Email to</label>
        <EmailLayer>
        <ContactInfo>
            <Icon src={envelopBlack} alt="envelop" style={{marginLeft:"2px", marginRight:"10px", marginTop:"0"}}/>
            <p>x-ion@naver.com</p>
          </ContactInfo>
          </EmailLayer>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" placeholder="Any inquiry??"/>
      </ContactForm>
   
  );
};



const ContactForm = styled.form`
  width: 100%;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8); /* 투명한 배경색 */

  label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 100px;
  }

  input[type='submit'] {
    background: black;
    color: white;
    text-decoration: none;
    text-align: center;
    margin: auto 0;
    width: 250px;
    padding: 10px; 50px;
    border-radius: 35px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    box-shadow: none;
    border: none; 
    cursor: pointer; 
    margin-left: auto;
    display:block;

    &: hover {
    background: grey;
    color: white;
    }
  }
`;

const EmailLayer = styled.div`
    width: 100%;
    height: 37px;
    padding: 10px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
`
import styled from "styled-components"

const Button = styled.div`

    background: black;
    color: white;
    text-decoration: none;
    text-align: center;
    display: block;
    margin-top: 50px;
    margon-bottom: 20px;
    width: 250px;
    padding: 10px; 50px;
    border-radius: 35px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    box-shadow: none;
    border: none; 
    cursor: pointer; 

    &: hover {
    background: grey;
    color: white;
    }


`

export default Button;
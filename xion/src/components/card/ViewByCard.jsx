import React from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.png";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";

const ViewByCard = (props) => {
  return (
    <Card>
      <CardLayer>
        <ul className="contents-container">
          <div className="card-image">
            <img src={`/img${props.id + 1}.png`} alt="img" width="55%" />
          </div>
          <li className="product-name">{props.productName}</li>
          <li className="product-detail">{props.productDetail1}</li>
          <li className="product-detail">{props.productDetail2}</li>
          <li className="product-detail">{props.productDetail3}</li>
          <li className="product-detail">{props.productDetail4}</li>
          <div className="button-layer">
            <Link to="/all" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "90%",
                  margin: "55px 0px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <h2>View All</h2>
                <img src={arrow} alt="arrow" width={20} />
              </Button>
            </Link>
          </div>
        </ul>
      </CardLayer>
    </Card>
  );
};

export default ViewByCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 450px;
  min-width: 250px;
  min-height: 300px;
  margin: 20px;
  gap: 10px;
  background-color: #f9e6a8;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

const CardLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  background-color: #f9e6a8;
  line-height: 1.6;

  & .contents-container {
    display: flex;
    margin: 0 0;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 240px;
    height: 400px;

    & .product-name {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 15px;
      font-size: 24px;
    }
    & .button-layer {
      position: absolute;
      top: 230px;
      margin: 55px;
      width: 100%;
    }
  }
`;

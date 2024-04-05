import React from "react";
import styled from "styled-components";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import envelop from "../../assets/envelop.png";
import { ContactUs } from "../email/ContactUs";

const ContactComponent = () => {
  return (
    <ContactCompoWrap>
      <h6 id="contactTitle">Contact & Location</h6>
      <h2 id="contactSubTitle">
        Initiate your initiatives with our seasoned experience and expertise.{" "}
        <br />
        Through our collaboration, the meticulous details of your product will
        provide fulfillment to your customers.
      </h2>
      <ContactLayer>
        <ContactWrapper>
        <ContactUs />
          <AddressLayer>
            <LocationInfo>
              <Icon src={location} alt="location" />
              <div>
                <h6>Seoul office</h6>
                <p>
                  Unit #101, 83 Gwangnaru-ro 40-gil, Gwangjin-gu, Seoul, South
                  Korea
                </p>
              </div>
            </LocationInfo>

            <LocationInfo className="global">
              <Icon src={location} alt="location" />
              <div>
                <h6>Guangzhou branch office</h6>
                <p>
                  Unit #212, Seongpung Building, Samwon-ri, Baiyun-gu,
                  Guangzhou, Guangdong Province, China
                </p>
              </div>
            </LocationInfo>
          </AddressLayer>
        </ContactWrapper>
      </ContactLayer>
    </ContactCompoWrap>
  );
};

export default ContactComponent;

export const ContactCompoWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c8cbd6;
  line-height: 1.4;
  gap: 25px;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;

  #contactTitle {
    color: #45413e;
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 3px;
  }

  #contactSubTitle {
    color: black;
    font-size: 15px;
    text-align: center;
  }
`;

const ContactLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    width: 20px;
    margin-right: 10px;
    margin-left: -10px; /* 메일 주소 아이콘 왼쪽으로 이동 */
  }

  p {
    color: #45413e;
    font-family: "Open Sans", Arial, sans-serif;
  }
`;

const AddressLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 45px;

  .global {
    margin-top: 20px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  img {
    width: 20px;
    margin-right: 10px;
  }

  h6 {
    font-size: 20px;
    color: #45413e;
  }

  p {
    color: #45413e;
    font-family: "Open Sans", Arial, sans-serif;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
  margin-top: 10px;
`;

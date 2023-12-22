import React from "react";
import styled from "styled-components";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import envelop from "../../assets/envelop.png";

const ContactComponent = () => {
  return (
    <ContactCompoWrap>
      <h6 id="contactTitle">Initiate your ideas with our expertise</h6>
      <ContactLayer>
        <ContactWrapper>
          <ContactInfo>
            <Icon src={phone} alt="phone" />
            <div>
              <p>+82-10-9460-5101</p>
              <p>+82-2-6408-6834</p>
            </div>
          </ContactInfo>
          <ContactInfo>
            <Icon src={envelop} alt="envelop" />
            <p>x-ion@naver.com</p>
          </ContactInfo>
        </ContactWrapper>

        <AddressLayer>
          <LocationInfo>
            <Icon src={location} alt="location" />
            <div>
              <h6>Seoul office</h6>
              <p>Unit #101, 83 Gwangnaru-ro 40-gil, Gwangjin-gu, Seoul, South Korea</p>
            </div>
          </LocationInfo>

          <LocationInfo className="global">
            <Icon src={location} alt="location" />
            <div>
              <h6>Guangzhou branch office</h6>
              <p>Unit #212, Seongpung Building, Samwon-ri, Baiyun-gu, Guangzhou, Guangdong Province, China</p>
            </div>
          </LocationInfo>
        </AddressLayer>
      </ContactLayer>
    </ContactCompoWrap>
  );
};

export default ContactComponent;

const ContactCompoWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #231e20;
  gap: 25px;
  padding: 20px;
  margin: 30px;

  #contactTitle {
    color: white;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ContactLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    width: 20px;
    margin-right: 10px;
  }

  p {
    color: white;
    font-family: "Open Sans", Arial, sans-serif;
  }
`;

const AddressLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:15.2px;

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
    color: white;
  }

  p {
    color: white;
    font-family: "Open Sans", Arial, sans-serif;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

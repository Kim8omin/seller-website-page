import React from "react";
import styled from "styled-components";
import main_button from "../../assets/main_button.png";
import Button from "../../styles/Button"

const About = () => {
  return (
    <Wrapper>
      <PageLayout>
        <ImageContainer>
          <img src={main_button} alt="about" width="100%"/>
          <ParagraphLayout>
            <h2>
              Now is the time
              <br />
              <span>to bring your idea </span>
              to life
            </h2>
            <p>
            XION R&D is a specialized company in the production and sourcing of garment accessories, promotional items, accessories, and merchandise giveaways. With years of experience in exporting, 
            <br/>
            we bring a wealth of expertise to the table. Our meticulous attention to detail promises to enhance your brand value in a reasonable manner.
            </p>
            <Button>Contact Us</Button>
          </ParagraphLayout>
        </ImageContainer>
      </PageLayout>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div``;

const PageLayout = styled.div``;
const ImageContainer = styled.div`
  position: relative;
`;

const ParagraphLayout = styled.div`
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: #111235;

  h2 {
    margin: 20px 0;
    font-weight: 200;
    font-size: 64px;
    line-height: 75px;
  }

  p {
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    }

  span {
    font-weight: bold;
  }

`;

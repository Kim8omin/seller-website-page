import React from "react";
import styled from "styled-components";
import main_button from "../../assets/main_button.png";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <PageLayout>
        <ImageContainer>
          <img src={main_button} alt="about" width="100%" />
          <ParagraphLayout>
            <h2>
              Now is the time
              <br />
              <span>to bring your idea </span>
              to life
            </h2>
            <p>
              XION R&D is a specialized company in the production and sourcing
              of garment accessories, promotional items, accessories, and
              merchandise giveaways. With years of experience in exporting,
              <br />
              we bring a wealth of expertise to the table. Our meticulous
              attention to detail promises to enhance your brand value in a
              reasonable manner.
            </p>
            <StyledLink to={"/contact"}>
              <Button>Contact Us</Button>
            </StyledLink>
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

    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 30px;
      min-width: 100%;
    }
    @media screen and (max-width: 560px){
      line-height: 40px;

    }
  }

  p {
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    @media screen and (max-width: 560px) {
      display: none;
    }
  }

  span {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    min-width: 50%;
  }
 
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

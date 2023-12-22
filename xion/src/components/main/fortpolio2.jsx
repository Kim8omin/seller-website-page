import { React, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import partnerData from "../../assets/carousel_partner";

const renderSlides = partnerData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

const FortpolioTwo = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <CarouselWrapper>
      <H2>
        <h2>///Partnership with///</h2>
      </H2>
      <CarouselLayer>
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={partnerData[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </CarouselLayer>
    </CarouselWrapper>
  );
};

export default FortpolioTwo;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
`
  const H2 = styled.div`
  background-color: white;
  width: 100%;
  margin:30px 0px 20px 0px;

  h2 {
    text-align: center;
  }
`

const CarouselLayer = styled.div`
  width: 100%
`

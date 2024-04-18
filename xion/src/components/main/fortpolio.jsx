import { React, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../assets/carousel_imgData";

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

const Fortpolio = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <CarouselWrapper>
      <H2>
        <h2>///Apparel Accessories///Goods///Development and Sourcing///</h2>
      </H2>
      <CarouselLayer>
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </CarouselLayer>
    </CarouselWrapper>
  );
};

export default Fortpolio;

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
  height: 15px;
  margin: 20px;

  h2 {
    text-align: center;
    font-size: 15px;
  }
`

const CarouselLayer = styled.div`
  width: 100%
`

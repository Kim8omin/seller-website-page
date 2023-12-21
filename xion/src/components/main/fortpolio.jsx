import { React, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../assets/carasel_imgData";

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
  justify-content: center;
  align-item: center;
`;
const CarouselLayer = styled.div`
  max-width: 400px;
  width: 100%;
`;

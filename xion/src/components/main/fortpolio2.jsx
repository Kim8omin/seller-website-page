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
      <h2 style={{'textAlign':'center', 'fontSize': '30px', 'margin':'45px', 'fontWeight':'bold'}} >Partner Collaborated Products</h2>
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
  margin: 0 auto;
`


const CarouselLayer = styled.div`
  width: 100%
`

import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../assets/carasel_imgData";

const renderSlides = imageData.map(image => (
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
    <div className="flex justify-center items-center py-5 px-3">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="w-[400px] lg:hidden">
          {renderSlides}
        </Carousel>
    </div>
  );
};

export default Fortpolio;

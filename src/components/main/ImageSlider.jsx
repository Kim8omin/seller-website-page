import React from 'react';
import styled from 'styled-components';

const ImageSlider = () => {
  const items = [
    'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
    'https://i.redd.it/tc0aqpv92pn21.jpg',
    'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
    'https://images7.alphacoders.com/878/878663.jpg',
    'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
    'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
  ];

  const handleNavigation = (direction) => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    direction === 'next' && slider.append(items[0]);
    direction === 'prev' && slider.prepend(items[items.length - 1]);
  };

  return (
    <SliderWrapper>
      <Slider className="slider">
        {items.map((item, index) => (
          <SlideItem key={index} style={{ backgroundImage: `url('${item}')` }}>
            <Content>
              <h2 className='title'>Title</h2>
              <p className='description'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </Content>
          </SlideItem>
        ))}
      </Slider>
      <Navigation>
        <button className="prev" onClick={() => handleNavigation('prev')}>
          &#9664;
        </button>
        <button className="next" onClick={() => handleNavigation('next')}>
          &#9654;
        </button>
      </Navigation>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const Slider = styled.ul`
  list-style: none;
  position: relative;
  height: 100%;
`;

const SlideItem = styled.li`
  width: 200px;
  height: 300px;
  list-style-type: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset;
  transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;

  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
  }

  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: calc(50% + 220px);
  }
  &:nth-child(5) {
    left: calc(50% + 440px);
  }
  &:nth-child(6) {
    left: calc(50% + 660px);
    opacity: 0;
  }
`;

const Content = styled.div`
  width: min(30vw, 400px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  font: 400 0.85rem helvetica, sans-serif;
  color: white;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: none;

  & .title {
    font-family: 'arial-black';
    text-transform: uppercase;
  }

  & .description {
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    font-size: 0.8rem;
  }

  & button {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    border: 2px solid white;
    border-radius: 0.25rem;
    padding: 0.75rem;
    cursor: pointer;
  }
`;

const Navigation = styled.nav`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  user-select: none;

  & button {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(0, 0, 0, 0.6);
    margin: 0 0.25rem;
    padding: 0.75rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default ImageSlider;

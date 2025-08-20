import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { SliderData } from './SliderData';

const Button = styled.button`
  margin: 10px 5px;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $active }) => ($active ? "#000000" : "#c4c4c4")};
  transition: background-color 0.3s ease;
`;

const ImageSlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % SliderData.length;
        carouselRef.current.goTo(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        showArrows={false}
        pagination={false}
        onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
      >
        {SliderData.map((item, i) => (
          <div key={i} style={{ width: "100%" }}>
            <img
              src={item.image}
              alt={`slide-${i}`}
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            />
          </div>
        ))}
      </Carousel>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        {SliderData.map((_, idx) => (
          <Button
            key={idx}
            $active={idx === activeItemIndex}
            onClick={() => {
              carouselRef.current.goTo(idx);
              setActiveItemIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

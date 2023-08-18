import React from "react";
import { PosterPrevArrow, PosterNextArrow } from "../Arrows/Arrows";
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <PosterNextArrow />,
  prevArrow: <PosterPrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false
      },
    },
  ],
};

export default settings;

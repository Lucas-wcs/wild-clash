import React from "react";
import PropTypes from "prop-types";
import { useRouteLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DisplayHero from "./DisplayHero";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 15,
    slidesToSlide: 6,
  },
  mobile: {
    breakpoint: { max: 700, min: 360 },
    items: 6,
    slidesToSlide: 6,
  },
};

function HeroesCard({
  selectHero1,
  selectHero2,
  setSelectHero1,
  setSelectHero2,
}) {
  const allHeroes = useRouteLoaderData("app");

  return (
    <div className="contenerImage">
      <Carousel
        responsive={responsive}
        swipeable="true"
        showDots={false}
        infinite="true"
        keyBoardControl="true"
        transitionDuration={500}
        customTransition="all 2s"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {allHeroes.map((her) => (
          <DisplayHero
            selectHero1={selectHero1}
            selectHero2={selectHero2}
            setSelectHero1={setSelectHero1}
            setSelectHero2={setSelectHero2}
            key={her.data.name}
            url={her.data.image.url}
            name={her.data.name}
          />
        ))}
      </Carousel>
    </div>
  );
}

HeroesCard.propTypes = {
  selectHero1: PropTypes.string.isRequired,
  setSelectHero1: PropTypes.string.isRequired,
  setSelectHero2: PropTypes.string.isRequired,
  selectHero2: PropTypes.string.isRequired,
};
export default HeroesCard;

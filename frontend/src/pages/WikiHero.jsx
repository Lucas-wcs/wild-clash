import { useRouteLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card";

function WikiHero() {
  const allHeroes = useRouteLoaderData("app");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  return (
    <div>
      <Carousel
        // eslint-disable-next-line react/jsx-boolean-value
        swipeable={true}
        responsive={responsive}
        // eslint-disable-next-line react/jsx-boolean-value
        infinite={true}
        customTransition="all 2s"
        itemClass="carousel-item-padding-40-px"
        className="wikiHero"
      >
        {allHeroes.length > 0 &&
          allHeroes.map((hero) => <Card hero={hero} key={hero.data.name} />)}
      </Carousel>
    </div>
  );
}

export default WikiHero;

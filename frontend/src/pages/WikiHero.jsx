import { useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
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

  const [searchHero, setSearchHero] = useState("");
  const [alignmentHero, setAlignmentHero] = useState("");
  const [selectedFilterGood, setSelectedFilterGood] = useState("");
  const [selectedFilterBad, setSelectedFilterBad] = useState("");

  const handleSearchHero = (event) => {
    const search = event.target.value;
    setSearchHero(search);
  };

  const handleFilterGood = () => {
    setSelectedFilterGood("filterGood");
    if (alignmentHero === "good") {
      setAlignmentHero("");
      setSelectedFilterGood("");
    } else {
      setAlignmentHero("good");
    }
  };

  const handleFilterBad = () => {
    setSelectedFilterBad("filterBad");
    if (alignmentHero === "bad") {
      setAlignmentHero("");
      setSelectedFilterBad("");
    } else {
      setAlignmentHero("bad");
    }
  };

  return (
    <div className="wikiHero">
      <div className="wikiFilters">
        <img
          className={`${selectedFilterGood}`}
          src="/images/filterHeroes.png"
          alt="filtre Heroes"
          onClick={handleFilterGood}
          role="presentation"
        />
        <input
          name="searchHero"
          type="text"
          placeholder="Search your hero..."
          onChange={handleSearchHero}
        />
        <img
          className={`${selectedFilterBad}`}
          src="/images/filterVilain.png"
          alt="filtre Bad Guys"
          onClick={handleFilterBad}
          role="presentation"
        />
      </div>

      <Carousel
        // eslint-disable-next-line react/jsx-boolean-value
        swipeable={true}
        responsive={responsive}
        // eslint-disable-next-line react/jsx-boolean-value
        infinite={true}
        customTransition="all 2s"
        itemClass="carousel-item-padding-40-px"
      >
        {allHeroes.length > 0 &&
          allHeroes
            .filter((align) =>
              align.data.biography.alignment.includes(alignmentHero)
            )
            .filter((search) =>
              search.data.name.toLowerCase().includes(searchHero.toLowerCase())
            )
            .map((filtered) => (
              <Card key={filtered.data.name} hero={filtered} />
            ))}
      </Carousel>
    </div>
  );
}

export default WikiHero;

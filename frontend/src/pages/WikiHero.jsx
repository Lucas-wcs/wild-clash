import { useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

function WikiHero() {
  const allHeroes = useRouteLoaderData("app");

  const [searchHero, setSearchHero] = useState("");
  const [alignmentHero, setAlignmentHero] = useState("");

  const handleSearchHero = (event) => {
    const search = event.target.value;
    setSearchHero(search);
  };

  const handleFilterGood = () => {
    if (alignmentHero === "good") {
      setAlignmentHero("");
    } else {
      setAlignmentHero("good");
    }
  };

  const handleFilterBad = () => {
    if (alignmentHero === "bad") {
      setAlignmentHero("");
    } else {
      setAlignmentHero("bad");
    }
  };

  return (
    <div className="wikiHero">
      <div className="wikiFilters">
        <img
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
          src="/images/filterVilain.png"
          alt="filtre Bad Guys"
          onClick={handleFilterBad}
          role="presentation"
        />
      </div>
      <div className="displayHeroes">
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
      </div>
    </div>
  );
}

export default WikiHero;

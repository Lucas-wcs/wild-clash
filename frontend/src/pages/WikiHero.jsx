import { useLoaderData } from "react-router-dom";
import WikiCard from "../components/WikiCard";

function WikiHero() {
  const allHeroes = useLoaderData();
  return (
    <div className="wikiHero">
      {allHeroes.map((hero) => (
        <WikiCard
          key={hero.data.name}
          url={hero.data.image.url}
          name={hero.data.name}
          fullname={hero.data.biography["full-name"]}
          alias={hero.data.biography.aliases[0]}
          birth={hero.data.biography["place-of-birth"]}
          intelligence={hero.data.powerstats.intelligence}
          durability={hero.data.powerstats.durability}
          strength={hero.data.powerstats.strength}
          power={hero.data.powerstats.power}
          speed={hero.data.powerstats.speed}
          combat={hero.data.powerstats.combat}
        />
      ))}
    </div>
  );
}

export default WikiHero;

import { useRouteLoaderData } from "react-router-dom";
import Card from "../components/Card";

function WikiHero() {
  const allHeroes = useRouteLoaderData("app");

  return (
    <div className="wikiHero">
      {allHeroes.length > 0 && allHeroes.map((hero) => <Card hero={hero} />)}
    </div>
  );
}

export default WikiHero;

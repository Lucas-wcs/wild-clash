import { useLoaderData } from "react-router-dom";
import DisplayHero from "../components/DisplayHero";

function WikiHero() {
  const allHeroes = useLoaderData();

  return (
    <div>
      {allHeroes.map((her) => (
        <DisplayHero
          key={her.data.name}
          url={her.data.image.url}
          name={her.data.name}
        />
      ))}
    </div>
  );
}

export default WikiHero;

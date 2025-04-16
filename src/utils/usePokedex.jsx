import { useEffect, useState } from "react";
import { poke_API, offset } from "../constants";

const usePokedex = () => {
  const [pokemonlist, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(poke_API + `?offset=${offset}`);
        const json = await response.json();
        const results = json.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon, index) => {
            const v2API = `${poke_API}${index + offset + 1}/`;
            const pokeResponse = await fetch(v2API);
            const pokeData = await pokeResponse.json();

            return {
              ...pokemon,
              details: pokeData,
            };
          })
        );

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return pokemonlist;
};

export default usePokedex;

import { useEffect, useState } from "react";
import { poke_API } from "../constants";

const usePokedex = () => {
  const [pokemonlist, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(poke_API);
        const json = await response.json();
        const results = json.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon, index) => {
            const v2API = `${poke_API}${index + 1}/`; // Assuming 1-based indexing
            const pokeResponse = await fetch(v2API);
            const pokeData = await pokeResponse.json();

            // Combine the original pokemon data with the detailed data
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

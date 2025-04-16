import React from "react";
import Shimmer from "./Shimmer";
import usePokedex from "../utils/usePokedex";
import Pokemon from "./Pokemon";

const Pokelist = () => {
  const list = usePokedex();
  console.log(list);

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-evenly flex-wrap mx-36">
      {list.map((pokemon) => {
        return <Pokemon key={pokemon.name} data={pokemon} />;
      })}
    </div>
  );
};

export default Pokelist;

import React from "react";
import usePokedex from "../utils/usePokedex";

const Pokelist = () => {
  const list = usePokedex();
  console.log(list);

  return <div></div>;
};

export default Pokelist;

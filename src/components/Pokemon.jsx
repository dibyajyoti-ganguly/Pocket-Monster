import React from "react";
import CG from "../assets/container_bg.png";

const Pokemon = (props) => {
  //need the name, index, sprite, types
  const { name, id } = props.data.details;
  const img_URL = props.data.details.sprites.other.dream_world.front_default;
  const types = props.data.details.types.map((t) => t.type.name).join(", ");

  return (
    <div className="bg-slate-50 w-52 py-2 my-7 h-[310px] font-mono rounded-lg">
      <img
        src={img_URL}
        alt="pokimg"
        className="w-48 bg-slate-200 mx-auto bg-cover bg-center h-48 rounded-lg"
        style={{ backgroundImage: `url(${CG})` }}
      />
      <p className="text-sm mt-2 ml-5 mb-1 text-zinc-500 font-bold">#000{id}</p>
      <p className="text-2xl ml-5 font-semibold mb-1">
        {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
      </p>
      <p className="text-sm ml-5">{types}</p>
    </div>
  );
};

export default Pokemon;

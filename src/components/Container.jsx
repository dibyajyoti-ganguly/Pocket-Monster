import React from "react";
import CG from "../assets/container_bg.png";
import Ball from "../assets/ball.png";
import Pokelist from "./Pokelist";

const Container = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CG})` }}
      className="bg-zinc-200 bg-cover bg-center min-h-[397px] mt-20 mx-32 rounded-t-2xl pt-4"
    >
      <div className="flex justify-center">
        <img src={Ball} alt="icon" className="w-12" />
      </div>
      <Pokelist />
    </div>
  );
};

export default Container;

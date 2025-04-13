import React from "react";
import PB from "../assets/pokeball.png";
import Mew from "../assets/mew.png";
import DR from "../assets/dratini.png";
import CP from "../assets/combat-power.png";
import CT from "../assets/caterpie.png";
import Pika from "../assets/pikachu.png";
import { logo } from "../constants";

const Header = () => {
  return (
    <div className="bg-slate-300 h-24 font-mono font-semibold flex justify-start items-center">
      <img src={logo} alt="logo" className="ml-14 mr-32 w-16" />
      <div className="flex items-center justify-evenly w-2/3">
        <li className="list-none flex flex-col items-center cursor-pointer">
          <img src={PB} className="w-10 mb-1" />
          <span>Pokédex</span>
        </li>
        <li className="list-none flex flex-col items-center cursor-pointer">
          <img src={CP} className="w-10 mb-1" />
          <span>Games & Apps</span>
        </li>
        <li className="list-none flex flex-col items-center cursor-pointer">
          <img src={Pika} className="w-10 mb-1" />
          <span>Trading Cards</span>
        </li>
        <li className="list-none flex flex-col items-center cursor-pointer">
          <img src={DR} className="w-10 mb-1" />
          <span>Animation</span>
        </li>
        <li className="list-none flex flex-col items-center cursor-pointer">
          <img src={Mew} className="w-10 mb-1" />
          <span>Pokémon Events</span>
        </li>
        <li className="list-none flex flex-col items-center cursor-pointer">
          <img src={CT} className="w-10 mb-1" />
          <span>News</span>
        </li>
      </div>
    </div>
  );
};

export default Header;

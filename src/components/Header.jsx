import React from "react";
import PB from "../assets/pokeball.png";
import Mew from "../assets/mew.png";
import DR from "../assets/dratini.png";
import CP from "../assets/combat-power.png";
import CT from "../assets/caterpie.png";
import Pika from "../assets/pikachu.png";

const Header = () => {
  return (
    <div className="bg-slate-300 h-24 flex items-center justify-evenly px-60 font-mono">
      <li className="list-none flex flex-col items-center">
        <img src={PB} className="w-10 mb-1" />
        <span>Pokédex</span>
      </li>
      <li className="list-none flex flex-col items-center">
        <img src={CP} className="w-10 mb-1" />
        <span>Games & Apps</span>
      </li>
      <li className="list-none flex flex-col items-center">
        <img src={Pika} className="w-10 mb-1" />
        <span>Trading Cards</span>
      </li>
      <li className="list-none flex flex-col items-center">
        <img src={DR} className="w-10 mb-1" />
        <span>Animation</span>
      </li>
      <li className="list-none flex flex-col items-center">
        <img src={Mew} className="w-10 mb-1" />
        <span>Events</span>
      </li>
      <li className="list-none flex flex-col items-center">
        <img src={CT} className="w-10 mb-1" />
        <span>News</span>
      </li>
    </div>
  );
};

export default Header;

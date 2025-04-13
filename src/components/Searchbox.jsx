import React from "react";

const Searchbox = () => {
  return (
    <div className="flex justify-evenly items-end w-2/3 ml-56 mt-16 font-mono">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl mb-3 pl-1 text-zinc-300 font-semibold">
          Name or Number
        </h1>
        <input
          type="text"
          className="bg-zinc-300 w-64 h-12 pt-0.5 pl-3 rounded-md border-2 border-gray-400"
        />
      </div>
      <button className="w-64 h-[84px] bg-emerald-600 rounded-lg text-lg text-zinc-300 cursor-pointer">
        Search for a random pokemon 🔄
      </button>
    </div>
  );
};

export default Searchbox;

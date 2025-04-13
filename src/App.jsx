import React from "react";
import BG from "./assets/body_bg.png";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BG})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <Header />
      <Searchbox />
    </div>
  );
};

export default App;

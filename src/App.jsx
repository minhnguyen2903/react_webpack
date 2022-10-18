import React from "react";
import saitama from "./assets/saitama.png";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>Test dev serve</h2>
      <h2>Test dev serve version 2</h2>
      <img src={saitama} alt="saitama" />
    </div>
  );
};

export default App;
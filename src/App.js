import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";


function App() {
  return (
      <div className="Container">
        <Balance />
        <AddTransaction />
      </div>
  );
}

export default App;

import React from "react";
import './App.css';
import HelloWorld from "./components/HelloWorld/HelloWorld";
import Clock from "./components/Clock/Clock";




const App = () => {
  return (
    <div className="App-wrapper">

        <HelloWorld/>
        <Clock/>


    </div>
  );
}

export default App;

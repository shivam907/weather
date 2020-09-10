import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./Components/Greet";
import Add2Numbers from "./Components/AddTwoNumbers";
import MyTodaysTemp from "./Components/Message_Class";

import FeatchTempData from "./Components/FeatchTempData";

function App() {
  return (
    <div className="App">
        {/*<h2>This is Our 3rd Day.. -- App</h2>*/}
        {/*<MyFirstComponent Name = "Anmol"  Age = "25" />*/}
        {/*<Add2Numbers v1 = "36" v2 = "4"/>*/}
        {/*<MyTodaysTemp/>*/}
        <FeatchTempData/>
    </div>
  );
}

export default App;

import React from "react";
import Web3 from "web3";
import NFTMinterABI from "./abis/NFTMinter.json";
import Navbar from './components/Navbar';
import Main from './components/Main'
import "./index.css"; 


function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;

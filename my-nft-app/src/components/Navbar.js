import React, { useState, useEffect } from "react";
import Web3 from "web3";
import NFTMinterABI from "../abis/NFTMinter.json";
import { Link } from "react-router-dom";
import twitter from "./twitter.png";
import email from "./email.png";
import facebook from "./facebook.png";

const Navbar = () => {
  const contractAddress = "0x42E765Ab547Ef7FE2A8D48d0Deb5793342340b50";
  const web3 = new Web3(window.ethereum);
  const contractInstance = new web3.eth.Contract(NFTMinterABI.abi, contractAddress);

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_accounts" });
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
      }
    } else {
      setIsConnected(false);
    }
  };

  const handleConnectWallet = async () => {
    try {
      const accounts = await web3.eth.requestAccounts();
      setIsConnected(true);
      // You can use the 'accounts' array if needed
    } catch (error) {
      setIsConnected(false);
      alert("Failed to connect the wallet.");
    }
  };

  return (
    <nav>
      <div className="nav__left-section">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        	<img src={twitter} alt="Twitter" />
    	</a>
    	<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        	<img src={facebook} alt="Facebook" />
        </a>
        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
        	<img src={email} alt="Email" />
        </a>
      </div>
      <div className="nav__right-section">
        {isConnected ? (
          <h3>Connected</h3>
        ) : (
          <button className="button-connect" onClick={handleConnectWallet}>Connect</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

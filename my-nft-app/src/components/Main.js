import React from "react";
import Web3 from "web3";
import NFTMinterABI from "../abis/NFTMinter.json";

const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const web3 = new Web3(window.ethereum);

const contractInstance = new web3.eth.Contract(NFTMinterABI.abi, contractAddress);



function Main() {
  const handleMintNFT = async () => {
    const accounts = await web3.eth.requestAccounts();
    const recipient = accounts[0];

    try {
      await contractInstance.methods.mintNFT(recipient).send({ from: recipient });
      alert("NFT Minted Successfully!");
    } catch (error) {
      alert("Error Minting NFT");
    }
  };

  return (
    <div className = "main">
	    <h1>ArtifexVerse</h1>
	    <h2>Can ArtifexVerse NFT save the </h2>
	    <h2>city from mindless NFT speculation? </h2>
	    <h2>Mint ArtifexVerse to find out...</h2>
	    <div className = "mint-button">
	      	<button className="button" onClick={handleMintNFT}>MINT</button>
	    </div>
    </div>
  );
}

export default Main;

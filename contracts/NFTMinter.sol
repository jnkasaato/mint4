// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMinter is ERC721Enumerable, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public maxSupply;
    uint256 public mintedSupply;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        maxSupply = 100;
    }

    function mintNFT(address recipient) external onlyOwner {
        require(mintedSupply < maxSupply, "Max supply reached");
        _tokenIdCounter++;
        _mint(recipient, _tokenIdCounter);
        mintedSupply++;
    }

    function setMaxSupply(uint256 _newMaxSupply) external onlyOwner {
        require(_newMaxSupply >= mintedSupply, "New max supply must be greater than or equal to minted supply");
        maxSupply = _newMaxSupply;
    }

    function _baseURI() internal pure override returns (string memory) {
        // Set the base URI for metadata (e.g., IPFS URL)
        return "https://your-metadata-url/";
    }
}

// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.7;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// contract OwnableDelegateProxies {

// } 

//     contract OpenseaProxyRegistry {
//         mapping (address => OwnableDelegateProxies) public proxies; 
//     }
// contract CheapTestnet is ERC721, Ownable {
//     address public immutable osProxyRegistryAddress;
//     mapping (address => bool) proxyToBeApproved;

//     string public baseURI;
//     uint256 MAX_SUPPLY = 4223;
//     uint256 MAX_FREE_SUPPLY = 45;
//     uint256 MAX_RESERVED_SUPPLY = 223;

//     uint256 tokenPrice = 0.00005 ether;
//     uint256 public totalFreeSupply = 0;
//     uint256 totalSupply = 0;
//     uint256 totalReserved = 0;
//     mapping (address => bool) hasUserFreeMinted; 
//     mapping (address => uint256) userReserveCount; 

//     bool public isMintingOn = true;
//     uint256 MAX_MINT_COUNT = 999;
//     uint256 MAX_FREE_MINT_COUNT = 44;

//     constructor(address _proxyRegistryAddress) ERC721("Testnet", "T01") {
//      osProxyRegistryAddress = _proxyRegistryAddress;
//     }

//     function withdraw() external onlyOwner {
//         uint256 balance = address(this).balance;
//         payable(msg.sender).transfer(balance);
//     }

//     function setBaseURI(string memory base) external onlyOwner {
//         baseURI = base;
//     }
//     function switchMintingStatus() external onlyOwner {
//         isMintingOn = !isMintingOn;
//     }

//     function updateProxyStatus(address proxyAddress) external onlyOwner {
//         proxyToBeApproved[proxyAddress] = !proxyToBeApproved[proxyAddress];
//     }
//     function _baseURI() internal view virtual override returns (string memory) {
//         return baseURI;
//     }

//     function setReserve(address recipient, uint256 count) external onlyOwner {
//      userReserveCount[recipient] = count;
//     }

//         function changePrice(uint256 price) external onlyOwner {
//      tokenPrice = price;
//     }

//             function reserveMint(uint256 count) external payable {
//             require(count < userReserveCount[msg.sender], "Not enought testnets reserved!");
//        require(totalReserved + count < MAX_RESERVED_SUPPLY, "All testnets have already been minted!");
//        // i = 0 because max supply already has +1 
//         for (uint256 i =0 ; i < count ; i++){
//         _safeMint(msg.sender, MAX_SUPPLY +totalReserved + i);
//         }
//         totalReserved += count;
//         userReserveCount[msg.sender] - count;
//     }

//     function mint(uint256 count) external payable {
//         require(isMintingOn , "minting not started");
//         require(totalSupply + count < MAX_SUPPLY, "All testnets have already been minted!");
//         require(tokenPrice * count == msg.value, "Insufficient / Incorrect Funds");
//         for (uint256 i =1 ;i < count ; i++){
//         _safeMint(msg.sender, totalSupply + i);
//         }
//         totalSuxpply += count;
//     }

//     function mixedMint(uint256 freeCount, uint256 paidCount) public payable {
//         require(isMintingOn , "minting not started");
//         uint256 count = freeCount + paidCount;
//         // Total
//         require(count < MAX_MINT_COUNT, "Max Mint per Txn exceeded");
//         // Free
//         require (hasUserFreeMinted[msg.sender] == false || freeCount == 0 , "user already free minted");
//         require (freeCount < MAX_FREE_MINT_COUNT , "free mints exceed count");
//         require(totalFreeSupply + freeCount < MAX_FREE_SUPPLY , "free mints exceed supply");
//         // Paid
//         require(tokenPrice * paidCount == msg.value, "Insufficient / Incorrect Funds");
//         require (totalSupply + paidCount  + freeCount< MAX_SUPPLY ,"All testnets have already been minted!");

//         for (uint256 i =0 ;i < count ; i++){
//         _safeMint(msg.sender, totalSupply + i +1);
//         }
//         totalFreeSupply +=count;
//         totalSupply +=count;
//         hasUserFreeMinted[msg.sender] = true;
//     }

//         function giftMint(address recipient, uint256 count) external payable onlyOwner{
//         require(totalReserved + count < MAX_RESERVED_SUPPLY, "All testnets have already been minted!");
//        // i = 0 because max supply already has +1 
//         for (uint256 i =0 ;i < count ;i++){
//         _safeMint(recipient, MAX_SUPPLY +totalReserved + i);
//         }
//         totalReserved += count;

//     }

//     function tokenURI(uint256 tokenId) public view virtual override(ERC721) returns (string memory) {
//         return super.tokenURI(tokenId);
//     }

//     function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721) {
//         super._beforeTokenTransfer(from, to, tokenId);
//     }

//     function _burn(uint256 tokenId) internal override(ERC721) {
//         super._burn(tokenId);
//     }

//     function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool) {
//         return super.supportsInterface(interfaceId);
//     }

//        function isApprovedForAll(address _owner, address operator) public view override returns (bool) {
//        OpenseaProxyRegistry proxyRegistry = OpenseaProxyRegistry(osProxyRegistryAddress);
//        if (address(proxyRegistry.proxies(_owner)) == operator || proxyToBeApproved[operator]) return true;
//         return super.isApprovedForAll(_owner, operator);
//     }
// }
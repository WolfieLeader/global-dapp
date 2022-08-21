// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EthersTest {
  address payable public owner;
  uint256 number = 0;
  string text = "Hello World";

  constructor() {
    owner = payable(msg.sender);
  }

  function writeNumber(uint256 _number) public {
    number = _number;
  }

  function readNumber() public view returns (uint256) {
    return number;
  }

  function writeText(string memory _text) public {
    text = _text;
  }

  function readText() public view returns (string memory) {
    return text;
  }

  function deposit() external payable {
    if (msg.value < 0.01 ether) {
      revert("You need to send at least 0.01 ether");
    }
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function");
    _;
  }

  function withdraw() external onlyOwner {
    owner.transfer(address(this).balance);
  }

  function getContractBalance() external view returns (uint256) {
    return address(this).balance;
  }
}

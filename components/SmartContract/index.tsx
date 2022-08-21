import React, { useState } from "react";
import Address from "./Address";
import Numbers from "./Numbers";
import Text from "./Text";
import ContractABI from "../../helpers/contracts/ContractABI.json";
import { getContract } from "../../helpers/functions/web3";
import SendEther from "./SendEther";

const SmartContract = () => {
  const [contractAddress, setContractAddress] = useState("0x37bC375F3466E1a8Cd2E7830339877F16915e183");
  const contract = getContract(contractAddress, ContractABI);

  return (
    <ul>
      <strong>📝Contract:📝</strong>
      <Address contractAddress={contractAddress} setContractAddress={setContractAddress} />
      <Numbers contract={contract} />
      <Text contract={contract} />
      <SendEther contract={contract} contractAddress={contractAddress} />
    </ul>
  );
};

export default SmartContract;

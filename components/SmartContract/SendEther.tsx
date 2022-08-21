import React, { useState } from "react";
import { ethers } from "ethers";
import { balanceDetector } from "../../helpers/functions/web3";

interface Props {
  contract: ethers.Contract | null;
  contractAddress: string;
}

const SendEther = ({ contract, contractAddress }: Props) => {
  const [amount, setAmount] = useState(0.01);
  const [balance, setBalance] = useState(0);

  const depositEther = async () => {
    if (contract === null) return;
    try {
      await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
    } catch (err) {
      console.log(err);
    }
  };

  const withdrawEther = async () => {
    if (contract === null) return;
    try {
      await contract.withdraw();
    } catch (err) {
      console.log(err);
    }
  };
  const contractBalance = async () => {
    const value = await balanceDetector(contractAddress);
    if (value === null) return;
    setBalance(value);
  };
  return (
    <>
      <li>
        🔴Deposite Ether:
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <button onClick={depositEther}>Send</button>
      </li>
      <li>
        🔴Withdraw Ether:
        <button onClick={withdrawEther}>Withdraw</button>
      </li>
      <li>
        🔴Contract Balance: {balance} Ether
        <button onClick={contractBalance}>Contract Balance</button>
      </li>
    </>
  );
};

export default SendEther;

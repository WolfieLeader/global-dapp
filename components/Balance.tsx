import React, { useState, useEffect, useContext } from "react";
import { balanceDetector } from "../helpers/functions/web3";
import userContext from "../helpers/contexts/user";

const Balance = () => {
  const user = useContext(userContext);

  const [balance, setBalance] = useState({
    wallet: "",
    ether: 0,
  });
  const getTheBalance = async () => {
    const userBalance = await balanceDetector(balance.wallet);
    if (userBalance === null) return;
    setBalance({ ...balance, ether: userBalance });
  };

  useEffect(() => {
    if (user.wallet !== null) {
      setBalance({ ...balance, wallet: user.wallet });
    }
  }, [user.wallet]);

  return (
    <ul>
      <strong>💰Balance:💰</strong>
      <li>
        Wallet address:{" "}
        <input
          type="text"
          value={balance.wallet}
          onChange={(e) => setBalance({ ...balance, wallet: e.target.value })}
          minLength={42}
        />
        <button onClick={getTheBalance}>Get Balance</button>
      </li>
      Balance: {balance.ether} Ether
    </ul>
  );
};

export default Balance;

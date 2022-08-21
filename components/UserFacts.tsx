import React, { useContext } from "react";
import userContext from "../helpers/contexts/user";
import { User } from "../helpers/interfaces/user";

const UserFacts = () => {
  const user = useContext(userContext);

  const prettyPrint = (wallet: string): string => {
    return wallet.substring(0, 5) + "..." + wallet.substring(wallet.length - 4);
  };
  return (
    <ol>
      🤪User Facts:🤪
      <li>{user.isMetaMask ? "MetaMask: ✔" : "MetaMask: ❌"}</li>
      <li>{user.isConnected ? "Connected: ✔" : "Connected: ❌"}</li>
      <li>{user.chainId ? `Chain ID: ${user.chainId} ✔` : "Chain ID: ❌"}</li>
      <li>{user.wallet ? `Wallet: ${prettyPrint(user.wallet)} ✔` : "Wallet: ❌"}</li>
      <li>{user.balance !== null ? `Balance: ${user.balance} Ether ✔` : "Balance: ❌"}</li>
    </ol>
  );
};

export default UserFacts;

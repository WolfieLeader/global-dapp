import React from "react";
import { User } from "../interfaces/user";

const userContext = React.createContext<User>({
  isMetaMask: false,
  isConnected: false,
  wallet: null,
  chainId: null,
  balance: 0,
});

export default userContext;

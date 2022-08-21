import React, { useContext } from "react";
import type { NextPage } from "next";
import userContext from "../helpers/contexts/user";
import UserFacts from "../components/UserFacts";
import Connect from "../components/Connect";
import Balance from "../components/Balance";
import SmartContract from "../components/SmartContract";

const Home: NextPage = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h1>Welcome</h1>
      <UserFacts />
      <Connect />
      {user.isConnected && user.chainId === "0x4" && (
        <>
          <Balance />
          <SmartContract />
        </>
      )}
    </div>
  );
};

export default Home;

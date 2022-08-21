import React from "react";
import { connectMetamask } from "../helpers/functions/web3";

const Connect = () => {
  return (
    <ul>
      🔮Connect to Metamask:🔮
      <li>
        Click Here To Interact With Features: <button onClick={connectMetamask}>Connect</button>
      </li>
    </ul>
  );
};

export default Connect;

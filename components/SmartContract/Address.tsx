import React from "react";
import Link from "next/link";

interface Props {
  contractAddress: string;
  setContractAddress: React.Dispatch<React.SetStateAction<string>>;
}
const Address = ({ contractAddress, setContractAddress }: Props) => {
  return (
    <li>
      🔵Contarct Address:{" "}
      <input type="text" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} minLength={42} />
      <Link href={`https://rinkeby.etherscan.io/address/${contractAddress}`}>
        <a target={"_blank"}>
          <button>Etherscan</button>
        </a>
      </Link>
    </li>
  );
};

export default Address;

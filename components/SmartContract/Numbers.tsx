import React, { useState } from "react";
import { ethers } from "ethers";
import { readFunction, writeFunction } from "../../helpers/functions/web3";
import { numberToHex, hexToNumber } from "../../helpers/functions/math";

interface Props {
  contract: ethers.Contract | null;
}
const Numbers = ({ contract }: Props) => {
  const [number, setNumber] = useState({
    read: 0,
    write: 0,
  });
  const writeNumberFunc = async () => {
    await writeFunction(contract, "writeNumber", numberToHex(number.write));
  };

  const readNumberFunc = async () => {
    const value = await readFunction(contract, "readNumber");
    if (value === null) return;
    setNumber({ ...number, read: hexToNumber(value) });
  };

  return (
    <>
      <li>
        🟢Write Number:{" "}
        <input
          type="number"
          value={number.write}
          onChange={(e) => setNumber({ ...number, write: Number(e.target.value) })}
        />
        <button onClick={writeNumberFunc}>Write</button>
      </li>
      <li>
        🟢Number: {number.read} <button onClick={readNumberFunc}>Read</button>
      </li>
    </>
  );
};

export default Numbers;

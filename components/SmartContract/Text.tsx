import React, { useState } from "react";
import { ethers } from "ethers";
import { readFunction, writeFunction } from "../../helpers/functions/web3";

interface Props {
  contract: ethers.Contract | null;
}

const Text = ({ contract }: Props) => {
  const [text, setText] = useState({
    read: "",
    write: "",
  });
  const writeTextFunc = async () => {
    await writeFunction(contract, "writeText", text.write);
  };

  const readTextFunc = async () => {
    const value = await readFunction(contract, "readText");
    if (value === null) return;
    setText({ ...text, read: value });
  };

  return (
    <>
      <li>
        🟡Write Text:{" "}
        <input type="text" value={text.write} onChange={(e) => setText({ ...text, write: e.target.value })} />
        <button onClick={writeTextFunc}>Write</button>
      </li>
      <li>
        🟡Text: &quot;{text.read}&quot; <button onClick={readTextFunc}>Read</button>
      </li>
    </>
  );
};

export default Text;

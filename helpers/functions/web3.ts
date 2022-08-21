import { ethers } from "ethers";

/**Easier way to request things from Ethereum*/
const requestEthereum = async (requestedMethod: string): Promise<string | null> => {
  if (typeof window.ethereum === "undefined") {
    console.error("Metamask is not installed");
    return null;
  }

  try {
    const value = await window.ethereum.request({
      method: requestedMethod,
    });

    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      if (value.length > 0) {
        return value[0];
      } else {
        return null;
      }
    }
  } catch (err) {
    if (typeof err === "string") {
      console.error(err);
    } else {
      console.error("Error requesting metamask");
    }
  }
  return null;
};

/**Connects to Metamask */
export const connectMetamask = (): Promise<string | null> => {
  return requestEthereum("eth_requestAccounts");
};

/**Detects which chain the user is on */
export const chainDetector = (): Promise<string | null> => {
  return requestEthereum("eth_chainId");
};

/**Detects which wallet the user uses */
export const walletsDetector = (): Promise<string | null> => {
  return requestEthereum("eth_accounts");
};

/**Detects how much ether this account holds */
export const balanceDetector = async (wallet: string): Promise<number | null> => {
  if (typeof window.ethereum === "undefined") {
    console.error("Metamask is not installed");
    return null;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const balance = await provider.getBalance(wallet);
  const balanceInEthers = ethers.utils.formatEther(balance);
  return parseFloat(balanceInEthers);
};

/**Connects to a provider and returns a contract*/
export const getContract = (contractAddress: string, contractABI: any): ethers.Contract | null => {
  if (typeof window.ethereum === "undefined") {
    console.error("Metamask is not installed");
    return null;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
  return contract;
};

/**Makes it easier calling a read function */
export const readFunction = async (contract: ethers.Contract | null, functionName: string): Promise<string | null> => {
  if (contract === null) {
    return null;
  }
  try {
    const result = await contract[functionName]();
    if (typeof result === "string") return result;
    else if (typeof result === "number") return result.toString();
    else if (typeof result === "object" && result._hex) return result._hex;
    else return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

/**Makes it easier calling a write function */
export const writeFunction = async (
  contract: ethers.Contract | null,
  functionName: string,
  value: string | number | boolean
): Promise<void> => {
  if (contract === null) {
    return;
  }
  try {
    await contract[functionName](value);
  } catch (err) {
    console.error(err);
  }
};

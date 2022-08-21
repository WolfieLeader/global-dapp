import { ethers, BigNumber } from "ethers";

export const numberToHex = (number: number): string => {
  return ethers.utils.hexlify(number);
};

export const hexToNumber = (hex: string): number => {
  return BigNumber.from(hex).toNumber();
};

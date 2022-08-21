export interface User {
  isMetaMask: boolean;
  isConnected: boolean;
  wallet: string | null;
  chainId: string | null;
  balance: number | null;
}

declare global {
  interface Window {
    /**Metamask injects the etheruem property into the window, but so do other wallets */
    ethereum?: any;
  }
}
export {};

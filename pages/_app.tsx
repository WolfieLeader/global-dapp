import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { balanceDetector, chainDetector, walletsDetector } from "../helpers/functions/web3";
import { useEtheruemListeners } from "../helpers/hooks/web3";
import { User } from "../helpers/interfaces/user";
import userContext from "../helpers/contexts/user";
import "../scss/index.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    isMetaMask: false,
    isConnected: false,
    wallet: null,
    chainId: null,
    balance: null,
  });

  const setUp = async () => {
    const chainId = await chainDetector();
    const wallet = await walletsDetector();
    let balance: number | null = wallet !== null ? await balanceDetector(wallet) : null;

    setUser({
      isMetaMask: typeof window.ethereum !== "undefined",
      isConnected: wallet !== null,
      chainId: chainId,
      wallet: wallet,
      balance: balance,
    });
  };

  useEtheruemListeners();
  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Head>
        <title>Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <userContext.Provider value={user}>
        <Component {...pageProps} />
      </userContext.Provider>
    </>
  );
}

export default MyApp;

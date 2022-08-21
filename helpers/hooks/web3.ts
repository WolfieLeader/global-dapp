import React, { useEffect } from "react";

/**Detects wheatear the user switched wallet or chain and reloads the page if so */
export const useEtheruemListeners = () => {
  const windowReloads = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      console.error("Metamask is not installed");
      return;
    }
    window.ethereum.on("accountsChanged", windowReloads);
    window.ethereum.on("chainChanged", windowReloads);
    window.ethereum.on("disconnect", windowReloads);
    window.ethereum.on("connect", windowReloads);
    return () => {
      window.ethereum.removeListener("accountsChanged", windowReloads);
      window.ethereum.removeListener("chainChanged", windowReloads);
      window.ethereum.removeListener("disconnect", windowReloads);
      window.ethereum.removeListener("connect", windowReloads);
    };
  }, []);
};

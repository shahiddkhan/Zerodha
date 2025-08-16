import React, { useState, useCallback } from "react";
import BuyActionWindow from "./BuyActionWindow";

// Create context with default empty functions
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = useCallback((uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  }, []);

  const handleCloseBuyWindow = useCallback(() => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && selectedStockUID && (
        <BuyActionWindow uid={selectedStockUID} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

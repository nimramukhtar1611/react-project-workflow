import React from "react";
import { AppProvider } from "./context/appContext";
import {AppDataProvider} from "./context/appState";
const CombinedProvider = ({ children }) => {
  return (
    <AppProvider>
      <AppDataProvider>
        {children}
      </AppDataProvider>
    </AppProvider>
  );
};

export default CombinedProvider;

"use client";

import React, { createContext, useContext } from "react";
import { dataRepository } from "../lib/dataRepository";

const DataContext = createContext();

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={dataRepository}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);

export function useDataSection(section) {
  const repository = useData();
  return repository.getData(section);
}

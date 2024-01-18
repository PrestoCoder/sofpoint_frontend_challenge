import React, { createContext, Dispatch, SetStateAction } from "react";

// Define the type for the context value
export interface CountryContextType {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  isDropVis: boolean;
  setIsDropVis: Dispatch<SetStateAction<boolean>>;
}

// This will hold the values that will be provided to the children components.
// Also, it will help provide those values.
const CountryContext = createContext<CountryContextType | undefined>(undefined);

export { CountryContext };

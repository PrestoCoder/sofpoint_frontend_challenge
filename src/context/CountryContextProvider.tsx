import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { CountryContext } from "../context/CountryContext";

// Define the type for the context value
interface CountryContextType {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  isDropVis: boolean;
  setIsDropVis: Dispatch<SetStateAction<boolean>>;
}

interface CountryContextProviderProps {
  children: ReactNode;
}

/*
    This CountryContextProvider will be used as a wrapper over components.
    <CountryContextProvider>
        <Child component />
    </CountryContextProvider>

    The child component will be passed on as children parameter, and what will be returned will be
    a wrapped version of the component, wrapped in CountryContext.Provider.

    Thus, CountryContextProvider is kind of a wrapper function, such that it wraps the component and returns it.
*/
const CountryContextProvider = ({ children }: CountryContextProviderProps) => {
  // Let this data be something we'd fetch using fetchAPI.
  // Then we'll set the data using setData.
  // And we'll pass the data to children components using value parameter.
  const [country, setCountry] = useState<string>('PK');
  const [isDropVis, setIsDropVis] = useState<boolean>(false);

  const combinedState: CountryContextType = {
    country,
    setCountry,
    isDropVis,
    setIsDropVis,
  };

  return (
    <CountryContext.Provider value={combinedState}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;

import React, { useContext } from 'react';
import countries from '../JSON/countries.json';
import { CountryContext } from "../context/CountryContext";

interface DropRowProps {
  countryCode: string;
}

function DropRow({ countryCode }: DropRowProps) {
  const countryContext = useContext(CountryContext);

  if (!countryContext) {
    // Handle the case when the context is undefined
    return null;
  }

  const { setCountry, setIsDropVis } = countryContext;

  const countryList: Record<string, { name: string; calling_code: string }> = countries;
  const getFlagEmoji = (countryCode: string) => String.fromCodePoint(...[...countryCode.toUpperCase()].map(x => 0x1f1a5 + x.charCodeAt(0)));

  return (
    <>
      <a className="block py-2 px-4 text-base" href="#" onClick={(e) => {
        if (e.currentTarget instanceof HTMLElement) {
          const selectedCountryCode = e.currentTarget.children[0].innerHTML;
          setCountry(selectedCountryCode);
          setIsDropVis(false);
        }
      }}>
        {getFlagEmoji(countryCode.toLowerCase())} &nbsp;&nbsp;&nbsp;
        <span className='invisible hidden'>{countryCode}</span>
        <span>{countryList[countryCode]["name"]}</span>&nbsp;&nbsp;&nbsp;
        {countryList[countryCode]["calling_code"]}
      </a>
    </>
  );
}

export default DropRow;

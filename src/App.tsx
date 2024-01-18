import { useState, useContext } from 'react';
import countries from './JSON/countries.json';
import Dropdown from './components/Dropdown';
import { CountryContext, CountryContextType } from "./context/CountryContext";
import { modifyCountryMaskData } from './utils/modifyCountryMaskData';
import { getMasks } from './utils/getMasks';
import { formatNumber } from './utils/formatNumber';
import { getFlagEmoji } from './utils/getFlagEmoji';

// Define the default values for the context
const defaultContext: CountryContextType = {
  country: '',
  isDropVis: false,
  setIsDropVis: () => {},
  setCountry: () => {},  // Add default value for setCountry
};

function App() {
  // Use the default values if the context value is undefined
  const { country, isDropVis, setIsDropVis, setCountry }: CountryContextType = useContext(CountryContext) || defaultContext;

  // Required for accurate update of the masks.
  const countriesMasks = modifyCountryMaskData();
  const countryList: Record<string, { name: string; calling_code: string; phone_length: string }> = countries;

  const [phoneNumber, setPhoneNumber] = useState('');

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target.value;
  const phoneMask = getMasks(countriesMasks, country);
  const formattedNumber = formatNumber(phoneMask, input);

  // Check if the formatted number meets the minimum digit requirement
  const currentCountryData = countryList[country];

  if (formattedNumber.replace(/\D/g, '').length <= parseInt(currentCountryData.phone_length, 10)) {
    setPhoneNumber(formattedNumber);
  } else {
    // Show an alert to the user
    alert('Invalid phone number length');
  }
};

const handleSubmit = () => {
  // Check if the formatted number meets the minimum digit requirement
  const currentCountryData = countryList[country];
  const formattedNumber = phoneNumber.replace(/\D/g, '');

  if (formattedNumber.length === parseInt(currentCountryData.phone_length, 10)) {
    // Perform any additional actions or submit the form
    alert('Phone number submitted successfully!');
  } else {
    // Show an alert to the user
    alert('Invalid phone number length. Please correct it before submitting.');
  }
};

  return (
    <div className="w-1/2 h-full bg-stone-300 mx-auto">
      <div className='my-60 h-full w-3/4 bg-sky-200 mx-auto flex flex-col items-center p-5'>

        <Dropdown countryList={countryList} isDropVis={isDropVis} />

        <div className='flex justify-around w-2/4'>
        <button onClick={() => setIsDropVis(!isDropVis)}>
          {getFlagEmoji(country.toLowerCase())} &nbsp; {countryList[country]?.calling_code}
        </button>
          <input
            value={phoneNumber}
            onChange={handleChange}
            className="mx-3"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder={getMasks(countriesMasks, country)}
            required
          />
        </div>

        <div>
          <button onClick={handleSubmit} type="submit" className='m-2 items-center bg-slate-400 px-4 py-2 rounded-md'>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default App;

import React from 'react';
import DropRow from './DropRow';
import { filterFunction } from '../utils/filterFunction';

interface DropdownProps {
  countryList: Record<string, unknown>;
  isDropVis: boolean;
}

function Dropdown({ countryList, isDropVis }: DropdownProps) {
  return (
    <div className={`roun bg-orange-300 h-60 w-60 -mx-28 absolute top-72 left-1/2 dropdown ${isDropVis ? "visible" : "invisible"}`}>
      <form className="h-full" action="#">
        <div className='dropdown'>
          <div className="w-full max-h-60 overflow-y-auto" id="myDropdown">
            <div className="sticky top-0 bg-white">
              <input className="w-full px-4 py-2 border-b border-gray-300" type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
            </div>
            {Object.keys(countryList).map((countryCode) => (
              <DropRow key={countryCode} countryCode={countryCode} />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Dropdown;

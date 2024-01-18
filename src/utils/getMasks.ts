export const getMasks = (countriesMasks: Record<string, { mask: string | string[] }>, country: string) => {
    let mask = countriesMasks[country]?.mask;
    if (Array.isArray(mask)) {
      mask = mask[0];
    }
    return mask;
  };
  


/*
const getMaskUsingNumberLength = () => {
    const maskLength = countriesMasks[countryList]['phone_length'];
      Code for generating masks from phone number length
      Because its a bit uncertain as to how phone number length can be
      converted to mask directly, using the above getMask function instead.
  }
*/
export const formatNumber = (phoneMask: string, input: string): string => {
  const numericValue = input.replace(/\D/g, '');
  let formattedPhoneNumber = '';
  let valueIndex = 0;
  let numberLength = numericValue.length;

  for (let maskIndex = 0; maskIndex < phoneMask.length; maskIndex++) {
    if (valueIndex >= numberLength) {
      break;
    }
    const maskChar = phoneMask[maskIndex];

    if (maskChar === '#') {
      formattedPhoneNumber += numericValue[valueIndex] || '';
      valueIndex++;
    } else {
      formattedPhoneNumber += maskChar;
    }
  }

  // Limit the length of the formatted phone number to match the mask length
  formattedPhoneNumber = formattedPhoneNumber.slice(0, phoneMask.length);

  return formattedPhoneNumber;
};

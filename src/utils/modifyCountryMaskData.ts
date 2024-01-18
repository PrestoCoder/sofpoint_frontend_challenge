import countriesData from '../JSON/countriesMasks.json';

export const modifyCountryMaskData = () => {
    const modifiedData = countriesData.reduce((acc: Record<string, any>, obj: Record<string, any>) => {
        const { iso, ...remainingValues } = obj;
        acc[iso] = remainingValues;
        return acc;
    }, {});
    return modifiedData;
}

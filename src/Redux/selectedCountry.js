const initialState = {};

function selectedCountry(state = initialState, action) {
  debugger;

  switch (action.type) {
    case 'GET_ALL_COUNTRY_HOLIDAYS': {
      const arr = [];
      const holidays = { ...action.holidays.holidays };
      Object.keys(holidays).forEach((key) => {
        arr.push({ ...holidays[key], date: key });
      });
      return {
        ...state,
        holidays: arr,
        countryKey: action.countryKey,
      };
    }
    default:
      return { ...state };
  }
}

export default selectedCountry;

const getAllCountryHolidaysAC = (holidays, countryKey) => ({
  type: 'GET_ALL_COUNTRY_HOLIDAYS',
  holidays,
  countryKey,
});

export {
  getAllCountryHolidaysAC,
};

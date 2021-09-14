const initialState = {};

const allHolidaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_COUNTRIES': {
      const keys = Array(Object.keys(action.countries))[0];
      const values = Array(Object.values(action.countries))[0];
      const arr = [];
      keys.forEach((el, ind) => {
        arr.push({
          key: el, value: values[ind],
        });
      });
      return {
        ...state,
        countries: [...arr],
      };
    }
    default:
      return { ...state };
  }
};

export default allHolidaysReducer;

const allCountriesAC = (countries) => ({
  type: 'GET_ALL_COUNTRIES',
  countries,
});

export {
  allCountriesAC,
};

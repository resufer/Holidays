import { combineReducers, createStore } from 'redux';
import allHolidaysReducer from './allHolidays';
import randomHolidayReducer from './randomHoliday';
import selectedCountry from './selectedCountry';

const reducers = combineReducers({
  allHolidaysState: allHolidaysReducer,
  randomHolidayState: randomHolidayReducer,
  selectedCountryState: selectedCountry,
});

const store = createStore(reducers);

export default store;

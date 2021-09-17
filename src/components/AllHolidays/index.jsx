import React from 'react';
import Holidays from 'date-holidays';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allCountriesAC } from '../../Redux/allHolidays';
import { HolidayItem, HolidaysList } from './styles';
import { getAllCountryHolidaysAC } from '../../Redux/selectedCountry';

function AllHolidays() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state?.allHolidaysState?.countries);
  window.allCountries = allCountries;
  React.useEffect(() => {
    if (!allCountries) {
      const hd = new Holidays();
      dispatch(allCountriesAC(hd.getCountries()));
    }
  }, []);

  return (
    <HolidaysList>
      {allCountries?.map((el) => (
        <HolidayItem onClick={() => {
          dispatch(getAllCountryHolidaysAC(new Holidays(el.key), el.key));
        }}
        >
          <NavLink to="/all/selected">
            {el?.value}
          </NavLink>
        </HolidayItem>
      ))}
    </HolidaysList>
  );
}

export default AllHolidays;

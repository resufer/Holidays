import { useSelector } from 'react-redux';

function SelectedCountry() {
  const { holidays, countryKey } = useSelector((state) => state?.selectedCountryState);
  // window.holidays = holidays;
  // window.countryKey = countryKey;
  return (
    <div>
      {holidays?.map((holiday) => (
        <div>
          <div>{holiday.date}</div>
          <div>{holiday.name[countryKey.toLowerCase()] || holiday.name.en}</div>
        </div>
      ))}
    </div>
  );
}

export default SelectedCountry;

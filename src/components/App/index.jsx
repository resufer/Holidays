import { Route } from 'react-router-dom';
import Header from '../Header';
import AllHolidays from '../AllHolidays';
import RandomHoliday from '../RandomHoliday';
import PlannedHolidays from '../PlannedHolidays';
import AppWrapper from './styles';
import Login from '../Login';
import SelectedCountry from '../SelectedCountry';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Route path="/all" exact render={() => <AllHolidays />} />
      <Route path="/all/selected" render={() => <SelectedCountry />} />
      <Route path="/random" render={() => <RandomHoliday />} />
      <Route path="/planned" render={() => <PlannedHolidays />} />
      <Route path="/login" render={() => <Login />} />
    </AppWrapper>
  );
}

export default App;

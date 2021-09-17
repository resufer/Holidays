import { Route } from 'react-router-dom';
import Header from '../Header';
import AllHolidays from '../AllHolidays';
import AppWrapper from './styles';
import SelectedCountry from '../SelectedCountry';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Route path="/all" exact render={() => <AllHolidays />} />
      <Route path="/all/selected" render={() => <SelectedCountry />} />
    </AppWrapper>
  );
}

export default App;

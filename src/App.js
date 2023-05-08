import { Route, Switch } from 'react-router-dom';
import './App.css';
import { CelciusToFahrenheit } from './components/CelciusToFahrenheit';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/celsiustofahrenheit'>
          <CelciusToFahrenheit/>
        </Route>
        <Route exact path='/recognizenumber'>
          <CelciusToFahrenheit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

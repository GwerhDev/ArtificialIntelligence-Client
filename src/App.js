import { Route, Switch } from 'react-router-dom';
import './App.css';
import { CelciusToFahrenheit } from './components/CelciusToFahrenheit';
import { Home } from './pages/Home';
import { Head } from './components/Head';
import { RecognizeNumber } from './components/RecognizeNumber';
import { VisitProjects } from './components/VisitProjects';

function App() {
  return (
    <div className="App">
      <Head/>
      <VisitProjects/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/celsiustofahrenheit'>
          <CelciusToFahrenheit/>
        </Route>
        <Route exact path='/recognizenumber'>
          <RecognizeNumber/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

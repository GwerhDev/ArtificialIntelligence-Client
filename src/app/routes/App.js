import { Redirect, Route, Switch } from 'react-router-dom';
import '../../App.css';
import { VisitProjects } from '../components/VisitProjects/VisitProjects';
import { Head } from '../components/Head/Head';
import { Home } from '../pages/Home';
import { CelciusToFahrenheit } from '../pages/CelciusToFahrenheit';
import { RecognizeNumber } from '../pages/RecognizeNumber';
import { RecognizeCatOrDog } from '../pages/RecognizeCatOrDog';
import { RemoveBackground } from '../pages/RemoveBackground';


function App() {
  return (
    <div className="App">
      <Head/>
      <VisitProjects/>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/ai-testing' />
        </Route>
        <Route exact path='/ai-testing'>
          <Home/>
        </Route>
        <Route exact path='/ai-testing/celsiustofahrenheit'>
          <CelciusToFahrenheit/>
        </Route>
        <Route exact path='/ai-testing/recognizenumber'>
          <RecognizeNumber/>
        </Route>
        <Route exact path='/ai-testing/recognizecatordog'>
          <RecognizeCatOrDog/>
        </Route>
        <Route exact path='/ai-testing/removebackground'>
          <RemoveBackground/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';
import HomePage from './home';

const App = () => 
  <>
    <Switch>
      <Route exact path="/" render={props => <HomePage {...props} />} />
    </Switch>
  </>
;

export default App;

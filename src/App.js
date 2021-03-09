
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Composants/Homepage';
import Gameplay from './Composants/Gameplay';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           
          <Route exact path="/">
             <Homepage/>
           </Route>
           
           <Route exact path="/Gameplay">
             <Gameplay/>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;

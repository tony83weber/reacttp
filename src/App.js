import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/pagina/Inicio';
import Item from './components/pagina/Item';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/Inicio' component={Inicio}/>
          <Route path='/Item'  component={Item}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Details from './Pages/Details';


function App() {
  return (
    <Router>
      <AppBar/>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/filmes/:id'>
            <Movies />
          </Route>
          <Route exact path='/filmes/detalhes'>
            <Details />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

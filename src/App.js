import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar/>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/filmes/:id'>
            <Filmes />
          </Route>
          <Route exact path='/filmes/detalhes'>
            <Detalhes />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

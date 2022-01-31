import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import NavBar from './Components/NavBar';
import Details from './Pages/Details';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movies/:id'>
            <Movies />
          </Route>
          <Route exact path='/movies/details'>
          <Details />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;

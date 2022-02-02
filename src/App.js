import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import NavBar from './Components/NavBar';
import Details from './Pages/Details';
import api from './api';
import Footer from './Components/Footer';

const api_key = "7cbb88dd714f84168b91799865f574d3";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get(`/movie/popular`, {
        params: {api_key}
       
      });
      setMovies(response.data.results);
    }
    getCharacters();
  }, []);

  return (
    <Router>
      <NavBar movies={movies}/>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movies/'>
            <Movies movies={movies}/>
          </Route>
          <Route exact path='/details/:id'>
          <Details/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

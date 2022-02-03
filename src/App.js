import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './Pages/Movies';
import Details from './Pages/Details';
import api from './api';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

const api_key = "7cbb88dd714f84168b91799865f574d3";
function App({goBack}) {
  const [movies, setMovies] = useState([]);
  const [movieFiltered, setMovieFiltered] = useState({})

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get(`/movie/popular`, {
        params: {api_key, language:"pt-BR"}
      });
      setMovies(response.data.results);
      setMovieFiltered(response.data.results)
    }
    getCharacters();
  }, []);

  function handleSelectedGenre (id) {
     
    console.log('deu certo', id)
  
  }

  return (
    <Router>
        <NavBar goBack={goBack} movies={movies} onFilterChange={handleSelectedGenre}/>
      <Switch>
          <Route exact path='/'>
            <Movies movies={movies} />
          </Route>
          <Route exact path='/details/:id'>
          <Details goBack={goBack}/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

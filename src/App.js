import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './Pages/Movies';
import Details from './Pages/Details';
import api from './api';
import Footer from './Components/Footer';
import Header from './Components/Header';
//import { useParams } from "react-router-dom"

const api_key = "7cbb88dd714f84168b91799865f574d3";
function App({goBack, genres}) {
  const [movies, setMovies] = useState([]);
  const [currentGenre, setGenreFiltered] = useState([])
  // const { id } = useParams();

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get(`/movie/popular`, {
        params: {api_key, language:"pt-BR"}
      });
      setMovies(response.data.results);
     
    }
    getCharacters();
  }, []);

   function handleSelectedGenre (id) {
     setGenreFiltered(id)
   }

//   useEffect(()=> {
//     async function getGenre() {
//       const response= api.get(`/movie/popular/&with_genres/${id}`, {
//       params: {api_key, language:"pt-BR"}
//        });
//        console.log(response.data.results);
//        setGenreFiltered(response.data.results)
//     }
//     getGenre();
// }, []);

  return (
    <Router>
      <Header goBack={goBack} />
      <Switch >
          <Route exact path='/'>
            <Movies movies={movies} onFilterChange={handleSelectedGenre} />
          </Route>
          <Route exact path='/details/:id'>
          <Details goBack={goBack} genres={genres}/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

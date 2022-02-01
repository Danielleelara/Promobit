
import { useState, useEffect } from 'react';
import { useParams } from "react-router"; 
import api from '../api'


const api_key = "7cbb88dd714f84168b91799865f574d3";
const Movies = () => {
    const { id } = useParams()
    const[movie, setMovie] = useState();
    
    useEffect(() => {
        async function getCharacter() {
          const response = await api.get(`/movie/popular`, {
            params: {api_key}
          });
          setMovie(response.data);
         
        }
        getCharacter();
      }, [id]);
      console.log('Filmes', movie)

    return ( 
        <div>
            <p>Movies</p>
        </div>
     );
}
 
export default Movies;
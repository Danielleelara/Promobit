import { useState, useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";

const api_key = "7cbb88dd714f84168b91799865f574d3";
const Details = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
      async function getMovieDetails() {
        const response = await api.get(`/movie/${id}`, {
          params: {api_key, language: "pt-BR"}
        });
        
        setMovie(response.data);
      }

      getMovieDetails();
    }, [id]);

    return ( 
        <div >
            <p>Details</p>
           {movie.original_title}
        </div>
     );
}
 
export default Details;
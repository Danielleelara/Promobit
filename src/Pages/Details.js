import { useState, useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import styles from './Details.module.css'
import moment from "moment";

const api_key = "7cbb88dd714f84168b91799865f574d3";
const Details = () => {
    const [movie, setMovie] = useState({});
    const [details, setDetails]= useState([]);
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

  
    useEffect(() => {
        async function getMovieDetails() {
          const response = await api.get(`/movie/${id}`, {
            params: {api_key, language: "pt-BR"}
          });
          console.log('tá aqui',response.data)
          setDetails(response.data);
        }
  
        getMovieDetails();
      }, [id]);

    return ( 
        <div className={styles.details_container}>
          <div >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={movie.original_title} />
            <div>
              {movie.title} ( {moment(`${movie.release_date}`).format("YYYY")} )
            </div>
           <p>
           
           </p>

          </div>
        </div>
     );
}
 
export default Details;
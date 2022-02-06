import { useState, useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import styles from './Details.module.css'
import moment from "moment";


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


  function getGenres() {
      return movie?.genres?.map((genre)=> genre.name).join(', ') || '';
  }

  return ( 
    <div className={styles.details_container}>
      <ul >
        <li>
          <img className={styles.img_details} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={movie.original_title} />
        </li>
        <li>
          {movie.title} 
          ( {moment(`${movie.release_date}`).format("YYYY")} ) 
        </li>
        <li>
          {moment(`${movie.release_date}`).format("DD/MM/YYYY")} - 
          ({movie.original_language}) {getGenres()} -
          {movie.runtime} minutos
        </li>
        <li>
          {Number(movie.vote_average) * 10}% Avaliação dos usuários
        </li>
        <li className={styles.details_sipnose}>
          Sipnose: 
          {movie.overview}
        </li> 
        <li>
          Trailler
        </li>
        <li>
          <img className={styles.img_details2} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` } alt={movie.original_title} /> 
        </li>
      </ul>
    </div>

  );
}
 
export default Details;
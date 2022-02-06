import { useState, useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import moment from "moment";
import { CircularProgressbar, buildStyles   } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const api_key = "7cbb88dd714f84168b91799865f574d3";

const Details = () => {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      const movieDetail = await api.get(`/movie/${id}`, {
        params: { api_key, language: "pt-BR" },
      });

      const movieVideos = await api.get(`/movie/${id}/videos`, {
        params: { api_key, language: "pt-BR" },
      });

      const trailer = movieVideos.data.results.find(
        (findTrailer) =>
          findTrailer.official === true && findTrailer.site === "YouTube"
      );

      setMovie(movieDetail.data);
      setTrailer(trailer);
    }

    getMovieDetails();
  }, [id]);

  function getGenres() {
    return movie?.genres?.map((genre) => genre.name).join(", ") || "";
  }

  return (
    // <div className={styles.details_container}>
    //       <img className={styles.details_img} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={movie.original_title} />
    //     <p className={styles.details_text}>
    //       {movie.title}
    //       ( {moment(`${movie.release_date}`).format("YYYY")} )
    //     </p>
    //     <p className={styles.details_text}>
    //       {moment(`${movie.release_date}`).format("DD/MM/YYYY")} -
    //       ({movie.original_language}) {getGenres()} -
    //       {movie.runtime} minutos
    //     </p>
    //     <p className={styles.details_text}>
    //       {Number(movie.vote_average) * 10}% Avaliação dos usuários
    //     </p>
    //     <p className={styles.details_text}>
    //       Sipnose:
    //       {movie.overview}
    //     </p>
    //     <h2>
    //       Trailler
    //     </h2>
    //     <p>
    //       <img className={styles.img_details2} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` } alt={movie.original_title} />
    //     </p>
    // </div>
    <main>
      <header className={styles.header}>
        <div className={styles.avatar_container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className={styles.details_container}>
          <h1>
            {movie.title} ({moment(`${movie.release_date}`).format("YYYY")})
          </h1>
          <p>
            {moment(`${movie.release_date}`).format("DD/MM/YYYY")} • (
            {movie?.original_language?.toUpperCase()}) • {getGenres()} •{" "}
            {movie.runtime} minutos
          </p>
          <p>
          {/* <CircularProgressbar styles = {(buildStyles({textSize : '2px' }))} value={Number(movie.vote_average)} text={`${movie.vote_average* 10}%`} />; */}
          </p>
          <h2>Sinopse</h2>
          <p>{movie.overview}</p>
        </div>
      </header>
      <section></section>
      {trailer && (
        <section>
          <iframe
            title={movie.original_title}
            id="ytplayer"
            type="text/html"
            width="907"
            height="510"
            src={`http://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            frameborder="0"
          />
        </section>
      )}

      <section></section>
    </main>
  );
};

export default Details;

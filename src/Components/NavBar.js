import { useState,useEffect } from "react";
import api from "../api";
import styles from "./NavBar.module.css"
import Button from "./Button";
import Filter from "./Filter";
import Vector from '../../src/Vector.svg'

const api_key = "7cbb88dd714f84168b91799865f574d3";
const NavBar = ({onFilterChange }) => {
    
    const [genres, setGenres]= useState([]);

    useEffect(() => {
        async function getMovieGenres() {
          const response = await api.get(`/genre/movie/list`, {
            params: {api_key, language: "pt-BR"}
          });
          setGenres(response.data.genres);
        }
  
        getMovieGenres();
      }, []);

    return ( 
    <div className={styles.navbar_container}>
       <div className={styles.navbar_inicio}>
            <img className={styles.nav_img} onClick={()=>{window.history.back()}} src={Vector} alt='logo'/>
       </div>
        <div className={styles.navbar_text}>
            <p className={styles.text1}>Milhões de filmes, séries e pessoas para descobrir. Explore Já </p>
            <Filter />
            <Button genres={genres} onFilterChange={onFilterChange}/>
        </div>
       
    </div> 
    );
}
 
export default NavBar;
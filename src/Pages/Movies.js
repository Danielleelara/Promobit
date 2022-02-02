import styles from './Movies.module.css'
import Card from "../Components/Card";

const Movies = ({movies, movie}) => {
   
    return ( 
        <div className={styles.movies}>
            <Card movies={movies}/>
        </div>
     );
}
export default Movies;
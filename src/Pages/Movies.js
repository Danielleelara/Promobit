import styles from './Movies.module.css'
import Card from "../Components/Card";

const Movies = ({movies}) => {
   
    return ( 
        <div className={styles.movies}>
            <Card movies={movies}/>
        </div>
     );
}
export default Movies;
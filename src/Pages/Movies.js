import styles from './Movies.module.css'
import Card from "../Components/Card";
import NavBar from '../Components/NavBar';

const Movies = ({movies, onFilterChange }) => {
   
    return ( 
        <>
            <NavBar onFilterChange={onFilterChange}/>
            <div className={styles.movies}>
                <Card movies={movies}/>
            </div>
        </>
     );
}
export default Movies;
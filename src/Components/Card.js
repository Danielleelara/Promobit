import styles from './Card.module.css'
import moment from 'moment';
const Card = ({movies}) => {

    return ( 
        <div className={styles.card_container}>
            {movies.map((movie) => (
                <div>
                    <ul className={styles.card} >
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={movie.original_title} />
                        </li>
                        <li>
                            {movie.original_title}
                        </li>
                        <li>
                           {moment(`${movie.release_date}`).format("DD/MM/YYYY")}
                        </li>
                    </ul>
                </div>
            ))}

        </div>
     );
}
 
export default Card;
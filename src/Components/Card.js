import styles from './Card.module.css'
const Card = ({movies}) => {
    return ( 
        <div>
            {movies.map((movie) => (
                <div className={styles.card_conatiner}>
                    <ul className={styles.card} >
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                        </li>
                        <li>
                            {movie.original_title}
                        </li>
                        <li>
                            {movie.release_date}
                        </li>
                    </ul>
                </div>
            ))}

        </div>
     );
}
 
export default Card;
import styles from './Card.module.css'
const Card = ({movies}) => {
    return ( 
        <div>
            {movies.map((movie) => (
                <div>
                    <ul className={styles.card} key={movies.id}>
                        <li
                            component="img"
                            height="400"
                            margin="20"
                            image={movies.backdrop_path}
                            alt="figura"
                        >
                        </li>
                        <li>
                            {`Nome: ${movie.original_title}`}
                        </li>
                        <li>
                            {`Detalhes: ${movie.backdrop_path}`}
                        </li>
                    </ul>
                </div>
            ))}

        </div>
     );
}
 
export default Card;
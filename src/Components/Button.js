import styles from './Button.module.css'

const Button = ({movies}) => {
    return ( 
        <div className={styles.button}>
            {movies.map((movie) => <button>{movie.original_title}</button> )}
        </div>
     );
}
 
export default Button;
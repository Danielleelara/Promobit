
import styles from './Button.module.css'

const Button = ({genres, onFilterChange}) => {
    return ( 
        <div className={styles.button} >
            {genres.map((genre) => <button onClick={()=> onFilterChange(genre.id)} key={genre.id}>{genre.name}</button> )}
        </div>
     );
}
 
export default Button;
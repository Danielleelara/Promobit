
import styles from "./NavBar.module.css"
import Button from "./Button";
import Filter from "./Filter";
const AppBar = ({movies}) => {
    return ( 
    <div className={styles.navbar_container}>
        <p className={styles.navbar_title}>TMDB  <button/> </p>
    
        <div className={styles.navbar_text}>
            <p className={styles.text1}>Milhões de filmes, séries e pessoas para descobrir. Explore Já </p>
            <Filter/>
            <Button movies={movies}/>
        </div>
       
    </div> 
    );
}
 
export default AppBar;